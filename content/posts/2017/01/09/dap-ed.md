---
author: Lehman
title: DAP-ed!
description: Limited bandwidth out here in the boonies
publishedDate: 2017-01-09
tags:
  - whatever
showToC: true
---

## Web Developers: We Don't All Have Unlimited Bandwidth

In an ideal universe, we would all have cable-grade Internet connections with 0.5 ms latency and unlimited downloads from [NetFlix](https://www.netflix.com/), and a wealth of ISPs to choose from, even if we're living in remote areas of the planet. Meanwhile, back in RealityWorld, some of us are actually constrained by the resources of the one available ISP in our locale. So to you web developers living in Chicago, Philly, NYC and other bastions of First World Internet-Land: _Yo! We don't all have unlimited bandwidth, we'll tell you when we want to download something!_

## Satellite Internet - One Step Above Dialup

My situation is pretty extreme, but not all that unique. I have no cable, no DSL, no reliable wireless. My only option is a satellite ISP. Bear in mind, I'm not really _that_ remote. The nearest [Comcast](https://www.xfinity.com/overview) cable connection is 15 miles South in [Falcon, Colorado](https://en.wikipedia.org/wiki/Falcon,_Colorado), and I'm only 45 minutes away from [Colorado Springs](https://en.wikipedia.org/wiki/Colorado_Springs,_Colorado), so I'm hardly out in the wilderness, but satellite is all I can get. I share this restriction with a couple million other folks, according to [this article.](http://spacenews.com/42556viasat-hopes-to-lure-rural-subscribers-with-unlimited-bandwidth/)

My ISP is Wildblue (owned by [ViaSat](https://www.viasat.com/)). Wildblue's Data Allowance Policy  (DAP) is pretty limited, so I know better than to try to view movies or large videos.

As a result, I'm not real familiar with such services, and that's one of the reasons I got bit.

Note: Wildblue's service has been highly reliable, I have no problems whatsoever with the company, it's just that I really, _really_ need some 21st Century Internet service. The ViaSat [Exede](http://www.exede.com/) service is available, it's got more bandwidth (at a higher price), but I have not - by choice - pulled the trigger on the upgrade. There's a reason for that, which I hope to cover later his year...

## HTML5 and the Video Tag

Prior to HTML5, in order to view a video you had to install some kind of browser plugin - I'm looking at you Adobe Flash. With HTML5 , video playback is embedded and available using the [video tag](http://www.w3schools.com/HTML/html5_video.asp).

One of the video tag's attributes is "autoplay", which does just what it says. The videos are downloaded in the background, ready to be played. Nice if you have unlimited bandwidth, but...

## Blindsided by Vimeo

Recently a local video producer sent us some samples of his work via a link to [Vimeo](https://vimeo.com/). We went over to take a look, and we viewed something like 6 videos over a span of about 30 minutes. Then we walked away _and left the Vimeo browser tab active_. About 9 Giga-Bytes of video data got auto-downloaded while we weren't looking, and Wildblue shut down our service. Lovely. We've been DAP'ed!

## Identifying HTML5 Web Sites

So, is a web site running HTML5 or not? It's easy to check - mouse-right-click on View Page Source, and the first line on the page will tell you. You are looking for the [DOCTYPE](http://www.w3schools.com/tags/tag_doctype.asp) declaration.

If DOCTYPE has a DTD definition in the declaration like this:

```html
!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
```

it's HTML 4, and the video tag will not be available.

[![Web Site Using HTML 4](@/assets/images/posts/nfsn_source-1024x819.png 'A Web Site Running HTML 4')

If DOCTYPE says simply

```html
!DOCTYPE html
```

then it's HTML 5:

![Vimeo Web Site Source Code](@/assets/images/posts/vimeo_source-1-1024x819.png 'Vimeo uses HTML5 and 289 autoplays on its home page!')

## Disable Autoplay in Your Browser

This PC World [article](http://www.pcworld.com/article/3119886/software/stop-html5-autoplay-videos-in-chrome-firefox-opera-but-not-edge-explorer-safari.html) has a nice overview of various browser fixes for HTML5 autoplay, including some config changes to Firefox. Chrome apparently requires an extension.

## Firefox Add-Ons

In addition to direct hack of Firefox config settings, there are some helpful add-ons:

![Firefox_Extensions](@/assets/images/posts/Firefox_Extensions.png 'Firefox Extensions')

Disable HTML5 Autoplay [add-on](https://addons.mozilla.org/en-US/firefox/addon/disable-autoplay/)

YouTube no Buffer [add-on](https://addons.mozilla.org/en-US/firefox/addon/youtube-no-buffer-autoplay/)

I can also recommend [Adblock Plus](https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/) and [Ghostery,](https://addons.mozilla.org/en-US/firefox/addon/ghostery/) just because...

## Chrome

The [Disable HTML5 Autoplay](https://github.com/Eloston/disable-html5-autoplay) extension can be used for all browsers if you want to play with the source, but it's mainly designed for Chromium-based servers (i.e. Chrome).

Note: I am not currently using Chrome, I'll talk about that in another post.

## Are We Done Yet?

In searching articles about HTML5 video, I get the feeling that audio and video can still get downloaded despite the config changes and browser extensions under some circumstances. I wish I could quantify that feeling. In any event, I'm thinking that I will need to up my bandwidth usage monitoring strategies, which will be another topic for later. Cheers!
