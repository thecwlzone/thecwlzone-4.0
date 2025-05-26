---
author: Lehman
title: Rails Development on Windows XP
description: Development on a foreign OS
publishedDate: 2009-04-27
tags:
  - ruby-and-rails
showToC: false
---

### (Professionals on closed course. Do not attempt this at home.)

I love my new [company](http://www.boecore.com), but it's an IT staffing outfit, not a software development organization. Sure, it would have been nice to equip the Rails team with new Macs and a dedicated SQL server, but what was actually available was a couple of Dell desktops running Windows XP. So be it - three people on the team, one on a Mac, two on Windows. Can we make this work?

The first order of business was to move the design environment from SVN to the [Git](http://git-scm.com) versioning system. You can do this by installing git as part of the [Cygwin](http://www.cygwin.com) installation, or you can go with [mysysgit](http://code.google.com/p/msysgit). We tried both, and settled on Git version 1.6.1.2 under the Cygwin 1.7 beta distro. We saw quirks with both Git environments, but eventually things settled out under Cygwin. I have always had a Linux box available for development, so I've not used Cygwin before. It's a pretty mature product, with a decent installation interface, so I'm more upbeat about it than I expected.

Next - choose an IDE. We decided to go with [NetBeans](http://www.netbeans.org/ 'NetBeans') 6.5.1, for no special reason - I wanted to try it out, and it's got some decent features. Our colleague on the Mac is using [TextMate](http://macromates.com), of course.

Our official database engine is [MS SQL Server](http://www.microsoft.com/sqlserver/2008/en/us/default.aspx). This is a customer-driven requirement, and not relevant in the context of this blog. For development and test purposes, we use [sqlite3](http://www.sqlite.org), which uncovered an interesting compatibility problem. The default NetBeans Rails project environment is JRuby 1.1.4, which wants a **jdbcsqlite3** adaptor definition in the `config/database.yml` file. This was going to be a problem for the Mac-based developer. What to do? Ultimately, we changed the NetBeans Ruby project platform from JRuby to "native" Ruby 1.8.6, coupled with a Win XP sqlite3 DLL. Get all the required gems installed, check the XP paths and environment variables, and the Rails project was finally available to all team members on all platforms.

This setup took way longer than we wanted - a couple of days of discussions, and lots of experimentation. But we're up and running, version control is operational, and we are working our way toward green lights on the existing unit tests. Then we can begin the next phase of the development cycle.
