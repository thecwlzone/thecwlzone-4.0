---
author: Lehman
title: authlogic gem - and a step backwards
description: Install and break...
publishedDate: 2009-04-11
tags:
  - ruby-and-rails
showToC: false
---

I was alerted to the [authlogic](https://github.com/binarylogic/authlogic) gem yesterday, so I had to try it out. To my surprise, I discovered that the rails command was no longer working - WTF? I had also lost the rake tasks from my restful_authentication test case. Another mystery. Could the addition of the gems I installed couple of days ago have caused this problem? (See previous post.) Ultimately, I rebuilt my local gem repository with just the basic rails gems, and I got my rails and rake commands working again. Sheesh!

That done, I installed the authlogic gem, and I set up a rails app for testing authlogic. Pretty cool - I'll spend some time this weekend comparing it against the restful_authentication gem.
