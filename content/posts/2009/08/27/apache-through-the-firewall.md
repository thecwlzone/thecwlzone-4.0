---
author: Lehman
title: Apache Through the Firewall
description: Fun with iptables
publishedDate: 2009-08-27
tags:
  - information-technology
  - security
showToC: false
---

Back in the old days (pre-2000), the various flavors of UNIX had very little security other than the "baked-in" stuff such as encrypted passwords, root vs normal users, the standard file permissions, etc. Later, things like SELinux and firewalls were added. I still get tripped up on that occasionally.

I recently moved my Rails apps from the mongrel-based server model to Phusion Passenger (documented in a previous post). This worked fine, but it was time to let all the machines on my home network see the web sites, if only to see what they look like on Windows PCs.

A Google search shows that a lot of people have trouble with the interactions of home-installed routers and their ISP connections to the Internet. The main problem seems to be with NAT - Network Address Translation; the ISP box presents an IP address to the Internet that is different than the addresses inside the home network LAN. This can get confusing.

The first thing I did was tell my Netgear router to assign fixed IP addresses to all my home network devices based upon the [MAC addresses](http://en.wikipedia.org/wiki/MAC_address). I used the usual 192.168.x.x numbers. Then adjust the [Apache](http://httpd.apache.org/) server to assign the appropriate IP address to _ServerName_. Then you should just be able to type the URL `http://192.168.x.y/MyRailsApp` and see your beautiful web site. Wrong.

I disabled SELinux on my [Fedora](http://fedoraproject.org/) Core 8 development machine a long time ago. This is arguably a Bad Idea, but it's behind my Netgear firewall and my ISP's firewall - that's my excuse. So, I immediately blamed [Microsoft](http://www.annoyances.org/) for my problems. Wrong again.

I was finally reminded about Fedora's built in firewall system, a.k.a iptables. Start up _system-config-firewall-tui_ from the command line, make eth0 a trusted device, and allow HTTP to be a trusted service. That's it. Note that I am not letting the outside world see my Apache server, just the home network, so I did not have to tell my router to do any [IP forwarding](http://portforward.com/).

Note to self: Become a little more familiar with SELinux and iptables.
