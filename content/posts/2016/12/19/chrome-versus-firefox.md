---
author: Lehman
title: Chrome Versus Firefox
description: Battle of the Browsers
publishedDate: 2016-12-19
tags:
  - information-technology
  - security
showToC: true
---

## Browser Wars? Not Really

It's been awhile since I have used Firefox except to pop it up once in awhile so that I could say, "Yes, our latest UI feature looks good on Chrome, Firefox and a late model version of IE". But as we see more and more information about how Google seems to have a cozy relationship with the US FedGov's intelligence agencies, I wonder more and more about the wisdom of using Google products in general. My paranoia aside, I thought I would do a quick check of current Firefox capabilities. I used Firefox version 50.1.0 and Chrome version 55.0.2883.95 for this article.

## Memory Benchmark

As a quick "memory footprint" comparison, I cleared the cache and pointed both browsers to my [web site](http://www.thecwlzone.com/). Here are the results from OS X Activity Monitor:

![chrome](@/assets/images/posts/chrome.png)

Holy Cow, 9 helper processes to look at one web site? Really? 476.5 MB total

![firefox](@/assets/images/posts/firefox.png)

Hmm, 254.1 MB total. Seems like Firefox is the clear winner here, but I have been using Chrome exclusively all this year, so I'm wondering if history, more plugins, etc might be skewing the data. Let's face it, all browsers are memory [durocs](http://www.ansi.okstate.edu/breeds/swine/duroc/) nowadays.

## Developer Tools

Well now. I just discovered the [Firefox Developer](https://www.mozilla.org/en-US/firefox/developer/?v=a) browser version. This will need a separate article. Very intriguing....

## Other Observations

- Firefox is more forgiving of https sites with self-signed certificates. This is a non-issue for most people, but I bounce around a lot of internal company sites that need SSL encryption to protect logins and passwords, but that do not need the overhead of "formal" certs from [Comodo](https://www.comodo.com/) _et.al._ Chrome makes you click through a couple of pages worth of warnings before you can navigate to a self-signed site. Annoying over the course of a business day. I have heard that there is some way of filtering that behavior out, but I have yet to find a solution that works.

- Chrome feels more "professional" to me, Firefox feels more suited for non-developers, i.e. the vast majority of the population. My wife is quite happy using Firefox. When I suggest a test drive of Chrome, she looks at my screen and can't see the ROI for a new browser learning curve. Most people would agree, I think. Plus, I can't think of a compelling reason to switch. "All of the cool kids use Chrome" goes nowhere.

## Conclusions

We must assume that Google, like the NSA, is gathering and retaining everything it can about our Internet usage. I have been using [DuckDuckGo](https://duckduckgo.com/) as my search engine for awhile now, so maybe it's time to revisit Firefox for "non-professional" use, i.e. personal purchases, web site visits to political content, travel plans, etc. Just another aspect of the "hard target" security philosophy.

My development team colleagues (Rails developers on Macs, BTW) are all pretty much Chrome users on a daily basis, so I'll want to stay "compatible" with them. But I am for sure going to look into using Firefox Developer. Stay tuned!
