---
author: Lehman
title: Fun With RSS Feeds
description: Various tweaks, and changing to a new reader
publishedDate: 2025-04-21
tags:
  - software development
showToC: false
---

Astro has a baked in [RSS setup](https://docs.astro.build/en/recipes/rss/), so getting a basic feed in place was pretty quick.

Styling it for human consumption was done with [pretty-feed-v3](https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl), and I added a description.

I have used [Feedreader](https://feedreader.com/online/#/welcome/?action=login) for years and years, but for some reason it would not see my new feed setup. The displayed favicon was from my 3.0 site. It's like Feedreader has an old version of the site stored away somewhere.

In an attempt to debug the problem, I went over to [feedly](https://feedly.com/homepage) and set up an account. The 4.0 feed was there. I'm sure I looked at feedly back in the day, but this time it looked viable, so I have been migrating all my feeds to feedly.

So - clicking on the RSS icon gives you a human readable list of my entire blog contents, which is much easier than crawling through the individual post pages. The Tags and the search icon in the top banner can help to filter the entries as well.
