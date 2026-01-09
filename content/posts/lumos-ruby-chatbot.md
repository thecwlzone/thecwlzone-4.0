---
author: Lehman
title: Lumo's Ruby Chatbot
description: underwhelming results....
publishedDate: 2026-01-09
tags:
  - ruby-and-rails
  - artificial-intelligence
showToC: true
---

## Introduction

Continuing with my rudimentary knowledge of [AI engineering](https://pragprog.com/titles/jwpaieng/a-common-sense-guide-to-ai-engineering/), I wanted to delve into the capabilities of the [Ruby](https://www.ruby-lang.org/en/) language environment. The [Python](https://www.python.org/) ecosystem has strong support for AI development, and I wanted to explore the Ruby ecosystem as well.

The "official" Ruby AI gem is [openai-ruby](https://github.com/openai/openai-ruby) (of course!), and I decided to let [Lumo](https://lumo.proton.me/guest) build me a basic Ruby chatbot framework.

Here is the initial Lumo query, and the results (code shown in a separate section):

![Lumo's resonse to my query](@/assets/images/posts/lumo-ruby-chatbot.png) "Lumo's Query Response"

## Lumo's Code

The code didn't work out of the box, as in program crashes. The original code is reproduced below. Deletions are in red, changes are in blue...

```ruby title="lumos_chatbot.rb" del={10-12} del={20-27} {"Incorrect or obsolete, see changes in next section":49-52} {"Errors, not Error, see next section":58}
#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "openai"

# ------------------------------------------------------------
# Configuration
# ------------------------------------------------------------
MODEL = "gpt-4.1-nano".freeze          # Model name as requested
MAX_TOKENS = 500                       # Adjust per your usage limits
TEMPERATURE = 0.7                      # Creativity level (0‑1)

# Initialise the client – the SDK reads the API key from ENV['OPENAI_API_KEY']
client = OpenAI::Client.new

# ------------------------------------------------------------
# Helper: Build the messages payload for the Chat Completion API
# ------------------------------------------------------------
def build_payload(messages)
  {
    model: MODEL,
    messages: messages,
    max_tokens: MAX_TOKENS,
    temperature: TEMPERATURE
  }
end

# ------------------------------------------------------------
# Main interaction loop
# ------------------------------------------------------------
puts "=== Lumo Ruby Chatbot (gpt‑4.1‑nano) ==="
puts "Type your message and press Enter.  To quit, type 'exit' or press Ctrl‑C.\n\n"

# Conversation history – starts with a system prompt that defines the bot’s role.
conversation = [
  { role: "system", content: "You are a helpful, friendly assistant named Lumo. Keep responses concise and suitable for a terminal chat." }
]

loop do
  print "You: "
  user_input = STDIN.gets&.chomp
  break if user_input.nil? || user_input.strip.downcase == "exit"

  # Append the user's message to the history
  conversation << { role: "user", content: user_input }

  begin

    response = client.chat(
      parameters: build_payload(conversation)
    )
    assistant_msg = response.dig("choices", 0, "message", "content")
    puts "\nLumo: #{assistant_msg}\n\n"

    # Add the assistant's reply back into the history so context is preserved
    conversation << { role: "assistant", content: assistant_msg }

  rescue OpenAI::Error => e
    warn "\n[Error] Failed to contact OpenAI: #{e.message}"
    # Optionally remove the last user message if you want to retry later
    conversation.pop
  end
end

puts "\nGoodbye!"
```

## What Actually Worked

After wrestling with the openai gem API, I got a working chatbot, as shown below. Changes are in blue...

```ruby title="chatbot.rb" {34-39, 45}
#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "openai"

# ------------------------------------------------------------
# Configuration
# ------------------------------------------------------------

# Initialise the client – the SDK reads the API key from ENV['OPENAI_API_KEY']
client = OpenAI::Client.new

# ------------------------------------------------------------
# Main interaction loop
# ------------------------------------------------------------
puts "=== Ruby Chatbot (gpt‑4.1‑nano) ==="
puts "Type your message and press Enter.  To quit, type 'exit' or press Ctrl‑C.\n\n"

# Conversation history – starts with a system prompt that defines the bot’s role.
conversation = [
  { role: "system", content: "You are a helpful, friendly assistant named ChatBot. Keep responses concise and suitable for a terminal chat." }
]

loop do
  print "You: "
  user_input = STDIN.gets&.chomp
  break if user_input.nil? || user_input.strip.downcase == "exit"

  # Append the user's message to the history
  conversation << { role: "user", content: user_input }

  begin
    response = client.chat.completions.create(
      model: "gpt-4.1-nano",
      messages: conversation,
      max_tokens: 500,
      temperature: 0.7
    )
    assistant_msg = response.choices.first&.message&.content
    puts "\nChatBot: #{assistant_msg}\n\n"

    # Add the assistant's reply back into the history so context is preserved
    conversation << { role: "assistant", content: assistant_msg }
  rescue OpenAI::Errors => e
    warn "\n[Error] Failed to contact OpenAI: #{e.message}"
    # Optionally remove the last user message if you want to retry later
    conversation.pop
  end
end

puts "\nGoodbye!"
```

## Sample Output

Running a test case yielded:

```shell
./chatbot.rb
=== Ruby Chatbot (gpt‑4.1‑nano) ===
Type your message and press Enter.  To quit, type 'exit' or press Ctrl‑C.

You: Who was the seventh President of the United States?

ChatBot: Andrew Jackson was the seventh President of the United States.

You: What was his political affiliation?

ChatBot: Andrew Jackson was a member of the Democratic Party.

You: Was he reelected?

ChatBot: Yes, Andrew Jackson was reelected and served two terms as President.

You: exit

Goodbye!
```

## Discussion

- OK, so Lumo is probably not the chatbot of choice for Ruby development. It's as if Lumo was retrieving stale information about the openai gem API, which is quite possible given the current rate of change within the industry. Still, Lumo was able to provide a basic Ruby script as a starting point.

- I didn't highlight the changes pertaining to the removal of Lumo's egotistical naming conventions.

- [Wakatime](https://wakatime.com/) says I spent about an hour playing with the code, and I spent roughly an hour looking at the Ruby openai gem details.

## Conclusions

I would prefer to work with Ruby, but Python AI tools are pretty powerful. I'll need more playtime with Ruby before I reach a firm conclusion.
