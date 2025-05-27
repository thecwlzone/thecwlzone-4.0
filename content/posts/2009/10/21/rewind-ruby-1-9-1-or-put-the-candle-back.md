---
author: Lehman
title: Rewind Ruby 1.9.1 (or "Put The Candle Back")
description: Passenger crash
publishedDate: 2009-10-21
tags:
  - ruby-and-rails
showToC: false
---

I updated all the gems for my current Rails development project that is using Ruby 1.9.1. This also included an upgrade to Phusion Passenger 2.2.5. Then I upgraded to Ruby 1.9.1-p243, which promptly crashed Passenger when I did a session request through [Authlogic](http://github.com/binarylogic/authlogic) 2.1.2. Ouch. So, I reinstalled Ruby 1.9.1-p129, and all is well again.

Oddly enough, there is no uninstall switch in the Ruby-for-Linux tar ball Makefile. The default install location is /usr/local, so I can keep the Fedora 8 version of Ruby 1.8.6 (via the RPM package system) intact, but I wasn't sure what would happen if I simply re-installed the older Ruby 1.9.1 version under /usr/local. As best I can tell, the rewind (`./configure ; make ; sudo make install`) worked fine without having to manually remove the p243 version.

To be safe, I also re-ran the `passenger-install-apache2-module` command after putting the older Ruby version back, and then restarted Apache. Probably not necessary, but for the sake of completeness...

Now, where was I?
