---
author: Lehman
title: Automotive Nannyware
description: A Deep Dive Into Subaru's Current Nagware
publishedDate: 2026-07-26
tags:
  - privacy
  - security
showToC: true
---

## Introduction

_Note_: As a long time [Subaru](https://www.subaru.com) owner, this article is _very_ Subaru specific, but I suspect the generalities apply to most if not all US-based auto sellers... YMMV

We have been Subaru owners for quite a long time. They are decent snow cars, so they are real popular here in Colorado, they generally have a palatable price point, we have had almost zero maintenance issues over a number of years, and we are fortunate to have a really good [Subaru dealer](https://www.bestbuysubaru.com) in the area.

We currently own a 2019 Outback Premium, and we are leasing a 2025 Ascent Premium, with a lease termination date of February, 2028.

![2019 Subaru Outback Premium](@/assets/images/posts/2019_subaru_outback_4dr-suv_25i-premium.jpg)
_2019 Subaru Outback. Image copied from edmunds.com_

![2025 Subaru Ascent](@/assets/images/posts/2025_subaru_ascent_4dr-suv.jpg)
_2025 Subaru Ascent. Image copied from edmunds.com_

## Decisions, Decisions

As we are getting on in years, our next vehicle purchase/lease may be the last one (hopefully not, but we'll see). So: 1\) turn in the Ascent and do nothing, 2\) turn in the Ascent and purchase or lease a 2028 model, 3\) purchase the Ascent.

We like the size of the Ascent for in town driving, as it provides some extra protection from the [brain-dead zombies](https://www.kktv.com/2026/02/11/el-paso-county-reports-highest-number-impaired-driving-deaths-state-2025/) driving everywhere in El Paso County, but it does get thrown around by the Colorado gale-force winds more than we like, so it's not a great road-trip vehicle. Also, for 2025, Subaru incorporated all the climate control settings into the touch display panel which we absolutely hate. The display is washed out in bright sunlight while wearing sunglasses, so we end up stabbing at where we _think_ the controls are located. We aren't the only ones with this complaint, as Subaru reverted back to _real_ climate control buttons in the 2026 Ascent model. But at the end of the lease, we'll have relatively low milage on the vehicle, we'll know about its reliability, and the residual cost to purchase will be _way_ less than buying new, so we may have to live with the current model's "features".

![subaru ascent climate control](@/assets/images/posts/2025_subaru_ascent_climate_controls.jpg)
_Yuk! Gimme back my real buttons! Image copied from edmunds.com_

## The Nagware Factor

During a recent (July 2026) visit to our dealer, I noticed that every 2026 model on the showroom floor had that God-awful [engine stop/start feature](https://wheelsgreed.com/how-to-turn-off-subaru-auto-start-stop-after-each-restart-and-what-settings-really-persist/). This is a potential show-stopper, but I'll save this topic for a separate article.

Every model also came equipped with something called a DriverFocus Distraction Mitigation System [^1] in addition to the Eyesight Driver Assist Technology [^2]. WTF?

The Eyesight feature already has a number of annoying reminders, do I really want to add yet another nagware feature? Especially since a _lot_ of people are having [unhappy experiences with DriverFocus](https://www.motor1.com/news/796893/subaru-driver-monitoring-system/).

## The Automobile As A Data Collection Revenue Stream

Will our next car be some kind of NSA/FBI/local law enforcement/insurance company data collection endpoint? A lot of people are concerned about that. Here's a quick survey of recent articles:

[Consumer Reports: Your Car May Be Spying On You](https://www.consumerreports.org/electronics/personal-information/how-to-stop-your-car-from-collecting-sharing-driving-data-a1233378612/)

[NBC Chicago: Could Your Next Car Watch You?](https://www.nbcchicago.com/consumer/could-your-next-car-watch-you-federal-mandate-faces-scrutiny/3962128/)

[Brookings Institution: Maintaining Privacy and Security With Connected Cars](https://www.brookings.edu/articles/maintaining-privacy-and-security-with-connected-cars-the-techtank-podcast/)

[BBC: Your Car Is Spying On You](https://www.bbc.com/future/article/20260513-your-car-is-spying-on-you-its-about-to-get-worse)

[Motor1: You Car May Soon Be Monitoring Everything](https://www.motor1.com/news/794316/new-cars-mandate-impaired-driver-detection-delay/)

So with all this in mind, I decided to attempt a deep dive into Subaru's data collection and privacy policies.

## Subaru's Privacy Policies

An AI search yielded three privacy documents pertaining to Subaru America. Links are in the References section, and I'll summarize what I found here.

### Subaru of America Privacy Policies [^3]

This is the general boiler-plate legalese you expect from a multi-national entity. If you buy (on credit) or lease a vehicle from _anybody_ you have to fork over a lot of personal and financial data which is routinely shared by various third party affiliates. I didn't see anything out of the ordinary here. A text search through the document for the keyword "insurance" yielded some kind of Subaru / Liberty Mutual affiliation.

### Subaru Vehicle Privacy Notice [^4]

Of more interest is the vehicle-specific privacy policies. This document also references the MySubaru Connected Services Terms and Conditions document [^5]. I'll quote the important sections below.

#### MySubaru Connected Services

> SOA does not collect any vehicle-generated data unless the vehicle is associated with an active MySubaru Connected Services subscription. To sign up for the MySubaru Connected Services, you must have a MySubaru account.

and

> You may change certain data collection settings in the MySubaru app under “Privacy Portal” or on the MySubaru website. To stop all vehicle data collection by SOA, you will need to cancel your MySubaru Connected Services subscription.

The Outback has no active subscription service, so in theory no data is being transmitted to Subaru.

The Ascent has a complimentary [MySubaru Safety Plus](https://www.subaru.com/vehicle-info/connected-services/mysubaru-connected-services/safety-and-security-plans.html) subscription which includes Enhanced Roadside Assistance and SOS Emergency Assistance and vehicle monitoring of tire pressure, oil pressure and lots more. So, yeah, Subaru is getting a ton of data from the Ascent.

> We may disclose the information identified above to law enforcement if we are legally required to do so in response to valid legal process, including for national security purposes. If we are not legally bound to keep the request confidential, we will share the request with you.

and

> Other than scenarios that involve an imminent risk to human life, SOA requires a search warrant or court order before disclosing any precise geolocation data to law enforcement agencies. We will also share precise geolocation data to law enforcement agencies upon receiving your written consent to do so.

In theory, a court order is required before our data goes to law enforcement. Of course if you are carrying your cell phone they know where you are anyway. I could find no indication that any data is being sold to third parties such as insurance companies, but I have to assume that "excessive" vehicle speeds, hard braking, sudden lane changes, etc are being recorded. Late model Subarus are probably not suitable for use in [SCCA autocross](https://www.scca.com/pages/what-is-autocross) events.

![Ford Supercharged T-Bird](@/assets/images/posts/t-bird.webp)
_Your humble author in a SCCA Solo II event running a 1989 Supercharged T-Bird._

I have to say, though - if the wife is out and about by herself, the emergency assistance and SOS features do give me a bit of comfort...

#### DriverFocus System

> - DriverFocus Driver Monitoring System (DMS). The DMS system will collect information in two instances: (1) creating a user profile or (2) identifying a potential distracted driver situation. Both scenarios are user activated and optional and opting into one does not require you to opt into the other.

and

> - User Profile. The DMS can collect personal identifiers (name information) if a driver chooses to create a user profile and enter a name. This is used to identify the driver’s preferred seat, climate, and mirror preferences. These preferences will vary by model. Please consult your owner’s manual for a list of preferences that can be set through DMS. A driver can delete a profile at any time. If the driver chooses to create a profile, a driver-facing camera scans your face to create a computer-generated code linked to certain facial features. This data is not readable by humans and is used only to verify your identity to load the saved profile. User profile information is stored within the vehicle until it is deleted and SOA does not have access to it.

and

> - Distracted Driver Warnings. DMS collects data to warn drivers if they appear distracted or drowsy. This data does not leave the vehicle and is deleted when the vehicle is turned off. Drivers can disable the DMS distracted driver warnings at any time unless they have certain advanced driving assistance features activated, such as Lane Centering Assist or Hands-Free Assist. Features vary by model. Please consult your owner’s manual for a list of advanced driving assistance features.

OK, the DriverFocus nagware doesn't leave the vehicle, gets deleted upon engine shutdown, and you can turn off the warnings.

### Subaru Consumer Privacy Rights [^6]

This is a valuable document containing all the links to reduce or eliminate as much data as possible, such as Right to Opt Out, Right to Know and Right to Be Forgotten, among others. I'll be publishing a future article about my opt out experiences.

## Discussion

On the surface, it would appear that Subaru of America data collection is relatively benign, and there are ways to minimize the collection process. This could change at any time, due to government pressure or perceived customer requirements.

The big ethical question of the Common Era is: can we trust businesses to do what they say they are doing? Nobody seems to be accountable anymore, and we know governments lie all the time, so what is to stop multi-nationals from misbehaving? I will need to ponder this dilemma over a couple of beers...

## Conclusion

I don't want an iPhone on wheels telling Google where I'm going. This is nuts, and I hate paying extra for intrusive nannyware that I do not want and will not use. The only recourse We The People have is to stop buying this crap, but that's a tough sell for most folks.

From a personal standpoint, we won't have to make any automotive decisions just yet, so I'll be watching for new developments in the meantime.

## References

[^1]: [DriverFocus Distraction Mitigation System](https://media.subaru.com/pressrelease/2392/1/subaru-debuts-next-generation-technology-all-new-2026)

[^2]: [Subaru Eyesight Driver Assist Technology](https://www.subaru.com/eyesight.html)

[^3]: [Subaru of America Privacy Policies](https://www.subaru.com/support/privacy-policies.html)

[^4]: [Subaru Vehicle Privacy Notice](https://www.subaru.com/support/privacy-policies/vehicle-privacy-notice.html)

[^5]: [MySubaru Connected Services](https://www.subaru.com/vehicle-info/connected-services/mysubaru-connected-services.html)

[^6]: [Subaru Consumer Privacy Rights](https://www.subaru.com/support/consumer-privacy.html)
