---
author: Lehman
title: Proton VPN Review
description: Checking out the free version
publishedDate: 2025-09-24
tags:
  - security
  - information-technology
showToC: true
---

## Introduction

My internet provider is [BAM Broadband](https://www.co.bambroadband.com/), a residential wireless service with a line of sight tower a couple of miles to the north of the ranch. It's costing me 75 bucks a month. They have been pretty reliable, and they are good at letting us know about scheduled down times, etc.

The good news: I now have fiber available through my electric co-op, it's just a matter of scheduling the installation at some point, sooner rather than later, I hope. Anyway...

## Internet Connection, Default Specs

Here's the "standard" connect rate I get when everything is working:

![output from Speedtest](@/assets/images/posts/normal-connection.png)

![ping responses from 8.8.8.8](@/assets/images/posts/normal-ping-times.png)

the speeds are OK, although our Amazon Prime channels look fuzzy and glitch on us once in awhile. We don't do any gaming or anything like that...

The latency is good - ping rates between 20ms to 40ms pretty consistently.

## Installation and Use of the Free Version

The [Proton VPN](https://protonvpn.com/) app is a normal dmg file for my Mac OS running an obsolete Monterey version (12.7.6). Installation was the usual drag and drop into /Application.

I'm using the free version in conjunction with my [Proton Mail Plus](https://proton.me/mail/pricing) subscription, so the app started right up. With the free plan, Proton decides which server connection is to be used, as shown below:

![VPN with free connections map](@/assets/images/posts/VPN-free-connections.png)

## Internet Connection, VPN Enabled

My version of Proton VPN is 4.8.0, the latest version available for my obsolete Mac OS. Sigh.

I did a Quick Connect at 4 PM MDT on a Tuesday, and I got connected to the Netherlnds NL-FREE#75 server. After a 15 minute "soak time", I ran the ping test and fired up Speedtest:

![output from Speedtest with VPN](@/assets/images/posts/NL-VPN-connection.png)

![ping responses from 8.8.8.8 with VPN](@/assets/images/posts/NL-VPN-ping-times.png)

## Discussion

Note: IP addresses were blanked out on all images as a precaution...

- Connecting was a no-brainer, the app just worked. Nice.

- Latency increased as server location proximity increased, which is to be expected. From a user standpoint, it was noticable, but not annoying, which was a bit surprising.

- For general web surfing, the VPN connection was adequate, but I wouldn't want to watch NetFlix or download Ubuntu updates with the VPN activated.

## Conclusions

The free version is actually pretty impressive. No ads, no throttling, full privacy. Although I don't have a compelling need for VPN privacy, I'll probably start using it more, especially when I upgrade to a high speed fiber connection.
