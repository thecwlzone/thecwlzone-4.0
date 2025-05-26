---
author: Lehman
title: The Costs of Blogging
description: The price tag for an online presence
publishedDate: 2009-03-27
tags:
  - information-technology
showToC: false
---

My wife got a glimpse of the blog yesterday. "So, how much to set up a blog for me?", she asks.

Good question.

There a zillion ISPs out there, but I'll go with what I know - the services offered by [NearlyFreeSpeech.NET](http://www.nearlyfreespeech.net) (NFSN). I have had my web site running with them since September 2004. They are a no-frills, metered-service ISP. Here's the cost breakdown, and the steps to set up a blog:

1. **Register and fund a bandwidth account** - registration is free. You can deposit as little as 25 cents to start a bandwidth account. My web site has been costing me $15 to $20 a year to run. So, let's use $20 for this exercise.
2. **Register a domain name, set up DNS** - NFSN will register a domain name for you for $8.59 a year. I believe that's pretty competative. My domain name was already registered somewhere else; no problem, they handle that too. DNS setup is no charge.
3. **Create a site and a domain alias** - The site will be a Linux BSD directory for your content and the alias thing is canonical DNS magic. No charge for this step.
4. **Set up e-mail forwarding (optional)** \- Two cents a day or $7.30 a year.
5. **Set up a MySQL process** - This costs 1 cent a day, i.e. $3.65 a year, unless you end up being a high-transaction user. Use of Innodb tables is 2 cents a day, but we don't need transaction rollback for a blog site, right?
6. **Install and configure WordPress**

That's it. So worst case, a blog will cost you $39.54 for a year's service, $32.24 if you don't need e-mail forwarding. You can set up e-mail triggers to tell you when your funds are running low.

Is there a down side to this? Only that NFSN expects you to be LAMP-proficient, i.e. you can cope with BSD command line activities, you can use ssh and ftp, and that you are OK doing HTML and CSS hacks. They have a member forum, online FAQs and a trouble ticket system, but mainly you are expected to act as your own ISP administrator. Works for me!

Disclaimers: I have no financial arrangements with NFSN, except as a customer. The NFSN web site has the official pricing guidelines, my numbers above are just quick estimates.
