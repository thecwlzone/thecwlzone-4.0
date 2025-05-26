---
author: Lehman
title: OS Installs Under VMware Server 2.0
description: Fun with VMWare
publishedDate: 2009-04-15
tags:
  - information-technology
showToC: false
---

My Linux server is running Fedora Core 8 - pretty old by Internet standards (the bleeding edge is FC 11). But now that the kernel patches have died off, my VMware Server 2.0 installation is stable, so I wanted to create a few Linux OS images of interest. Here's a summary of the results:

1. Ubuntu 8.10 - I'm really starting to like this OS. One disk, twenty minutes, no gotchas to trip up a rookie. It's clean, and updates are easy. Ubuntu blurs the distinction between the root user and a normal user, which concerns me from a security standpoint, but it's ideal for a single desktop or a laptop install. If I ever have to rebuild my server, I'll think hard about moving to Ubuntu.
2. openSUSE 11.1 - One disk, about 30 minutes to complete the initial installation. There were a couple of tricky bits associated with disk partitioning that might have hosed a beginner, but otherwise it was a clean install. Updates are a bit obscure, but not after the first time. Overall, it looks pretty solid.
3. Solaris 10 - Ugh, what a grunt. Five disks, a few hours to install, including a number of false starts while I figured out which installation GUI would work properly with my FC8 video drivers. You can download Solaris 10 for free, but updates and patches require a paid subscription. You get a root user login, and you create everything else. So why bother with Solaris? Well, this is an educated guess on my part, but you probably want your Swiss bank account statements and your nuclear launch codes residing on a Trusted Solaris OS; I don't know that there is anything better when your data has to absolutely, positively be secure from internal and external threats. (FYI, Trusted Solaris runs on Sol 8, but I installed 10 because it's the latest version.)
