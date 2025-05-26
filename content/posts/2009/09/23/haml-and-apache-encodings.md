---
author: Lehman
title: HAML and Apache Encodings
description: break and fix
publishedDate: 2009-09-23
tags:
  - information-technology
  - ruby-and-rails
showToC: false
---

I'm playing around a bit with the [HAML](http://haml.info/) gem. It broke my Apache / Passenger server immediately. The original error message looked something like:

`/!\ FAILSAFE /!\ 2009-05-01 10:05:18 -1000 Status: 500 Internal Server Error invalid byte sequence in US-ASCII`

Google to the rescue. On Linux machines, you should have a `/etc/sysconfig/httpd` file. I added `HTTPD_LANG=en_US.UTF-8`

and all was well after restarting Apache.

This took awhile to find, so here's the URL to the Rack Development Google Group, of all places. There is some info on OSX as well.

[Rack Dev Google Group](http://tinyurl.com/m8oxnz)

Google has added at least 10 points to my IQ. Make that 20 points.
