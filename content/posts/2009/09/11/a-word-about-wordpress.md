---
author: Lehman
title: A Word About Wordpress
description: security issues
publishedDate: 2009-09-11
tags:
  - information-technology
  - security
showToC: false
---

Last week there was a fair amount of buzz about Wordpress security issues. Here's an Information Week article and also a short blurb from IT World in case you're not a Wordpress user. And, here's a rant about lazy admins from a long-time user of Wordpress.

Two things jump out at me here: 1) Wordpress is being described as a "self-hosted" application, and 2) [upgrading Wordpress](http://codex.wordpress.org/Upgrading_WordPress) is surprisingly clumsy, given the assumption in 1).

That's not entirely fair - there is an "automatic" upgade path, but it presupposes that you have the necessary access permissions to whatever server is running Wordpress, which may not be true if you are running from an ISP. The manual upgrade gets tricky: install a new version of Wordpress, move your custom files over to the new version, run the upgrade script, oh and do backups before you start in case you forget something.

I tweeted a few days ago about how the Wordpress subversion upgrade didn't work - it turns out I may not have done things correctly. If you [install Wordpress via svn](http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion), the initial install looks like:

`svn co http://core.svn.wordpress.org/tags/2.8.4 .`

and then the upgrade should just be the svn "switch" command:

`svn sw http://core.svn.wordpress.org/tags/2.8.4/ .`

Of course this implies you have svn installed on your Wordpress server, and that you're comfortable working with svn. Is this a realistic profile of the average Wordpress user? I dunno.

Finally, here's a [page](http://codex.wordpress.org/Hardening_WordPress) about hardening off your Wordpress installation. It implies a fair amount of sys admin experience. Again, is this a realistic assessment of the typical Wordpress user?

Having said all this, I continue to be a Wordpress user myself, because it's got a lot of great features, and I really don't want to burn my personal time creating yet another CMS app. But it does seem like there is an expectation disconnect between the Wordpress development community and the end users who actually blog with the product. The WP developers are saying loud and clear "Keep your Wordpress app up to the current release". OK, but the Wordpress upgrade path needs to be quick, transparent and bullet-proof. Right now, that's not the case.
