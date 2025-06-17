---
author: Lehman
title: Multiple Rails Apps Under Passenger
description: More Passenger tweaking
publishedDate: 2009-12-30
tags:
  - information-technology
  - ruby-and-rails
showToC: false
---

My development server is on a home LAN behind a firewall, and I don't want to make it a DNS sub-domain. I have directed my router to issue fixed IP addresses through DHCP, so I can use the IP address as part of the URL.

Setting up multiple Rails applications is pretty easy, but if you want to mix the Rails environments (developement / test / production / custom), you need to use `<Directory>` to configure each Rails app:

```apache
<VirtualHost *:80>
  DocumentRoot /var/www/public
  <Directory /var/www/public/RailsApp1>
    RailsEnv development
    RailsBaseURI /RailsApp1
  </Directory>
  <Directory /var/www/public/RailsApp2>
    RailsEnv production
    RailsBaseURI /RailsApp2
  </Directory>
  ErrorLog /var/log/localhost-error_log
  PassengerPoolIdleTime 0
  <Directory /var/www/public/RailsApp1/blog>
    AllowOverride All
    PassengerEnabled off
  </Directory>
</VirtualHost>
```

By using `<Directory>` you can change the behavior of each of your Rails applications as needed, including the ability to disable Passenger for non-Rails code (such as the blog shown in the example).
