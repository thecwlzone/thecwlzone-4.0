---
author: Lehman
title: Configuring Passenger sub-URIs
description: Running multiple Rails apps under Passenger
publishedDate: 2009-04-05
tags:
  - ruby-and-rails
showToC: false
---

Passenger sub-URIs allow you to run multiple Rails aplications under one Apache virtual host, which is great for development. Although Phusion has documented how to do this, I was having trouble. Eventually I got it to work, by doing the steps below:

1. The Apache default **DocumentRoot** location is `/var/www/html`. I created a new directory and changed **DocumentRoot** to `/var/www/public`

2. As root, `cd /var/www/public`. Add a link to each public directory of each Rails app to be accessed. On Linux, this looks like `ln -s /somewhere/MyApp1/public MyApp1`, where `MyApp1` was created by running `rails MyApp1` under the directory `/somewhere`

3. Modify the Apache httpd.conf file. **DocumentRoot** was changed as shown in Step 1. Then add a virtual host block: \[shell\]&amp;lt;VirtualHost \*:80&amp;gt; ServerName 192.168.1.3 DocumentRoot /var/www/public RailsEnv development RailsBaseURI /MyApp1 RailsBaseURI /MyApp2 RailsBaseURI /MyApp3 ErrorLog /var/log/localhost-error_log &amp;lt;/VirtualHost&amp;gt;\[/shell\] **ServerName** can also be `localhost` or `www.mywebsite.com` You can also use Apache's **Directory** block to control permissions and the **RailsEnv** setting for each **RailsBaseURI** entry

4. Finally, add one of the next two lines to MyAppn/config/environment.rb:

   `config.action_controller.asset_host = "192.168.1.3/MyAppn"` or `config.action_controller.relative_url_root = "/MyAppn"`

   The IP address can also be `localhost` or `www.mywebsite.com`, whatever you used for **ServerName**
