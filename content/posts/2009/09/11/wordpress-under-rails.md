---
author: Lehman
title: Wordpress Under Rails
description: Bolting on a CMS into Rails
publishedDate: 2009-09-11
tags:
  - ruby-and-rails
showToC: false
---

There have been occasional discussions about integrating a Wordpress CMS into a Rails application. One approach is to simply do a Wordpress install under RAILS_ROOT/public/blog. That's pretty straightforward:

`cd RAILS_ROOT/public ; mkdir blog ; cd blog ; svn co http://core.svn.wordpress.org/tags/2.8.4 .`

Then do the usual Wordpress setup [ritual](http://codex.wordpress.org/Installing_WordPress).

If you're running Phusion Passenger, you need to tell Passenger to ignore the Wordpress stuff:

```nginx
VirtualHost *:80
DocumentRoot /var/www/public
RailsEnv development
RailsBaseURI /RailsApp1
RailsBaseURI /RailsApp2
RailsBaseURI /RailsApp3
ErrorLog /var/log/localhost-error_log
PassengerPoolIdleTime 0
Directory /var/www/public/RailsApp1/blog
AllowOverride All
PassengerEnabled off
/Directory
/VirtualHost
```

I did this setup last night, and now my Rails app has a built-in, full-featured blog. The down side to this approach is that you now have yukky PHP code "polluting" your Rails directory structure, and it also implies that you have a lot of control over your Apache server. I can live with that, at least for purposes of experimentation.

The next task will be to integrate the Rails login authentication with the Wordpress blog. There is allegedly a [Wordpress API](http://wordpress.org/extend/plugins/rails-integration-api/) to do this, but does it understand the [authlogic gem](http://github.com/binarylogic/authlogic/tree/master)? We shall see...
