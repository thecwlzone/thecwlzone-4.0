---
author: Lehman
title: Is My Internet Connection OK?
description: ping, ping, ping
publishedDate: 2019-12-11
tags:
  - information-technology
  - ruby-and-rails
showToC: true
---

I spent the weekend troubleshooting random losses of our Internet connectivity. (On Monday morning, my wireless ISP moved our satellite device to a more "stable" sector of its network and changed the signal carrier frequency. The changes seem to be working so far.) My main tool was ping, and since ping is available on Windows, Mac and Linux, I thought I would share the knowledge.

[Ping](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29) does exactly what is sounds like - send a connection request to a remote computer from your computer. If ping responds, then you have basic internet connectivity. If ping fails, then yes, you are offline for sure. Ping will not tell you much about _where_ the connectivity break is located, it's really just a sanity check if Netflix stops working, for example.

In all cases you need to open a terminal window. For Windows 10, that's the Windows PowerShell. For Mac it's an iTerm window and for Linux it's a shell terminal window.

## Windows and Linux Syntax

`ping -n n remote_IP_address`

## macOS Syntax

`ping -c n remote_IP_address`

where _n_ is the number of pings to send. If you don't supply a ping count number, ping runs until you enter `<control>C`

## Ping switches (i.e. command line options)

The **\-c** switch (macOS) is followed by the number of ping requests. Use **\-n** for Windows and Linux.

The **\-q** switch (quiet) suppresses the individual ping request outputs and displays only the summary.

## Remote IPs to Use

You need the IP address of a remote server to send the ping request. You can use [Google's DNS](https://en.wikipedia.org/wiki/Google_Public_DNS) server at **8.8.8.8** or [Cloudflare's](https://www.cloudflare.com/) DNS server at **1.1.1.1** - if those servers are down, the Web is totally FUBAR'ed, and we all have a different set of problems. You can just about be assured that those two IP addresses will be available and will respond to your ping request.

## Syntax Examples

Send 10 ping requests to Google from macOS

`ping -c 10 8.8.8.8`

Send 10 ping requests from a Windows or Linux machine to Cloudflare, and just show the statistics

`ping -q -n 10 1.1.1.1`

## Understanding the Results

For any ping attempt, what you want to see in the statistics section is the phrase `0.0% packet loss`. That means every ping request was sent and received without error. Packet loss greater than zero indicates a problem. A 100% packet loss means you are off the air completely. Here's an example of a working connection:

```shellsession
~ ping -c 5 1.1.1.1
PING 1.1.1.1 (1.1.1.1): 56 data bytes
64 bytes from 1.1.1.1: icmp_seq=0 ttl=51 time=15.617 ms
64 bytes from 1.1.1.1: icmp_seq=1 ttl=51 time=18.149 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=51 time=21.287 ms
64 bytes from 1.1.1.1: icmp_seq=3 ttl=51 time=29.145 ms
64 bytes from 1.1.1.1: icmp_seq=4 ttl=51 time=23.895 ms
--- 1.1.1.1 ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 15.617/21.619/29.145/4.690 ms
```

## Ruby Script

And because I'm a Rubyist, I had to create a bit of code:

```ruby
#!/usr/bin/env ruby

loop do
  puts `date`
  result = `ping -q -c 10 8.8.8.8` # google
  puts result unless result.include? "0.0% packet loss"
  sleep 900 # every 15 minutes
end
```

Create a file with the above contents. The file needs a **.rb** extension, e.g. **ping_test.rb** Open a terminal window and invoke the file. The script says "Run this code forever or until I close the window (line 3), and every 15 minutes (line 7) print the date and time (line 4), send 10 ping requests to Google (line 5) and print the statistics if there is any packet loss detected (line 6)". A version of Ruby is usually included with Linux and Mac OS versions. Windows users will need to run ping manually.
