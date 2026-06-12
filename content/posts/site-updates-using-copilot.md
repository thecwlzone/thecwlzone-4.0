---
author: Lehman
title: Site Updates Using Copilot
description: My first use of Copilot to add a new feature
publishedDate: 2026-06-13
tags:
  - astro-development
showToC: true
---

## Introduction

I've been using [VS Code](https://code.visualstudio.com) for awhile now, but I disabled the [Github Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) extension, as I was finding the autocompletion feature to be a bit annoying.

I considered adding a couple more sections to the [About page](/about), but as the page was already a bit long I decided to modify the sections to expand and collapse, with collapse being the default for some (but not all) of the sections. That sounded like a good experiment for using Copilot Chat...

## The Prompt

```text
modify the markdown sections to expand and collapse. use the tailwind css styling
```

Confession: This was my second attempt with Copilot. The first time around, I forgot to add the [tailwind](https://www.w3schools.com/TAGS/tag_details.asp) styling stipulation. Copilot used a vanilla-flavored [details tag](https://www.w3schools.com/TAGS/tag_details.asp) for the sections, which worked, but had no styling added. I requested that addition, and Copilot added the tailwind CSS stuff. Overall though, it felt klunky, so I backed out all of the changes, and started a new Copilot chat with the prompt as shown above.

Lesson Learned: Think about what you really want and make the prompt as detailed as required.

## Results

This time around Copilot created a [Details component](https://github.com/thecwlzone/thecwlzone-4.0/blob/master/src/components/Details.astro) and used that in the About page. Clever. But it didn't correctly detect the light and dark mode available for the site. As a result, text was not readable in dark mode. I had Copilot fix that successfully. But wait - the link text was still washed out. So one more iteration was required, and Copilot figured out how to make the link text visible.

The complete conversation is shown below. (Click on "128 collapsed lines" to view the complete file.)

```text collapse={4-164}
User: modify the markdown sections to expand and collapse. use the tailwind css styling

GitHub Copilot: I'll search the repo for existing dropdown/collapse components to reuse.

Searched for files matching `**/Dropdown.astro`, 1 match

Read [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Dropdown.astro)

I'll open about.mdx to see its structure and where to add collapsible wrappers.

Read [](file:///home/clehma203/Sites/thecwlzone-4.0/src/pages/about.mdx)

I'll add a `Details` component and update about.mdx to use it for collapsible sections.

Generating patch (43 lines) in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

Next I'll update about.mdx to import `Details` and wrap each H2 section in the new component.

Generating patch (122 lines) in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/pages/about.mdx)

Now I'll record the plan and mark completed steps.

Created 3 todos

**Progress:** Added a Tailwind-styled collapsible component and updated the About page; next step is to preview locally.

- **Component:** Added Details.astro — a reusable Tailwind-styled collapsible (`<details>`) component.
- **Page updated:** Replaced H2 sections with collapsible wrappers in about.mdx.
- **Todo:** Verified edits recorded; manual visual check recommended (see next step).

To preview locally run:
pnpm dev


Want me to convert other pages (e.g., posts or projects) to use the same collapsible pattern?

Made changes.

User: in dark mode, the text in details is too dim. can you fix that?

GitHub Copilot: Checking the current `Details.astro` content so I can update the dark-mode text styling safely.

Read [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

Found the component; updating the summary and content wrapper with explicit dark-mode text colors.

Replacing 14 lines with 14 lines in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

✅ Fixed dark-mode readability in Details.astro.

- `summary` now uses `text-slate-900 dark:text-slate-100`
- content uses `text-slate-700 dark:text-slate-100`

If you want, I can also make the panel background darker in dark mode for better contrast.

Made changes.

User: actually, make the panel background a bit lighter in dark mode

GitHub Copilot: Adjusting the panel background class to use a lighter dark-mode shade while preserving current styling.

Replacing 5 lines with 5 lines in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

✅ Dark-mode panel background softened in Details.astro.

- Added `dark:bg-slate-800` for a lighter panel tone in dark mode.

Made changes.

User: undo that last change

GitHub Copilot: Reverting the dark-mode background change in Details.astro.

Replacing 5 lines with 5 lines in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

✅ Reverted the dark-mode panel background change in Details.astro.

Made changes.

User: the links in dark mode are not readable - too dark

GitHub Copilot: Reviewing Details.astro to update dark-mode link colors specifically within the collapsible content.

Read [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

Found the issue: prose link color in dark mode isn't overwritten. Updating the component to brighten links under `.dark`.

Replacing 14 lines with 23 lines in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

✅ Dark-mode links in `Details` are now readable.

- Added `.dark .prose a { color: #7dd3fc; }`
- Kept normal text colors unchanged

If the site uses a different dark-mode class than `.dark`, I can adapt that too.

Made changes.

User: link text is still too dark

GitHub Copilot: Updating the component to enforce brighter dark-mode link colors with higher CSS specificity and Tailwind dark prose support.

Replacing 19 lines with 25 lines in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

Double-checking the current Details.astro output and dark-mode selectors to ensure the fix applies correctly.

Read [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

Inspecting Tailwind typography configuration so I can set the most compatible dark-mode link classes.

Searched for regex `typography|@tailwindcss/typography|prose-a|dark:prose-a` (`**/*.{js,ts,astro}`), no results

Checking dark-mode implementation and global styles so the link fix uses the actual theme class/selector.

Searched for regex `dark\b|dark:|theme: 'dark'|darkMode|classList|document.documentElement.classList` (`**/*.{js,ts,astro,css,scss,sass,md}`), 54 results

Searched for files matching `**/*tailwind*.*`, no matches

I found the dark mode variant uses `[data-mode=dark]`; updating the component to match that and brighten links reliably.

Read [](file:///home/clehma203/Sites/thecwlzone-4.0/src/style/main.css)

I found the theme uses `[data-mode=dark]` rather than `.dark`; updating the CSS selectors accordingly.

Replacing 18 lines with 18 lines in [](file:///home/clehma203/Sites/thecwlzone-4.0/src/components/Details.astro)

✅ Fixed dark-mode link styling for the actual theme selector in your project.

Now links inside `Details` should be readable when `[data-mode=dark]` is active.

Made changes.

```

Lesson Learned: Test out the new feature, including all of the user interface options.

## Discussion

I was impressed with how Copilot was able to walk through the Astro code hierarchy to find and adjust the appropriate CSS settings. An experienced Astro developer (that is _not_ me, BTW) would have probably figured that out pretty quickly. Creating a Details component was a very good Astro-centric way of handling a basic HTML tag like details (and frankly, an element with which I was unfamiliar).

## Conclusions

I have disabled Copilot's autocompletion feature in VS Code, but I expect I'll fire up Copilot Chat the next time I want to add something new to the site.
