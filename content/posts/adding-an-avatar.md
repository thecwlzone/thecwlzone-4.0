---
author: Lehman
title: Adding An Avatar
description: A bit silly, but hey, why not?
publishedDate: 2025-09-09
tags:
  - astro-development
  - ruby-and-rails
showToC: false
---

I wanted to update my avatar, located at [Gravatar](https://gravatar.com/), kind of a legacy from my [WordPress](https://wordpress.com/) blog days. There are a lot of nifty avatar creators around, although there are not many free options, and the free ones all want an account. Bleh.

After a bit of hacking on a photo from our [Yellowstone](/gallery/yellowstone) trip, I got it uploaded to my Gravatar profile.

It turns out Gravatar has a nice API for working with profiles. The only trick is to create a SHA265 hash from the email address, and then reference the URL as an image. Here's a bit of Ruby to create the hash string:

```ruby title="Create an Avatar Hash Value" collapse={2-5}
#!/usr/bin/env ruby

# I'm adding some comments here
# so that I can demonstrate the collapse feature
# of Expressive Code

require 'digest'
require 'uri'

# Assume you manually set the email_address here or get it from user input
email_address = 'your-email@your-domain.com'.downcase

# Create the SHA256 hash
hash = Digest::SHA256.hexdigest(email_address)

# Set default URL and size parameters
image_src = "https://www.gravatar.com/avatar/#{hash}?s=200"

# This 'image_src' can now be used in an <img> tag or wherever needed
puts image_src
```

Then add an image to the file (my [About](/about) page) using the string output from the Ruby script:

```html
<img
  src="https://www.gravatar.com/avatar/hash_value?s=a_size_value"
  alt="an appropriate description"
/>
```

## References

[Creating a Gravatar email hash](https://docs.gravatar.com/rest/hash/)
