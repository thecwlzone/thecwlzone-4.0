---
author: Lehman
title: But, But, I Just Wanted A New Feed Reader!
description: And investigated yet another web browser instead...
publishedDate: 2026-03-11
tags:
  - whatever
showToC: true
---

## Introduction

I have been using the [Brave browser](https://brave.com) for quite awhile now, and I like it a lot. Lately, though, I have switched back to [Firefox](https://www.firefox.com/en-US/) for two reasons. First, my wife uses Firefox, and when she has a Firefox quesion I need to fire it up and find an answer, so why not just run it anyway. Also, since Firefox release 148, there are AI Controls built in that allow you to turn on all AI features, turn them all off, or enable a subset of AI features. Nice.

![Firefox AI Controls](@/assets/images/posts/firefox-ai-controls.webp)

<!-- markdownlint-disable MD033 -->
<figcaption>Firefox AI Controls Pane</figcaption>
<!-- markdownlint-restore -->

But that's not today's topic. As a web dinosaur, I'm still using [RSS](https://en.wikipedia.org/wiki/RSS) as a news aggregator, and I have been using [Feedly](https://feedly.com/homepage) for awhile now. It's pretty good overall, but lately a new "feature" has cropped up - I'll read through a list of entries, and then click on _Mark All as Read_. Returning to the tab a little later, the entries have reappeared, so I have to mark them as read _again_. Annoying, (although not as annoying as listening to some clown complain about the performance of a free app).

So I started poking around to find an alternative reader. I fould a couple of possibilities (free, of course), and then I saw a note about how the [Vivaldi](https://vivaldi.com) [^1] [^2] browser has a RSS reader baked into it.

My first reaction was <Groan!> Not _another_ browser, please God! But, whilst poking around the Vivaldi web site, I discovered that most of the developers are located in Oslo, Norway and Reykjavík, Iceland. Cool. And so, because [Iceland is awesome](/gallery/iceland), I decided to give Vivaldi a spin. Also, the Vivaldi folks seem to real big on [privacy](https://vivaldi.com/we-respect-your-privacy/) and they have a [very cautious attitude](https://vivaldi.com/blog/a-i-browsers-the-price-of-admission-is-too-high/) about the current AI frenzy.

## Vivaldi Installation

I decided to run this experiment on a [Ubuntu](https://ubuntu.com/download) 24.04.4 [VMWare](https://www.vmware.com) image running on my obsolete (circa 2017) [MacBook Air](https://www.apple.com/macbook-air) machine. As a result, I cannot offer any insights into Vivaldi performance, because _everything_ on my machine is dog slow. Sigh. (My Santa wish list includes a [System 76 laptop](https://system76.com/laptops/lemp13/configure) running Ubuntu and a [Shelby GT500 Mustang](https://shelby.com/Vehicles/GT500-Signature-Edition). Yeah, I know, pass the pipe...)

The Vivaldi download page had the latest stable .deb file available, and I did the usual _sudo apt install_ dance. The installation took up an additional 450 Mbytes of disk space...

## Initial Configuration

Firing up Vivaldi for the first time walks you through an initial setup, and then you are ready to go.

The [online documentation](https://help.vivaldi.com/?pk_campaign=v-menu) is excellent, they spent a lot of time on it, and it shows.

The default Theme is pretty boring, and I found a really cool Northern Lights theme that I just _had_ to install.

![vivaldi iceland theme](@/assets/images/posts/vivaldi-iceland-theme.webp)

<!-- markdownlint-disable MD033 -->
<figcaption>The Iceland Northern Lights Theme</figcaption>
<!-- markdownlint-restore -->

Vivaldi is "highly configurable", which is a euphemism for "Byzantine In Its Complexity" [^3], so normal people will be overwhelmed by all the available bells and whistles. With 40+ years of tweaking unix/linux settings, I found that to be kinda cool. (Cue the Nerd Alert signal.) There is a Gear icon in the lower left corner of the screen that pops up the Settings menu in a floating pane that I found to be a pain (pun intended), so I turned that into tab instead:

![vivaldi settings](@/assets/images/posts/vivaldi-settings.webp)

<!-- markdownlint-disable MD033 -->
<figcaption>The Incredibly Busy Settings Tab</figcaption>
<!-- markdownlint-restore -->

## Some Interesting Features

- When you download something, most browsers give you a little hourglass icon to note the download process. Not Vivaldi - you get a full blown panel with all kinds of real time data. I got a kick out of this one...

![vivaldi downloads panel](@/assets/images/posts/vivaldi-downloads.webp)

<!-- markdownlint-disable MD033 -->
<figcaption>The Download Pane</figcaption>
<!-- markdownlint-restore -->

- I'm struggling a bit with the Bookmarks configuration. I'll need to RTFM [^4] a bit more...

![vivaldi bookamrks pane](@/assets/images/posts/vivaldi-bookmarks-pane.webp)

<!-- markdownlint-disable MD033 -->
<figcaption>The Bookmarks Pane</figcaption>
<!-- markdownlint-restore -->

- There are lot of options for Windows and Tabs, there is a Notes feature, [Proton VPN](https://protonvpn.com/support/vivaldi) and the History feature, all of which seem to have a lot of capabilities. For now though, this is all TBD stuff...

## Finally - The RSS Reader

![vivaldi rss reader](@/assets/images/posts/vivaldi-rss-reader.webp)

<!-- markdownlint-disable MD033 -->
<figcaption>The RSS Reader</figcaption>
<!-- markdownlint-restore -->

When you navigate to a web page, Vivaldi will try to detect if the web page has RSS enabled, and pressing the RSS icon will start up a dialog to add the page to your feed list. Nice.

Notice that the tab title says _Mail_. There is some kind of interaction with Vivaldi's mail feature that I don't understand, but it's a minor issue for now, and I will not be enabling the mail feature anyway. But it _is_ a bit odd...

The layout feels busy to me, so I may tweak the settings a bit more, but overall it's a pretty decent news feed. I do like that it's built into the browser.

## Discussion

I will be using Vivaldi in an "experimental" mode for the foreseeable future, e.g. I won't be using it for any financial transactions - that will still need to be done with Firefox on the native Mac OS. I decided to set up a Vivaldi account so I can sync my data to multiple devices and then add Vivaldi to the Mac side of the house, but this won't be a high priority.

## Conclusions

I started out looking for a newsreader, and I ended up with a new browser instead. A pretty cool browser, as it turns out...

Vivaldi is for developers, configuration hackers and users who are paranoid about AI and internet security (that's me on all counts). This is not your mother's browser, unless she has a Computer Science degree.

Having said that, I really like Vivaldi, and I will continue to configure and refine its behavior.

## Notes

[^1]: [Vivaldi the Composer](https://en.wikipedia.org/wiki/Antonio_Vivaldi)

[^2]: [Why Vivaldi?](https://smartbranding.com/names-with-stories-the-story-behind-vivaldi-com/)

[^3]: [Byzantine Complexity](https://academickids.com/encyclopedia/index.php/Byzantine_complexity)

[^4]: RTFM = Read The F-----g Manual
