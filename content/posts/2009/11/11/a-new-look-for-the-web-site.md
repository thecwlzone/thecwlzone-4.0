---
author: Lehman
title: A New Look for the Web Site
description: Using the Webgen gem
publishedDate: 2009-11-11
tags:
  - ruby-and-rails
showToC: false
---

My mostly static web site was hacked together about 5 years ago with straight HTML tags using the XEmacs editor. To say the least, it was starting to look pretty frayed around the edges, not to mention boring.

My [ISP](http://www.nearlyfreespeech.net/) doesn't support Rails sites well - they are a shared hosting ISP, with the main mission to be as inexpensive as possible, and they do that very well. Works for me. So, I started looking around for something that could generate and maintain a static web site. I found this article on Andy Atkinson's blog; a nice overview of 5 Ruby-based generators. Sweet! Andy wasn't real impressed with [webgen](https://webgen.gettalong.org/), but I liked it because it had some built in CSS templates, and since I'm not a CSS barn-burner yet, I decided to go with webgen. The [StaticMatic](https://github.com/staticmatic/staticmatic) generator looked very cool as well, but I didn't want to deal with styling my own CSS template just yet. Both of these generators support the [Haml](http://haml.info/) format, which I definitely wanted to use this time around.

Webgen is a gem, and it has a serious list of gem dependencies. This was no big deal, just noting the "feature". The webgen forum notes that it should work OK with Ruby 1.9, but my ISP has 1.8.7 installed, so that's the underlying Ruby version I used.

So, in between job searches and resume submissions this week, I put the new pages together. When you run "`rake webgen`", all the content is converted to HTML - the output directory is configurable.

Finally, I used [ImageMagick](http://www.imagemagick.org/script/index.php) to resize and crop some of my wife's great photos for the masthead image. I may have to build a random image selector at some point just to change the photo once in awhile. For now, I'll do a manual hack when I want to see something else.

This was a very cool little project, which isn't totally done yet - I'll no doubt be adding more content as time permits. Thanks to webgen author Thomas Leitner - a very nice example of a useful Ruby gem.
