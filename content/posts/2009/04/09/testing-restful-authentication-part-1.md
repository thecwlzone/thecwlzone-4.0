---
author: Lehman
title: Testing restful authentication (Part 1)
description: Adding and using some test gems
publishedDate: 2009-04-09
tags:
  - ruby-and-rails
showToC: false
---

The [restful_authentication](http://github.com/technoweenie/restful-authentication/tree/master) plugin is really nice, and it's a critical part of any eCommerce site, so you have to test the hell out of it - unless you actually _like_ irate customers. Anyway, unit tests won't be enough, and Rick Olson (a.k.a. technoweenie) has already stated that he wants to use [RSpec](http://rspec.info/) going forward, so that's the first thing to set up. But, Cucumber is getting a lot of air play lately, so I decided to check that out too, as it may be a viable solution for integration testing. So - on to the set up. After viewing Ryan's [Railscasts](http://railscasts.com/) 71, 155 and 156, I decided to install the rspec, rspec-rails, webrat and cucumber gems. The webrat gem wanted some more development RPMs, but at least it was kind enough to tell me which ones - libxml-devel and libxslt-devel. (Should I just submit and do a yum install on the development meta package? No - I only install what I need - I'm stubborn like that.) Everything else installed without incident, so I'm ready to go. I'll start with RSpec and report on that first.

Maybe I'll finally get the proper Rails testing attitude after all this.
