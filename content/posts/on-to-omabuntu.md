---
author: Lehman
title: On To Omabuntu
description: And a quick look at Omarchy
publishedDate: 2026-09-10
tags:
  - software-development
showToC: true
---

## Introduction

In our [last episode](/posts/i-broke-omakub), I was whining about a botched upgrade from [Omakub](https://omarchy.org/omakub/) to [Omabuntu](https://omabuntu.omakasui.org), and what to do about it. As a quick sidebar, I decided to play around with [Omarchy](https://omarchy.org).

The Cool Kids are working with [Arch Linux](https://archlinux.org), and Omarchy is an opinionated automatic configuration of a developer environment. (The Omarchy splash page is insane - pop over there and be amazed.) Omarchy is under the auspices of the [Omakom Foundation](https://omarchy.org/foundation/), which has some awesome funding and an impressive list of patrons and supporters. This one looks like it may be around for awhile, so I thought I would give Omarchy a spin.

![Arch Linux Home Page](@/assets/images/posts/arch-linux-web-page.webp) "The Arch Linux Home Page. Love the retro UI."

## Omarchy Installation

The ISO image installed fairly quickly, and without any glitches, but when the installation was complete I was looking at a black screen. Uh-huh. Linux hardware graphics compatibility issues, what a surprise. [ChatGPT](https://chatgpt.com) gave me a few suggestions about how to alter the boot loader with some graphics-based options, but to no avail.

The reality is, Omarchy and [Hyprland](https://hypr.land) want late model GPU hardware in order to run well, so trying to bolt it onto 9 year old Mac Intel hardware has a poor ROI. The Cool Kids most likely have a deep pockets employer behind them to purchase state of the art laptops with outrageously expensive memory capacities and mondo GPU capabilities. That's not an option for me at the moment. So, OK, back to a [Ubuntu](https://ubuntu.com) solution.

## Omabuntu with Ubuntu 26?

On a whim, I downloaded the Ubuntu 26.4 ISO and fired that up under VMware. The installation went well, but running the Omabuntu script did nothing. It didn't crash, but clearly it was not going to run on the 26 LTS - as noted by the developer, I might add.

## Omabuntu and Ubuntu 24

The 24 LTS ISO install took over an hour for some reason, probably due to my low bandwidth (25 MB download speeds on a good day). No problems were encountered, so I fired up the Omabuntu script. The script finished with an unspecified error, and I was invited to attempt a retry. The retry worked, and I had a clean 24.4 LTS running with the Omabuntu configs.

## Discussion and Conclusion

There are a lot of things that need to be manually migrated from the old VMware image to the new one, complicated by the fact that I don't have the compute resources to run _both_ images at the same time on my Mac host. bash settings and aliases, git config nuances, and setting up the correct ssh settings for [GitHub](https://github.com/) and [NFSN](https://www.nearlyfreespeech.net), stuff ike that. I'm still tweaking things, but this article was created and posted on the new improved Omabuntu image so I am declaring victory.
