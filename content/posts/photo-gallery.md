---
author: Lehman
title: New Feature - A Photo Gallery
description: Various photo albums for your viewing pleasure
publishedDate: 2025-04-18
tags:
  - astro-development
showToC: true
---

## Background

Version 3.0 of my web site had photos interspersed among the various pages of the site. Deployment was a bit clumsy, and the images tended to interrupt the flow of the prose, so for Version 4.0 I wanted to do something different. The Astro framework is well suited for working with collections of objects, so I decided upon a photo gallery setup.

## Development Process

I got a _lot_ of help from an [article](https://jankraus.net/2024/04/05/how-to-build-a-simple-photo-gallery-with-astro/) by [Jan Kraus](https://jankraus.net/) about how to build a set of photo albums in an Astro project.

Astro is an [opinionated](https://docs.astro.build/en/basics/project-structure/) framework (also known as [convention over configuration](https://rubyonrails.org/doctrine#convention-over-configuration)). Astro expects content to live under `src/content`, but for some reason the [author](https://fjelloverflow.dev/) of the [Nordlys theme](https://nordlys.fjelloverflow.dev/) chose to put his content under `astro_root/content`, so I tried to set up the photo gallery at that location. Fail. I'm sure there is a way to make that work, but much of Astro is still magical to me, and I could not find a solution. So my project now has two content directories, with photo albums under `src/content/albums` and everything else under `astro_root/content`. Sigh...

## Processing the Photos

My photos mainly come from a Samsung Galaxy phone running Android. Photo quality is very good, but the JPG sizes are very large, often running more than 4 MBytes. That's way too large to render on a web site, so I needed to come up with some kind of reduction process.

I had good with results with [MiniMagick](https://github.com/minimagick/minimagick), a [Ruby](https://www.ruby-lang.org/en/) gem. After some experimentation, I settled on this Ruby script:

```ruby
# The photos to be processed are assumed to be in the current directory
image_list = `ls -1`.split("\n")

# Photos from phones often have spaces (" ") in the name, e.g. "xyz 123.JPG"
# Change spaces to underscores ("_")
# We want to keep the original photo, so use the open method and
# write a new file as "xyz_123_r.JPG" (r for "reduced")
image_list.each do |image|
  renamed_image = image.gsub(" ", "_").upcase
  reduced_image = renamed_image.gsub(".JPG", "_r.JPG")
  puts "Processing #{image}"
  working_image = MiniMagick::Image.open(image)

  # These settings were determined by trial and error, YMMV
  working_image.combine_options do |o|
    o.resize "20%"
  end

  working_image.write(reduced_image)
end
```

File sizes were typically in the 200k to 400k range, an order of magnitude reduction. Nice. I decided to keep the meta data in the files for possible future use.

## What's Next

- The photos are static. It would be nice to click on an individual photo to see a larger version.
- The styling could be tweaked a bit: borders on the images, the text gets washed out in "light" mode, stuff like that.
- All photos are stored "locally". If I go crazy with the number of albums/photos, they may need to be moved to a cloud.

## Conclusion

Overall, the development went pretty well, as I continue to learn more about Astro's capabilities. I hope you enjoy the photos. Cheers!
