---
author: Lehman
title: Rails and PHP under Ubuntu Apache
description: How to..
publishedDate: 2009-12-15
tags:
  - information-technology
  - ruby-and-rails
showToC: false
---

I have Ubuntu 9.10 (aka Karmic Koala) running on my laptop. It's rapidly becoming my portable development machine, so I set up the Rails environment right away. I have decided to add PHP to the development mix, so I began to install all the PHP stuff using Ubuntu's built-in Synaptic Package Manager found under System -> Administration. That worked fine, but oddly enough, the package manager uninstalls the Phusion Passenger module for Apache2. Huh! Here's the executive summary to get Rails and PHP to coexist on a Ubuntu Apache server:

1. Install all the PHP goodies
2. Install the Passenger gem
3. Run passenger-install-apache2-module to compile the Passenger module
4. Add the Passenger LoadModule statement(s) to the Apache config
5. Set up VirtualHost configs in Apache, as necessary
6. Restart Apache, test Rails and PHP

The key concept is to use the Passenger gem in conjunction with the Apache configuration for Rails, and use Ubuntu's package manager to handle the PHP modules.

The Apache directory structure under Ubuntu contains a number of files to isolate your configuration. One could argue that the granularity is a bit too fine. Nevertheless, using the default structure, here are the files of interest:

/etc/apache2/apache2.conf - No changes here, but note the Include directives at the bottom of the file to pull in the module loads and configs.

/etc/apache2/mods-available - This directory should contain php5.conf, php5.load, passenger.conf, and passenger.load files. The php5 files should not need any alteration.

After running passenger-install-apache2-module, the contents of passenger.load should look like:

```code
LoadModule passenger_module /usr/local/lib/ruby/gems/1.8/gems/passenger-2.2.5/ext/apache2/mod_passenger.so PassengerRoot /usr/local/lib/ruby/gems/1.8/gems/passenger-2.2.5
PassengerRuby /usr/local/bin/ruby
```

The version numbers on your machine may be different - just plug in the values as specified from the messages that display when you run passenger-install-apache2-module.

The /etc/apache2/sites-available/default file may be adequate as the VirtualHost definition. Or not. I won't go into Apache Virtual Hosts in this post.

Some additional references:

The Passenger docs for Apache

The Ben Hughes post about setting up Passenger on Ubuntu
