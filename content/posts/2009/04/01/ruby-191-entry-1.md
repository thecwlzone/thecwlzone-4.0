---
author: Lehman
title: Ruby 1.9.1 (Entry 1)
description: Installation and usage
publishedDate: 2009-04-01
tags:
  - ruby-and-rails
showToC: false
---

I installed Ruby 1.9.1 from the [Ruby site](http://www.ruby-lang.org/en/downloads). I did the default `configure ; make ; make test ; make install` dance as root using gcc 4.1.2. This puts all the Ruby 1.9.1 files under /usr/local. The Ruby 1.8.6 version is a standard RPM for Fedora Core 8, and it's all under /usr.

I decided to switch between the two Ruby versions by constructing shell aliases to change the $PATH variable, as shown below. The syntax is the bash shell.

```shellsession
[cwl@Fedorahost ~]$ alias old_ruby
alias old_ruby='export PATH=/usr/kerberos/bin:/usr/lib/ccache: \
/usr/bin:/usr/local/bin:/bin:/usr/bin:/usr/games:/home/cwl/bin'
[cwl@Fedorahost ~]$ old_ruby
[cwl@Fedorahost ~]$ ruby -v
ruby 1.8.6 (2008-08-11 patchlevel 287) [i386-linux]
[cwl@Fedorahost ~]$ gem env
RubyGems Environment:
  - RUBYGEMS VERSION: 1.3.1
  - RUBY VERSION: 1.8.6 (2008-08-11 patchlevel 287) [i386-linux]
  - INSTALLATION DIRECTORY: /usr/lib/ruby/gems/1.8
  - RUBY EXECUTABLE: /usr/bin/ruby
  - EXECUTABLE DIRECTORY: /usr/bin
  - RUBYGEMS PLATFORMS:
    - ruby
    - x86-linux
  - GEM PATHS:
     - /usr/lib/ruby/gems/1.8
     - /home/cwl/.gem/ruby/1.8
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :benchmark => false
     - :backtrace => false
     - :bulk_threshold => 1000
     - :sources => ["http://gems.rubyforge.org", "http://gems.rubyonrails.org"]
  - REMOTE SOURCES:
     - http://gems.rubyforge.org
     - http://gems.rubyonrails.org
```

```shellsession
[cwl@Fedorahost ~]$ alias new_ruby
alias new_ruby='export PATH=/usr/kerberos/bin:/usr/lib/ccache: \
/usr/local/bin:/usr/bin:/bin:/usr/bin:/usr/games:/home/cwl/bin'
[cwl@Fedorahost ~]$ new_ruby
[cwl@Fedorahost ~]$ ruby -v
ruby 1.9.1p0 (2009-01-30 revision 21907) [i686-linux]
[cwl@Fedorahost ~]$ gem env
RubyGems Environment:
  - RUBYGEMS VERSION: 1.3.1
  - RUBY VERSION: 1.9.1 (2009-01-30 patchlevel 0) [i686-linux]
  - INSTALLATION DIRECTORY: /usr/local/lib/ruby/gems/1.9.1
  - RUBY EXECUTABLE: /usr/local/bin/ruby
  - EXECUTABLE DIRECTORY: /usr/local/bin
  - RUBYGEMS PLATFORMS:
    - ruby
    - x86-linux
  - GEM PATHS:
     - /usr/local/lib/ruby/gems/1.9.1
     - /home/cwl/.gem/ruby/1.9.1
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :benchmark => false
     - :backtrace => false
     - :bulk_threshold => 1000
     - :sources => ["http://gems.rubyforge.org", "http://gems.rubyonrails.org"]
  - REMOTE SOURCES:
     - http://gems.rubyforge.org
     - http://gems.rubyonrails.org
```

The next issue is the gem system, as many gems will need to be tweaked for 1.9.1.
