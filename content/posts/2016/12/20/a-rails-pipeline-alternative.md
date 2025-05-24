---
author: Lehman
title: A Rails Antipipeline Alternative?
description: Asset Pipeline Blues
publishedDate: 2016-12-20
tags:
  - ruby-and-rails
showToC: true
---

## I Gots the Asset Pipeline Blues

The [bundler gem](https://github.com/bundler/bundler) was available around November 2009, and was usable with Rails 2.3:

[http://yehudakatz.com/2009/11/03/using-the-new-gem-bundler-today/](http://yehudakatz.com/2009/11/03/using-the-new-gem-bundler-today/)

The [Asset Pipeline](http://edgeguides.rubyonrails.org/asset_pipeline.html) was added to Rails 3.1 in August of 2011:

[release notes](http://weblog.rubyonrails.org/2011/8/31/rails-3-1-0-has-been-released/)

Bundler nailed the Ruby Gem dependency challenge, which was awesome. As the asset pipeline came online, bundler was also used to manage the javascript side of the Rails house. Then [Sprockets](https://github.com/rails/sprockets-rails) was added to Rails 4. This is about the time I got lost, and I have not fully recovered. The Javascript part of a production deployment is largely [FM](http://onlineslangdictionary.com/meaning-definition-of/fm) (NB - bad language) to me, which is annoying to say the least.

Fast-forward to 2016, and the Javascript ecosystem is - well, I was going to say "more mature", but "more diverse" might be more accurate. In any event, there are potentially better ways to manage Javascript than what was available for non-JS frameworks 5 years ago. It was time for some investigation.

## Rails with Webpack and Yarn

I read something somewhere by DHH about [Webpack](https://webpack.github.io/), and [Yahuda Katz](http://yehudakatz.com/) was working on an [npm](https://www.npmjs.com/)\-replacement called [Yarn](https://yarnpkg.com/), so those seemed like good places to start. As a result, this entire article is shamelessly stolen abstracted from the article "Replacing the Rails Asset Pipeline with Webpack and Yarn", by Samuel Mullen, November 16, 2016. This is an in depth look at setting up the Rails/Webpack/Yarn environment. There are a _lot_ of moving parts, nice job Sam!

I followed the demo and I have published my results here:

[rails antipipeline](https://github.com/thecwlzone/rails-antipipeline)

The demo worked flawlessly, except that I needed to create the public/javascripts and public/stylesheets directories in order for the webpack CLI to run properly.

Running

```bash
popped up the "Yay! You're on Rails!" page. Success!
```

## Observations

- There is a nasty looking webpack.config.js file at the Rails root directory. 64 lines of ugly javascript code. This is a serious violation of the Rails "Convention over Configuration" philosophy. Blasphemy! Burn the Witch! 😀

- There is a node_modules directory in Rails root:

```bash
du -hs node\_modules 74M node\_modules
```

Ugh. I'm still trying to figure this out, but it seems like node_modules is the Javascript equivalent to Gemfiles. Under that assumption, I added the node_modules directory to .gitignore - I hope that's the correct procedure. This project is pushing my Javascript ecosystem knowledge into \_Terra Incognito\*.

## PostScript

I still have plenty to learn about this new way of handling Javascript in Rails, so I expect I'll be pushing new commits here and there as I try some more experiments. But for now, I am declaring victory on this project.

## Post-PostScript

Ah ha! Just as I was finishing up my evaluation, what did I see in [Ruby Weekly](http://rubyweekly.com/)? (Issue 327):

[https://github.com/rails/rails/pull/26836](https://github.com/rails/rails/pull/26836)

Rails 5.1 support for Webpack and Yarn. Woot! Let's see how that plays out. Cheers!
