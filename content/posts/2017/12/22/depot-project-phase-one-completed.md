---
author: Lehman
title: Depot Project - Phase One Completed
description: Depot Rails example progress
publishedDate: 2017-12-22
tags:
  - software-development
showToC: true
---

## Status

I have worked through the code and the tutorials from [Agile Web Development with Rails 5.1](https://pragprog.com/book/rails51/agile-web-development-with-rails-5-1), by Sam Ruby and David Bryant Copeland. The Depot project has been used through all four major Rails versions (Rails 2 - 5), and it's been interesting to watch its evolution. My comments about the major Rails 5 features are described below, and the code is at:

[theclzone/depot](https://github.com/thecwlzone/depot)

One exception: I did not set up the email code (Chapter 14, Task I), because it's boring, and I don't want to mess with setting up a dummy mail server right now.

One deviation: I disabled the use of [spring](https://github.com/rails/spring) - for some reason it would lose the path to [rake](https://github.com/ruby/rake), among other oddities. For a project of this size, using spring is not essential.

## Major Features in Rails 5

- Caching

I admit I'm not comfortable with web caching concepts - I often think that optimized database queries provide a better ROI for performance purposes; Rails has a lot of nice cache features, and the tutorial provides a couple of good examples in the code. I need to look at this topic more closely.

- CoffeeScript

[CoffeeScript](http://coffeescript.org/) has been the default Rails [JavaScript](https://www.javascript.com/) compiler since Rails 3.1. I've not used it much - hacking on bits of JavaScript and [jQuery](http://jquery.com/) in [HAML](http://haml.info/) files has been sufficient so far, although not very elegant, I must admit. I can't tell if CoffeeScript is still widely used by the Rails community, or whether it's been replaced by some newer shiny JS tool.

- Action Cable

This is a new feature for Rails 5, and it's kinda cool. Using [ActionCable](https://github.com/rails/actioncable) in the tutorial, an admin can update catalog prices in one session, and ActionCable will then transmit the changes (via web sockets) to all other active sessions (i.e. customers) in almost real time. Pretty slick.

- Atom Feeds

Interesting choice of [RSS](https://en.wikipedia.org/wiki/RSS) feeds. The authors call [Atom](<https://en.wikipedia.org/wiki/Atom_(standard)>) a "reasonable default". Whatever... Seems pretty easy to use, although I have no experience with this particular RSS format.

- Webpack and React

This is the most controversial addition to Rails 5, IMHO. Rails has always had a love/hate relationship with JavaScript, so I'm glad the decision was made to jump on [Webpack](https://webpack.js.org/). But the amount of JS code and install files that were required to implement the [React](https://reactjs.org/) JS framework in the tutorial seemed unreasonably excessive. But then, I've never been all that comfortable with JavaScript. I will need to play with this feature a _lot_ more in the near future.

- ActiveJob

Have you ever clicked on a Submit button, only to have the spinner run way too long? Well, maybe the server was just really busy, but [ActiveJob](https://github.com/rails/rails/tree/master/activejob) can put a time-consuming process in the background and give you your mouse back. You don't always want to do this, but for things like sending out emails and files, there's no point in keeping the user waiting, just shove the task into ActiveJob and return control to the customer.

- Authentication

The code uses the [Devise](https://github.com/plataformatec/devise) gem to add new users and to authenticate existing users. Oddly enough, the code was missing the _registerable_ module, so login, logout and sign up didn't work. Routing errors and a bit of reading in the Devise docs finally pointed me to the correct solution.

- Internationalization

Rails has always had international capabilities, but I had not really worked with it much. The locales are defined in [YAML-based](http://yaml.org/) files that are invoked in the controllers after installing the i18n gem. The whitespace-formatted YAML files are really annoying when you have to add a lot of text - it's easy to screw up the correct indentation, and then you get strange errors that are difficult to trace back to bad YAML syntax.

A multi-language site - done well - is really impressive, but you will need to pay for the language expertise if you want to do it right.

- Testing

[MiniTest](https://github.com/seattlerb/minitest), [Capybara](https://github.com/teamcapybara/capybara), [ChromeDriver](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver), pretty standard Rails test suite stuff. The tutorial did not include any test coverage tools, but [SimpleCov](https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver) would be the obvious choice. I find it interesting that the authors have not jumped on the [RSpec](http://rspec.info/) bandwagon, but that would have been adding an extra layer of complexity for Rails rookies. For the same reasons, I'm guessing the authors worked with the standard \*.erb view files with the normal HTML tagging syntax instead of opting for HAML. I'll address the HTML to HAML conversion task in another post.

## Conclusions

This is a good book for learning Rails, but it is not tailored for someone completely new to web development. A previous knowledge of basic [HTML](https://en.wikipedia.org/wiki/HTML) tags and [HTTP](http://rspec.info/) transactions is assumed. A [PHP](http://php.net/) developer, for example, would be able to make the transition to Rails with this book, but somebody new to web development would need some hands-on training with a real live human instructor beforehand.

## Try It Out

Deployment to [Heroku](https://www.heroku.com/) is complete, I'll add some commentary about that a bit later.

TheCWLZone Depot Demo

(Use at your own risk.) Cheers!
