---
author: Lehman
title: Some Updates to the Site
description: Some interesting code features added...
publishedDate: 2025-09-21
tags:
  - astro-development
  - software-development
showToC: true
---

## Introduction

Version 4.0 of my web site is a shameless code theft from [Nordlys](https://nordlys.fjelloverflow.dev/), an [Astro](https://astro.build/) theme built by [FjellOverflow](https://fjelloverflow.dev/). Once in awhile I check his [Github](https://github.com/FjellOverflow/nordlys) code base to see if he has added anything interesting. As a result, I decided to incorporate the changes he added to the 2.3.2 through the 3.0.0 releases, as described below.

## Link To The Latest Post

The landing page now has a "Read my latest post" link to the blog - a nice hook to perhaps generate some additional interest in the site.

## Fun With Quotations

The latest post link was not interacting well with the blockquote on the landing page - the link ended up on the bottom of the page, which looked silly. After giving it some thought, I decided that the quotation should probably be located in the [About](/about) page anyway. That's my story, and I'm sticking with it.

I also created a BlockQuote Component to better control font size and other styling for the two quotes that now appear on the About page.

## Expressive Code Integration

The site now uses [Expressive Code](https://expressive-code.com/) to highlight code snippets in a post. There is a whole bunch of cutesy syntactical sugar you can add to make your code examples pop. I added a number of items to the Ruby and HTML code blocks in my previous post about [adding an avatar](/posts/adding-an-avatar) as a sample of what Expressive Code can do. Pretty neat.

I will not bother to update code blocks in older posts, as most of the examples are obsolete anyway. The inevitable march of progress...

## Copilot Help

My interaction with [Copilot](https://github.com/features/copilot) in [VS Code](https://code.visualstudio.com/) had mixed results. A question about how to activate `showLatestPost` gained me an immediate correct answer. Asking about changing the position of the blockquote in the landing page produced an unworkable solution. Asking about reducing whitespace around the blockquote yielded a good Tailwind CSS styling solution, but that didn't actually fix the problem, because the whitespace issue is probably associated with the Separator layout. Interacting with Copilot was a good learning experience nonetheless.

## Conclusion

This was a fairly low-key set of enhancements, and I gained some additional expertise with Astro and Copilot in the process. All in all, time well spent. As always, thanks to [FjellOverflow](https://fjelloverflow.dev/) for the code samples and inspiration.
