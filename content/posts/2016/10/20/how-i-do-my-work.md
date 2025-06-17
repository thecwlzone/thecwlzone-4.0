---
ahthor: Lehman
title: How I Do My Work
description: My development environment
publishedDate: 2016-10-20
tags:
  - software-development
  - ruby-and-rails
showToC: false
---

Oddly enough, I was asked twice this week about my development environment, so here we go:

## The Editor

There are a lot of nice IDEs for Ruby and Rails, but after a couple of decades as a Linux sys admin, the vi keyboard shortcuts are embedded into my DNA, so [vim](http://www.vim.org/) it is.

The vim ecosystem has a lot of support (i.e. plugins) for the vim editor, but I have opted to just install the carlhuha [Janus distro](https://github.com/carlhuda/janus) which includes all the cool plugins including [Tim Pope's](https://github.com/tpope) vim-pathogen and vim-rails plugins. Some developers consider Janus to be overkill, but I can't get excited about that.

![vim](@/assets/images/posts/vim-1.png)

## The Desktop

I am normally working on more than one application at any given time, so I need to set up a multi-development Rails environment. My best solution has been (OS X) [iterm2](http://iterm2.com) windows running [tmux](https://tmux.github.io) and configured with the [tmuxinator gem](https://github.com/tmuxinator/tmuxinator).

Setting up multiple tmuxinator [yaml](http://yaml.org) files like so:

```shell
project_name: my_project
project_root: ~/Sites/my_project
pre_window: rvm use ruby-2.2.3@my_project
windows:
- shell: git status
- logs: tail -f log/development.log
- server: bundle exec thin start -p 3200 --ssl --ssl-key-file .ssl/hostname.key --ssl-cert-file .ssl/hostname.crt
- console: bundle exec rails c
```

I have 3 iterm windows, one for each application, each iterm running 4 tmux panes for the shell command line, the Rails logger, the Rails server and the Rails console. This is especially helpful, because my apps are typically interacting with each other via API calls, so it's nice to see the log files responding as I would expect - or not.

![tmux](@/assets/images/posts/tmux-1.png)

That's it. Not real exotic, but this environment works well on the Mac and also on the various Linux OS flavors.
