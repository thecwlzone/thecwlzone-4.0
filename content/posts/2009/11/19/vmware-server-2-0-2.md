---
author: Lehman
title: VMware Server 2.0.2
description: A maintenance release
publishedDate: 2009-11-19
tags:
  - information-technology
showToC: false
---

The latest VMware Server version is 2.0.2, released on October 27 of this year, so I thought I would give it a spin. The downloads are available as RPMs, so that was the obvious choice for my [Fedora](http://fedoraproject.org/) Core 8 server. FC8 is pretty rusty now, but that means the kernel is stable, which also means that the VMware Server integration (i.e. the local compiles) work without any complaints. Nice.

The 2.0.2 version is a maintenance release, but I was hoping it would fix my VMware Infrastructure Web Access startup problem. After a reboot, all the VMware daemons are running, but the first time I try and connect (via the `http://localhost:8222` URL), I get a "Not Responding" message. I finally figured out that `sudo /etc/init.d/vmware restart` made everything work. No idea why. The 2.0.2 version shows the same behavior, so I finally used chkconfig (`chkconfig --level 2345 vmware off`) to turn off the auto-startup of VMware. When I want to use it, I run `sudo /etc/init.d/vmware start`, and all is well. The VMware log files are verbose, but not very helpful for my particular problem, so no intelligence there. It's possible that my deviation from the default VMware port numbers is the root cause of the problem, although I don't understand why a restart would fix things.

Oh, and I got back about 250 MB of memory by leaving the VMware switch in the off position.
