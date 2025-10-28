---
author: Lehman
title: Lumo As Ruby Developer
description: A viable solution but...
publishedDate: 2025-10-28
tags:
  - software-development
  - ruby-and-rails
  - artificial-intelligence
showToC: true
---

## Introduction - What Is Vibe Coding?

Whilst cycling through my security news sites, I ran across an article on [Bleeping Computer](https://www.bleepingcomputer.com/) - Google says everyone will be able to [vibe code video games](https://www.bleepingcomputer.com/news/google/google-says-everyone-will-be-able-to-vibe-code-video-games/)

OK, so I'm retired and out of the loop - what is vibe coding? A [Brave](https://brave.com/) search yielded:

_Vibe coding is an emerging software development practice that uses artificial intelligence (AI), particularly large language models (LLMs), to generate functional code from natural language prompts..._

Ah. So is this really a viable way to write code? I decided to run a quick experiment using [Lumo](https://lumo.proton.me/guest).

## My Requests to Lumo

To test this feature, I decided to ask Lumo to create something I already have in use, a Ruby "heartbeat" script to periodically test my internet connectivity:

`Build me a Ruby language script that periodically tests network continuity using ping`

Lumo built me a script, but then I realzed that a more fair comparison would be to send the ping output to STDOUT, so I revised the request:

`Instead of sending the results to a log file, send the results to STDOUT`

Here is the result from that request:

## Lumo's Script

```ruby title="Lumo's Script"
#!/usr/bin/env ruby
require 'open3'
require 'time'

# ------------------- Configuration -------------------
HOST     = '8.8.8.8'   # Destination to ping (IP or hostname)
INTERVAL = 60          # Seconds between each ping
COUNT    = 4           # Number of ICMP packets per test
# -----------------------------------------------------

def ping_host(host, count)
  # Run the system ping command and capture its output
  cmd = "ping -c #{count} #{host}"
  stdout, stderr, status = Open3.capture3(cmd)

  if status.success?
    # Pull packet‑loss % and average RTT from ping output
    loss_line = stdout.lines.find { |l| l =~ /packet loss/ }
    rtt_line  = stdout.lines.find { |l| l =~ /rtt min\/avg\/max\/mdev/ }

    loss    = loss_line[/(\d+)% packet loss/, 1] rescue 'N/A'
    avg_rtt = rtt_line[/= .*\/([\d\.]+)\/.* ms/, 1] rescue 'N/A'

    { success: true, loss: loss, avg_rtt: avg_rtt }
  else
    { success: false, error: stderr.strip }
  end
end

def display_result(result)
  timestamp = Time.now.utc.iso8601
  if result[:success]
    puts "[#{timestamp}] SUCCESS – Loss: #{result[:loss]}%, Avg RTT: #{result[:avg_rtt]} ms"
  else
    puts "[#{timestamp}] FAILURE – Error: #{result[:error]}"
  end
end

# ------------------- Main Loop -------------------
loop do
  result = ping_host(HOST, COUNT)
  display_result(result)
  sleep INTERVAL
end
# -------------------------------------------------
```

## Lumo Script Results

```bash title="output from network_monitor_stdout.rb"
[~]$ ./bin/network_monitor_stdout.rb                                                   rbenv:3.3.4
[2025-10-27T18:41:20Z] SUCCESS – Loss: 0%, Avg RTT: N/A ms
```

## My Script

```ruby title="CWL's Script"
#!/usr/bin/env ruby

loop do
  puts `date`
  puts `ping -q -c 5 8.8.8.8` # google
  puts ""
  sleep 900 # every 15 minutes
end
```

## My Script Results

```bash title="output from ping_test.rb"
[~]$ ./bin/ping_test.rb                                                                rbenv:3.3.4
Mon Oct 27 12:37:10 MDT 2025
PING 8.8.8.8 (8.8.8.8): 56 data bytes

--- 8.8.8.8 ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 19.577/23.764/27.793/3.086 ms
```

## Discussion

OK, Lumo created some good code, sort of - see [RuboCop](https://rubocop.org/) results below.

Should I have told Lumo to create a _shell_ script instead of specifying just a script? Would that have triggered something closer to my [irb-ish](https://github.com/ruby/irb) solution? Did revising my request for a STDOUT solution muddy the waters, i.e. should I have started a completely new chat? Why did Lumo decide to filter the ping output as it did? This stuff still seems like a lot of FM [^1]

RuboCop was not happy - note in the debug output that I am using a [Railsy gem](https://github.com/rails/rubocop-rails-omakase) for the RuboCop criteria, which may not be fair to use on non-Rails Ruby code. Still...

Here's the output from RuboCop (with some post-editing for security purposes):

```bash title="RuboCop results"
 rubocop --debug ~/bin/network_monitor_stdout.rb
For /home/REDACTED/Sites/RailsStaticSite: configuration from /home/REDACTED/Sites/RailsStaticSite/.rubocop.yml
Inheriting configuration from /home/REDACTED/.local/share/mise/installs/ruby/3.4.7/lib/ruby/gems/3.4.0/gems/rubocop-rails-omakase-1.1.0/rubocop.yml
Default configuration from /home/REDACTED/.local/share/mise/installs/ruby/3.4.7/lib/ruby/gems/3.4.0/gems/rubocop-1.81.6/config/default.yml
Plugin configuration from /home/REDACTED/.local/share/mise/installs/ruby/3.4.7/lib/ruby/gems/3.4.0/gems/rubocop-performance-1.26.1/config/default.yml
Plugin configuration from /home/REDACTED/.local/share/mise/installs/ruby/3.4.7/lib/ruby/gems/3.4.0/gems/rubocop-rails-2.33.4/config/default.yml
Use parallel by default.
Skipping parallel inspection: only a single file needs inspection
Inspecting 1 file
Scanning /home/REDACTED/bin/network_monitor_stdout.rb
For /home/REDACTED/bin: Loading cache from /home/REDACTED/.cache/rubocop_cache/da3bdb6e00ee310b59080212470ead3a8f82caa5/6d7a3b621ca1730e04accd938619e4bdab66cfb1/ede911c576c302bc8d0b8b516aed584aca15e98f
C

Offenses:

/home/REDACTED/bin/network_monitor_stdout.rb:1:1: C: [Correctable] Style/FrozenStringLiteralComment: Missing frozen string literal comment.
#!/usr/bin/env ruby
^
/home/REDACTED/bin/network_monitor_stdout.rb:6:12: C: [Correctable] Style/MutableConstant: Freeze mutable objects assigned to constants.
HOST     = '8.8.8.8'   # Destination to ping (IP or hostname)
           ^^^^^^^^^
/home/REDACTED/bin/network_monitor_stdout.rb:11:1: C: Metrics/MethodLength: Method has too many lines. [11/10]
def ping_host(host, count) ...
^^^^^^^^^^^^^^^^^^^^^^^^^^
/home/REDACTED/bin/network_monitor_stdout.rb:19:46: C: [Correctable] Style/RegexpLiteral: Use %r around regular expression.
    rtt_line  = stdout.lines.find { |l| l =~ /rtt min\/avg\/max\/mdev/ }
                                             ^^^^^^^^^^^^^^^^^^^^^^^^^
/home/REDACTED/bin/network_monitor_stdout.rb:21:15: C: [Correctable] Style/RescueModifier: Avoid using rescue in its modifier form.
    loss    = loss_line[/(\d+)% packet loss/, 1] rescue 'N/A'
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/home/REDACTED/bin/network_monitor_stdout.rb:22:15: C: [Correctable] Style/RescueModifier: Avoid using rescue in its modifier form.
    avg_rtt = rtt_line[/= .*\/([\d\.]+)\/.* ms/, 1] rescue 'N/A'
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/home/REDACTED/bin/network_monitor_stdout.rb:22:24: C: [Correctable] Style/RegexpLiteral: Use %r around regular expression.
    avg_rtt = rtt_line[/= .*\/([\d\.]+)\/.* ms/, 1] rescue 'N/A'
                       ^^^^^^^^^^^^^^^^^^^^^^^^
/home/REDACTED/bin/network_monitor_stdout.rb:22:35: C: [Correctable] Style/RedundantRegexpEscape: Redundant escape inside regexp literal
    avg_rtt = rtt_line[/= .*\/([\d\.]+)\/.* ms/, 1] rescue 'N/A'
                                  ^^

1 file inspected, 8 offenses detected, 7 offenses autocorrectable
```

And here is the autocorrected script (using `rubocop --autocorrect ~/bin/network_monitor_stdout.rb`):

```ruby Lumo script, with autocorrections by RuboCop
#!/usr/bin/env ruby
# frozen_string_literal: true

require 'open3'
require 'time'

# ------------------- Configuration -------------------
HOST     = '8.8.8.8' # Destination to ping (IP or hostname)
INTERVAL = 60          # Seconds between each ping
COUNT    = 4           # Number of ICMP packets per test
# -----------------------------------------------------

def ping_host(host, count)
  # Run the system ping command and capture its output
  cmd = "ping -c #{count} #{host}"
  stdout, stderr, status = Open3.capture3(cmd)

  if status.success?
    # Pull packet‑loss % and average RTT from ping output
    loss_line = stdout.lines.find { |l| l =~ /packet loss/ }
    rtt_line  = stdout.lines.find { |l| l =~ %r{rtt min/avg/max/mdev} }

    loss = begin
      loss_line[/(\d+)% packet loss/, 1]
    rescue StandardError
      'N/A'
    end
    avg_rtt = begin
      rtt_line[%r{= .*/([\d.]+)/.* ms}, 1]
    rescue StandardError
      'N/A'
    end

    { success: true, loss: loss, avg_rtt: avg_rtt }
  else
    { success: false, error: stderr.strip }
  end
end

def display_result(result)
  timestamp = Time.now.utc.iso8601
  if result[:success]
    puts "[#{timestamp}] SUCCESS – Loss: #{result[:loss]}%, Avg RTT: #{result[:avg_rtt]} ms"
  else
    puts "[#{timestamp}] FAILURE – Error: #{result[:error]}"
  end
end

# ------------------- Main Loop -------------------
loop do
  result = ping_host(HOST, COUNT)
  display_result(result)
  sleep INTERVAL
end
# -------------------------------------------------
```

The output is the same...

## Conclusions

Lumo's code is certainly acceptable, but geeze, all I wanted was a ping loop. I know which version will be easier to understand 6 months from now.

## Notes

[^1]: FM = F**\***g Magic
