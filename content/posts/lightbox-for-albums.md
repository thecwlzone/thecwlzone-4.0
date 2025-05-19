---
author: Lehman
title: Lightbox for Photo Albums
description: Magnify photos in the albums
publishedDate: 2025-05-20
tags:
  - astro-development
showToC: false
---

After building out a photo gallery, the next feature to be added is a lightbox, i.e. how to magnify an individual picture when you roll the mouse over it. After a number of false starts, I found the [PhotoSwipe](https://photoswipe.com/) package, and a nice [code sample](https://dev.to/petrovicz/astro-photoswipe-549a) by [Benedek Petrovicz](https://www.linkedin.com/in/bpetrovicz/).

I'm seeing some display wierdness - the first time you click on a pic, the browser may open a new tab, and then you need to use the Back arrow to return to the album. That's not the behavior I want - there should be an "X" in the upper right hand corner of the image you can use to dismiss the enlarged photo.

And I have a couple of cosmetic tweaks I want to do to the overall album look and feel, so it's the usual developer work in progress thing... Cheers!
