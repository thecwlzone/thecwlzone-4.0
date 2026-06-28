---
author: Lehman
title: Astro 7 Upgrade Notes
description: Jousting with Copilot
publishedDate: 2026-06-29
tags:
  - astro-development
showToC: true
---

## Introduction

The [Astro](https://astro.build) developer team is pushing out new releases at a very rapid pace. Version 7.0 was released on June 22, 2026. I just finished the 6.0 update on March 16th of this year, and it's once again time to look at a new, major release.

## Phase 1 - Upgrade the Packages

Upgrading the Astro packages to 7.0 were done in the usual fashion:

```bash
pnpm dlx @astrojs/upgrade
```

I got a clean result from `pnpm check`

The remaining packages were upgraded with `pnpm upgrade`

The upgrades produced one error from `pnpm check` in [Header.astro](https://github.com/thecwlzone/thecwlzone-4.0/blob/master/src/components/layout/Header.astro):

```bash
Error:   21:8  error  Exporting values from components is not allowed  astro/no-exports-from-components
```

[GitHub](https://github.com) flagged this one on a `git push`, and [Copilot](https://github.com/features/copilot) provided the solution: I had Copilot move the export declaration into a separate file under [src/util/typeGuards.ts](https://github.com/thecwlzone/thecwlzone-4.0/blob/master/src/util/typeGuards.ts), and then import the file in [Header.astro](https://github.com/thecwlzone/thecwlzone-4.0/blob/master/src/components/layout/Header.astro).

At this point, I had a working Astro 7.0 version of my web site. Next:

## Phase 2 - Migrate Markdown to Satteri

In Astro 7, the internally developed [Satteri](https://satteri.bruits.org) Markdown processor is now the default - the unified Markdown pipeline is deprecated, so I needed to figure out how to make that conversion.

I fired up Copilot in [VS Code](https://code.visualstudio.com) and told it to find an appropriate migration solution. A _very_ abbreviated copy of the Copilot run is shown below:

```md collapse={9-172}
# Astro 7 Plugin Migration: remark/rehype → Sätteri

## Session Overview

**Date**: 2026-06-26 (17:04 UTC)
**Objective**: Migrate an Astro 7 project from the remark/rehype markdown plugin pipeline to the new Sätteri processor

---

## Current Project State

### Markdown Plugins in Use

1. **readingTimePlugin** (custom remark plugin)
   - Calculates reading time
   - Stores result in frontmatter
   - Used in [PostLayout.astro](PostLayout.astro) for display

2. **sectionizePlugin** (remark-sectionize)
   - Wraps headings + following content in `<section>` tags
   - Provides semantic HTML structure

3. **remarkGfm** (remark-gfm)
   - Enables GitHub-flavored markdown

4. **rehypeExternalLinks** (rehype-external-links)
   - Adds `target="_blank"` and `rel="noopener noreferrer"` to external links

### Current Configuration

- Using `@astrojs/markdown-remark` with unified() processor
- Astro 7.0.3 already installed

---

## Key Migration Decisions

### 1. Reading Time Calculation

**Decision**: Calculate at render-time in PostLayout.astro instead of as a plugin

- **Reason**: Simplifies migration and avoids frontmatter modification challenges in Sätteri
- **Implementation**: Use the `reading-time` package directly in the layout component
- **Benefit**: Removes dependency on custom plugin infrastructure

### 2. Section Element Generation

**Decision**: Generate `<section>` elements for semantic HTML only (no styling/JavaScript interaction)

- **Reason**: Simplifies plugin logic—just wrapping headings with content
- **Implementation**: Convert to HAST-level plugin (works with rendered HTML elements)

### 3. Plugin Architecture

**Approach**: Define plugins inline in astro.config.ts

- Avoids import path issues with Sätteri's Rust-compiled components
- Simplifies the build process

---

## Migration Steps Completed

### ✅ Step 1: Install Sätteri Integration

bash
pnpm add @astrojs/markdown-satteri

### ✅ Step 2: Update astro.config.ts

**Removed imports:**

- `import { unified } from '@astrojs/markdown-remark'`
- `import sectionizePlugin from 'remark-sectionize'`
- `import readingTimePlugin from './src/plugins/readingTimePlugin'`
- `import remarkGfm from 'remark-gfm'`
- `import rehypeExternalLinks from 'rehype-external-links'`

**Added imports:**

- `import { satteri } from '@astrojs/markdown-satteri'`

**Added inline plugins:**

#### Sectionize Plugin (HAST-level)

#### External Links Plugin (HAST-level)

**Updated markdown configuration:**

### ✅ Step 3: Update PostLayout.astro

**Imports changed:**

// Added:
import { getReadingTime } from "reading-time";

// Removed:
// (no longer destructuring from remarkPluginFrontmatter)

**Reading time calculation:**

const { Content, headings } = await render(post);

// Calculate reading time at render-time instead of via plugin
const readingTime = getReadingTime(post.body).text;

---

## Technical Notes

### Why HAST-level Plugins?

- HAST (Hypertext Abstract Syntax Tree) plugins work with rendered HTML elements
- More compatible with Sätteri's architecture than trying to extend MDAST
- Heading (`<h1>`-`<h6>`) elements are straightforward targets for wrapping

### Why Inline Plugins?

- Satteri is Rust-compiled and doesn't export plugin utilities in standard ways
- Defining plugins inline avoids import resolution issues
- Keeps all markdown processing logic in one place (astro.config.ts)

### Reading Time Migration

- Original: Plugin modified frontmatter during parse time
- New: Layout component calculates during render time
- Trade-off: Minimal performance impact; reading-time package is lightweight

---

## Benefits of This Approach

1. **Performance**: Sätteri is faster than unified() pipeline
2. **Simplicity**: Fewer dependencies (removed @astrojs/markdown-remark)
3. **Maintainability**: All processing in one config file
4. **Future-proof**: Uses Astro 7's native markdown processor

---

## Next Steps for Verification

- [ ] Run `pnpm build` to confirm no errors
- [ ] Render a blog post and verify:
  - Reading time displays correctly
  - External links have `target="_blank"`
  - Content is wrapped in `<section>` elements
- [ ] Test with CSS/JS that relies on section wrapping
- [ ] Deploy and monitor for any edge cases

---

## Files Modified

1. **astro.config.ts** - Updated imports, added inline plugins, changed processor
2. **src/layouts/PostLayout.astro** - Import reading-time, calculate at render-time
3. **Deleted**: src/plugins/satteriSectionizePlugin.ts (moved inline)
4. **Deleted**: src/plugins/satteriExternalLinksPlugin.ts (moved inline)

---

## Key Takeaways

- ✅ Sätteri is the default markdown processor in Astro 7
- ✅ Remark/rehype plugins can be adapted to Sätteri equivalents
- ✅ Some logic (like reading time) works better outside the plugin pipeline
- ✅ GitHub-flavored markdown and SmartyPants are built into Sätteri by default
- ✅ Built-in support for front matter, collapsible sections, and other features

---

_This migration successfully moves your project from the legacy remark/rehype pipeline to Astro 7's modern Sätteri processor while maintaining all existing functionality._
```

Not shown: Copilot went through a significant number of `pnpm build` iterations - the build would throw errors, Copilot would anaylize the results, make code changes and re-run the build until the run was error free. The entire process ran close to 30 minutes, and I used up most of my quota of free tokens.

Watching the process, I was impressed with the agent's ability to move from step to step, explaining what needed to happen next.

## Phase 3 - Cleanup

Running `pnpm check` flagged 7 errors in [astro.config.ts](https://github.com/thecwlzone/thecwlzone-4.0/blob/master/astro.config.ts) - I had Copilot analyze the messages, and it eventually came up with a solution that cleared the errors. Again, a number of iterations through `pnpm check` were required in order to zero in on the necessary solutions.

Finally - an Astro 7 version of the web site, using the latest Markdown processor. Push to [NFSN](https://www.nearlyfreespeech.net), and all is well. Total elapsed time: around 1.5 hours.

## Conclusion

I'm not a [Javascript](https://ecma-international.org/publications-and-standards/standards/ecma-262/) developer - I have always considered Javascript to be a necessary evil for web development. As a result, much of what Astro does is still FM[^1] to me. AI coding agents are making things even more obscure, but at a much faster pace. I'm grateful for the speed improvement anyway...

## References

[Astro 7.0](https://astro.build/blog/astro-7/)

[Astro 7 Upgrade Details](https://docs.astro.build/en/guides/upgrade-to/v7/)

[^1]: FM = F**\***g Magic
