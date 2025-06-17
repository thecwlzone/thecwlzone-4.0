---
author: Lehman
title: Compass, SASS, HAML
description: Updating Rails with the latest cool kid stuff
publishedDate: 2009-09-25
tags:
  - ruby-and-rails
showToC: false
---

I'm working on a project that is using the latest Rails markup buzz, namely Compass, [SASS](http://sass-lang.com/) and [HAML](http://haml.info/), so it's time to begin the learning process. Part of that effort will be to convert my personal Rails project over to Compass _et. al_.

I found that the best approach seems to be to install all the required gems manually before doing anything else. That is:

```shellsession
gem sources --add http://gems.github.com/
sudo gem install haml
sudo gem install chriseppstein-compass
sudo gem install chriseppstein-compass-960-plugin
```

Installing HAML also installs SASS, which is pretty convenient. Then install the basic compass gem. Compass supports a few standard stylesheet frameworks: 960gs, blueprint and YUI. I'm using 960.

For Rails integration, you can either build a new Rails project, or you can choose to update an existing project. I tried both commands:

```shellsession
rails myrailsappnamehere -m http://www.compass-style.org/rails/installer
rake rails:template LOCATION=http://www.compass-style.org/rails/installer
```

These commands use the Rails 2.3 template facility. The first command creates a totally new Rails directory structure, and this worked as advertised. The second command updates an existing Rails project (you run the command from RAILS_HOME). The upgrade template would hang during the `haml --rails .` command. Eventually it worked, and to be honest I don't know what the problem was. But pre-installing the required gems seemed to help. This could also be some kind of quirk associated with using a [Fedora](http://fedoraproject.org/) Core 8 OS that is beginning to rust out.

I did the installation for both Ruby 1.8.6 and 1.9.1, as I'll be developing in both environments. Note that I have completed the installations, but I haven't started working with the new gems, so I can't comment on the quality of the code yet, not that I'm worried.
