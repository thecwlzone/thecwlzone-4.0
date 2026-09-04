---
author: Lehman
title: I Broke Omakub
description: An overreliance on other people's expertise
publishedDate: 2026-09-07
tags:
  - astro-development
  - software-development
showToC: true
---

## Introduction

As my ancient [MacBook Air](https://www.apple.com/macbook-air/) machine is no longer a viable development box, I have been maintaining this site on a [Ubuntu](https://ubuntu.com) [VMware](https://www.vmware.com) image. Awhile back, Dave Hansson, aka [DHH](https://dhh.dk), the creator of [Ruby on Rails](https://rubyonrails.org) set up a Ubuntu development environment for the folks at his company, [37signals](https://37signals.com) . He released it to the development world as [Omakub](https://omarchy.org/omakub/). It is a very cool integrated "look and feel" framework. But - if you follow the Omakub link, you will see that it's been retired. DHH has moved on to [Omarchy](https://omarchy.org) running on [Arch Linux](https://archlinux.org).

Omakub was forked to [Omabuntu](https://omabuntu.omakasui.org), and I attempted a migration to that version. It failed - it didn't like my [git](https://git-scm.com) settings of all things. The Omabuntu maintainer was pretty clear - there is no convenient way to back out the changes if something goes amiss. I knew that, and I took the risk.

## Help Me, Mr Wizard

So now I have a wonky Ubuntu image. What to do?

First up - could I maintain the site under the current conditions? [VS Code](https://code.visualstudio.com) still works, so that was the first step. The [Astro](https://astro.build) framework packages needed some upgrades, and things got ugly. Some [eslint](https://eslint.org) interactions with [Tailwind CSS 4](https://tailwindcss.com) needed to be addressed, and a downlevel version of [Node](https://nodejs.org/en) needed some attention.

## Discussion

I really didn't expect Omakub to go dormant so quickly. This is a prime example of the risks in relying on other people's open source expertise. So - what to do next? Should I look at the major task of building a new Arch Linux image? Should I build a fresh Ubuntu (26) image and try Ombuntu? Live with what I've got since I'm a retired Old Fart who has other things to do? My head hurts...

## Conclusion

If you are reading this, then it's obvious I have a way to keep the site running - for now. But the whole thing feels really unstable. At some point, my Mac is going to die, and then I'll need to decide - back to a Mac development environment, or roll my own hardware with a highly customized Arch Linux config, or get a new machine that runs native Ubuntu, or keep using VMware on a new machine to be determined. My head still hurts...
