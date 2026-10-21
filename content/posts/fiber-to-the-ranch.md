---
author: Lehman
title: Fiber To The Ranch!
description: I'm Somebody Now!
publishedDate: 2026-10-22
tags:
  - whatever
showToC: true
---

## Introduction

When we first moved to Twin Pines Ranch 32 years ago (yikes!), internet service consisted of a 56k modem attached to Bell Telephone copper wire installed in 1987. You could read and write email, but that was about it.

![US Robotics model](@/assets/images/posts/us-robotics-56k-modem.webp) "Beep! Beep! Boop! Beep! Boop! Beeeeeeep!"

Eventually, satellite internet became available, with data caps and the god-awful 500 ms latency as we waited for signals to bounce off high altitude geostationary satellites. Viable email and sorta OK web surfing as long as you didn't exceed your quota.

![Satellite Dish on Roof](@/assets/images/posts/satellite-dish-on-roof.webp) "Wildblue, Viasat, HughesNet typical roof installation."

About 10 years ago, a couple of wireless ISPs became available in our area, with towers within a few miles of the ranch. That reduced latency to 15 ms - 50 ms, and allowed me to work from home, although video conferencing and streaming were still dicey, with 25 MBS download speeds and 5 MBS to 15 MBS upload speeds.

A few years ago, our [electric coop](https://mvea.coop) in conjunction with [Conexon Connect](https://conexonconnect.com) started installing fiber internet. A main fiber line made it down our private road in early 2026, so we could start thinking about upgrading to the 21st Century.

## Starting the Process

Ordering Conexon service required us to set up an account and establish an installation date, which is a bit annoying. We opted for the 200 MBS service, and the Managed Wi-Fi subscription for an additional $4.95 a month, which gives us customer support and a late model router supplied by Conexon.

A Conexon sub-contractor came out to the property to locate the utility lines around the house (power, phone, gas/propane, etc). He just kinda showed up with no advance notification. But he was a nice guy, and he also marked out the electrical lines to the barn and the workshop which he did not need to do.

As an extra precaution, I also submitted a ticket to [Colorado 811](https://www.colorado811.org/) to locate the power and phone lines over the entire property. This is a highly recommended step, and you should schedule that a week in advance of your installation date.

## Laying the Fiber

The gating function to this whole project was the location of the buried fiber. Delynne was adamant that no damage would be allowed to the lawn or the established landscaping. As she has spent an enormous amount of effort to make our property look awesome, I had to agree with that restriction.

Nobody could give us a definitive answer as to what our buried fiber options were. As it turns out, Conexon set up two junction boxes on the west boundary of our property. The north box would allow a straight shot across our northwest field with no utility lines in the way and no damage to the landscaping, so that was the only viable solution to the problem.

The fiber installers showed up on a late afternoon (after a text message stating they were on their way). I told them that no way was the installation going to be done in the dark, and that they needed to hook up to the north junction box or the deal was off. They said OK and went on their way. The next morning they showed up and started the hookup on our preferred junction box. Game on.

The trenching tool is a Case Maxi Sneaker vibratory cable plow:

![Case Trenching Tractor ](@/assets/images/posts/case-maxi-sneaker-series-c.webp) "Case Maxi Sneaker Plow."

The plow pulls and buries the fiber cable (encased in orange conduit) to a depth of 8 to 18 inches. Damage to the ground surface was surprisingly minimal, although the tires crushed the grass quite a bit.

The plow made quick work across the field, and the last 10 feet near the house was dug by hand so as to avoid any potential damage to the power, phone and water lines which were in close proximity.

The final hookup to the house is shown below. The grey conduit attaches to the orange conduit underground, and a fiber cable runs from the junction box up to the second floor office.

![Fiber Termination](@/assets/images/posts/fiber-termination.jpeg) "Fiber junction box with lead up to the second floor office."

## Fiber Into the House

A fiber internet connection requires two pieces of equipment: a router (yours or one supplied by your ISP) and an [Optical Network Terminal](ihttps://us.hitrontech.com/learn/what-is-an-ont/) (ONT). Our installer brought an "all in one" [router](https://www.nexicomsystems.com/products/central-office-data-center/xgs-pon-gpon-xdsl-pots/calix/calix-7utxg-2-gigaspire-gs4139xg-tribnd-244-wifi7-mesh/) containing its own ONT. "It's the only one I use", he said.

![GigaSpire Router](@/assets/images/posts/gigaspire-7u62-7u6m2.webp) "Calix GigaSpire Router"

**Critical Decision Point**: If your router will be physically located away from the fiber entry point into the house you need to let the installer know beforehand. A fiber cable needs to be run from the external house entry point to the router. In our case it was a non-issue, as the router is in the same room as the fiber entry point:

![Interior Hookup](@/assets/images/posts/interior-hookup.webp) "Interior wall connection to router. (White box, yellow wire.)"

Our installer hooked everything up, configured the router, waited for a couple of reboots, and tested our download speeds. Case closed. The next step was to add our devices to the new router and its wi-fi network.

## Attaching the Devices

Our home network consists of two computers, two televisions, one cell phone and one wireless printer.

The cell phone hooked to the wireless network without incident.

Our 10 year old HP wireless printer would not connect until I "downgraded" the security settings on the router.

The two computers are in the office, so we used Cat 6 cable to two of the four available Ethernet connectors on the router. More on that in a bit.

The late model LG smart TV hooked up without incident.

Our 12 year old Samsung smart TV would not connect. After trying various combinations, Delynne finally said "Enough already, call Customer Support". As usual, she was correct.

## Customer Support

I was on hold for less than 10 minutes, and then a tech who spoke American English got to me. With my name, phone number and street address he was able to locate and connect to our router. (This is the Managed part of our Managed Wi-Fi subscription.) I supplied him with the Samsung TV model number, and with that he established a secondary "legacy" network on the router using the built-in 2.4 GHZ radio. The Samsung recognized that network and made a successful connection. I never would have thought of that solution. In fact, I didn't even know that kind of solution was available. Very impressive customer service.

One last setup nuance - my MacBook Air was only getting a 100 MBS download speed. As it turns out, the Apple Ethernet-to-USB connector is only good up to 100 MBS. Solution: disconnect Ethernet and establish a wi-fi connection.

_Et voila!_

## Discussion

![Conexon Speed Test](@/assets/images/posts/conexon-speed-test.webp) "Yee-ha!"

Total elapsed time on this project was about three weeks, including one cancellation and one reschedule. The main sticking point were the unknowns associated with the fiber installation from the Conexon box to the house. Nobody could give us a straight answer.

The people that did the actual work (locaters, fiber installers, router installer) were all polite and professional, and they were happy to address our questions and concerns.

As noted above, we got good results from our interaction with Customer Support. Wait times were tolerable, and it was nice to hear American English from the tech rep.

## Conclusion

It's too early to tell about overall reliability, although anecdotal evidence from other users looks to be pretty positive. Our next steps will be to consider switching to VOIP telephone service, and we can begin considering some hardware upgrades on our older equipment. I'm confident we now have an internet connection that will serve us well for the remainder of our time at the ranch.
