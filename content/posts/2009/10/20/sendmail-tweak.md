---
author: Lehman
title: Sendmail Tweak
description: Testing sendmail in development
publishedDate: 2009-10-20
tags:
  - information-technology
showToC: false
---

Although the Rails [ActionMailer](http://api.rubyonrails.org/classes/ActionMailer/Base.html) class is easy to test, I wanted to really use it in development mode to check all my settings in the config/email.yml file.

The Fedora code base pretty much sets up sendmail out of the box, but with ISP's possibly blocking port 25, and router configs, etc. etc, things can get confusing. The basic test from the Linux command line:

```shellsession
cat mailtest.txt | /usr/lib/sendmail -v me@somewhere.com
```

put the mail in the mqueue directory, but it was going nowhere. Then I remembered the /etc/mail directory, specifically the access file:

```shell
# By default we allow relaying from localhost...
Connect:localhost.localdomain RELAY
Connect:localhost RELAY
Connect:127.0.0.1 RELAY
```

Since I set my router to act as a DHCP server, I had to add the IP assignment for the Fedora box:

```shell
# By default we allow relaying from localhost...
Connect:localhost.localdomain RELAY
Connect:localhost RELAY
Connect:127.0.0.1 RELAY
Connect:192.168.1.3 RELAY
```

and then my inbox was suddenly sprayed with all the backed up test mail I was sending out, including the stuff from ActionMailer.

Update: I don't need a `config/email.yml` file after all. Since I'm using sendmail, the configuration under /etc/mail takes care of everything for the sendmail_settings options. If you want to use smtp, you need to add a number of options for smtp_settings, which can conveniently go in an `email.yml` file.
