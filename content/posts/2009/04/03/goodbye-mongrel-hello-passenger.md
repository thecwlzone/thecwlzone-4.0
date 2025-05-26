---
author: Lehman
title: Goodbye Mongrel, Hello Passenger
description: Switching to Passenger and Apache
publishedDate: 2009-04-03
tags:
  - ruby-and-rails
showToC: false
---

Mongrel has been a great web server for Ruby and Rails, but with the significant changes in Ruby 1.9.1 (native threads for instance), I decided to switch to Phusion Passenger and Apache. If nothing else, this will keep me working with Apache (it _is_ the **A** in **LAMP**, after all).

The `gem install passenger` ran as we would expect, but `passenger-install-apache2-module` had a bunch of complaints. Mainly, I needed to install a number of development RPMs for Fedora Core 8 Apache. Also, passenger could not see the OpenSSL libraries. Sure enough, the mkfm.log file under ext/openssl in the Ruby 1,9.1 tree showed a number of errors that seemed to indicate some missing libraries. I installed another FC8 package for OpenSSL development, and then I ran `ruby extconf.rb ; make ; make install` at the openssl directory, and all was well. At this point `passenger-install-apache2-module` ran to completion.

I tweaked the Apache httpd.conf file and started a Rails application. No go. It seems I have to add the mysql gem when using Ruby 1.9.1. Bad news - the gem doesn't compile. Good news - this was already solved by Ryan Bigg a.k.a. radar. You can get his mods at git://github.com/radar/mysql.git Thanks Ryan - that saved a bunch of time. Another github URL that claims to have a mysql fix for 1.9.1 is [here](//github.com/elia/mysql.git), but I haven't tried it myself.

So now I have one Rails app running with Ruby 1.9.1, Passenger and Apache. And now it's documented.
