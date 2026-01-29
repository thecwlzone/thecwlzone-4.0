---
author: Lehman
title: An AI Imaging Experiment
description: With some surprising results...
publishedDate: 2026-01-29
tags:
  - artificial-intelligence
showToC: true
---

## Introduction

Inspired by the recent [amelia meme](https://trending.knowyourmeme.com/editorials/guides/what-is-pathways-and-who-is-amelia-the-controversial-memes-about-the-viral-uk-anti-immigration-goth-girl-explained) storm as reported by John Carter at [Postcards From Barsoom](https://barsoom.substack.com/p/amelia-sans-merci) (as well as many others), I decided I needed to gain some rudimentary knowledge of AI image editing and generation.

I was also inspired by the [DataBreaches](https://databreaches.net/) splash page depicting the author in front of her three screens. I thought, "I can do that", so I decided on an AI image experiment that would insert an AI-generated human into my home office setup.

I asked [Lumo](https://lumo.proton.me/guest) to build me a list of free AI image tools, and I curated that into the short list below.

## The Base Photo

I took the home office photo with my Samsung Galaxy A13 5G phone. It created a 2.3 MByte JPG file. The reduced version is shown here:

![The CWL Zone Home Office](@/assets/images/posts/desk-of-thecwlzone.webp)
_Original photo of The CWL Zone World Headquarters._

## The Prompt

[NoteGPT](https://notegpt.io/) allows 2 free images per day, and I used that to refine the prompt. I initially forgot to specify a beard and glasses. Duh. I'm kind of surprised that I did not need to specify "_white_ male". And yes, even though I'm an Official Old Fart, I still wear a leather jacket. I own two, actually. It's a Detroit thing, you wouldn't understand...

_Add a person sitting in front of the computer, typing on the keyboard and looking at the screens. The person is an older male, with slightly balding short grey hair, a trimmed grey beard, glasses, and is wearing a black leather jacket._

## The Process

If I could upload and edit the photo without any credentials, I did so. Otherwise, I used my Google credentials so I would not have to create yet another online account. This may have been a tactical error, see the Discussion section...

Once the base photo was uploaded, I entered the prompt as shown above. Processing was fast, less than two minutes in all cases.

The altered photo was downloaded and converted to [WebP](https://en.wikipedia.org/wiki/WebP) format using [mogrify](https://imagemagick.org/script/mogrify.php#gsc.tab=0).

## NoteGPT

[NoteGPT](https://notegpt.io/) was pretty easy to use, and I may play around with it some more at a later date.

I used my Google account to login...

![The NoteGPT output](@/assets/images/posts/notegpt-thecwlzone-desktop.webp)

_Hmm, odd head positioning..._

## Craiyon

[Craiyon](https://www.craiyon.com/en) is a bit too artsy-fartsy for me, but I'm guessing it's a pretty valuable tool for people that do imaging as part of a profit stream.

![The Craiyon output](@/assets/images/posts/craiyon-thecwlzone-desktop.webp)

_I **did** say "looking at the screens"..._

## DeepAI

[DeepAI](ihttps://deepai.org/) promotes a lot of wildlife and conservation thingies, which may or may not be of some interest to me. I'll be taking a closer look at these folks at a later date.

A login was not required for this one...

![The DeepAI output](@/assets/images/posts/deepai-thecwlzone-desktop.webp)

_Hey, not bad..._

## NightCafe

[NightCafe](https://creator.nightcafe.studio/) is another art-centric site, and the site was a bit busy for my taste.

A login was not required for this one...

![The NightCafe output](@/assets/images/posts/nightcafe-thecwlzone-desktop.webp)

_Ugh! I'm not quite **that** bald..._

## starryai

[starrayai](https://starryai.com/) was a bit underwhelming, although I can't explain why I feel that way.

A login/account was required, so I used my Google account.

Uploading the photo, and launching the prompt generated a "Not enough lumins" message, i.e. pay for a subscription, you deadbeat. So this one is off the table.

## Discussion

This is pretty scary stuff - the rendered image does look a lot like me. Yikes. How could that happen? Conjecture: I uploaded a picture of myself to my Google account back when I was silly enough to believe that Google was relatively benign. Also, the character string "thecwlzone" is pretty unique, and Google knows that I own the domain name. Did that cause the LLM search to pull all that together and build a virtual Chris Lehman? Yowza!

Elapsed time on this project: about 2 hours, plus putting this blog together. Generating AI images is truly available to the masses, for better or for worse.

## Conclusions

The DeepAI image was my favorite, and I plan on inserting the image into the Page 1 of my blog section at some point.

I'll probably do more AI imaging in future blogs - I believe the SEO gurus still think that images in blog posts increases user interest, and blah, blah, blah... Plus it _is_ kinda fun to see what gets created.
