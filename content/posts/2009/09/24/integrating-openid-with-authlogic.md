---
author: Lehman
title: Integrating OpenID with Authlogic
description: And creating an account
publishedDate: 2009-09-24
tags:
  - information-technology
  - ruby-and-rails
showToC: false
---

I won't take any credit here. If you want to do this, jump right over to the Ryan Bates Railscast Number 170. He totally nails it - just follow along and adjust for the views you are actually using, and it's operational in a jiffy. Sweet!

The only thing that didn't work for me was the install for the open_id_authentication plugin. I had to copy and install the files manually. I note that the install worked when I tried it again while writing this article, so maybe it was a temporary github problem.

It's a funny thing about [OpenID](http://openid.net/), though. When I ask my technically competent acquaintances about it, the response so far has been, "Yeah I've heard about it, but I don't have an account yet". Which is odd, given that there are allegedly over 500 million accounts established. In any event, I registered my account with [myOpenID](https://openid.net/), FWIW.

So, when I get around to building my standard Rails install template, I'll add the OpenID stuff to the mix.
