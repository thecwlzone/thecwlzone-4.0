---
author: Lehman
title: Gemini Ruby Chatbot
description: Trying out Google's latest AI release
publishedDate: 2026-01-16
tags:
  - artificial-intelligence
  - ruby-and-rails
showToC: false
---

## Introduction

When I asked [Lumo](https://lumo.proton.me) to create a [Ruby chatbot](/posts/lumos-ruby-chatbot/), I forgot that Lumo's [knowledge cutoff date](https://www.allmo.ai/articles/list-of-large-language-model-cut-off-dates) is April, 2024. In the AI world, that is ancient history. So..

I wanted to see how Google's new [Gemini](https://gemini.google.com/app) AI Assistant would tackle the same problem.

## The Query and The Response

I attempted to use the same query as I did for Lumo, but I fat-fingered an incorrect model version. Gemini corrected for that - cool. However:

![gemini ruby chatbot query](@/assets/images/posts/gemini-ruby-chatbot.png)

## Uh - Oh

There are currently two Ruby gems that work with OpenAI. [Alex Rudall's](https://github.com/alexrudall/ruby-openai?tab=readme-ov-file) gem was created 6 years ago, and has been consistently maintained, with the latest release in August, 2025. [OpenAI's gem](https://github.com/openai/openai-ruby) was created in March/April, 2025, and is officially supported by OpenAI:

![ask leo about the correct openai gem](@/assets/images/posts//ask-leo-official-ruby-gem.png)

Gemini missed the boat on this one... After installing the "official" gem, I massaged the script to conform to the newer gem's requirements, as noted below.

## The Delivered Code (with changes as noted)

```ruby title:"Gemini's Ruby Chatbot" ins={"Added by me":1-2} mark={"Adjusted as required for OpenAI's gem":27-45}

#
#!/usr/bin/env ruby

require 'openai'

# 1. Setup Configuration
# It's best practice to use environment variables for API keys
# Export it in your terminal: export OPENAI_API_KEY='your_key_here'
client = OpenAI::Client.new()

# 2. Initialize Conversation History
# This allows the "nano" model to remember previous parts of the chat
messages = [
  { role: "system", content: "You are a helpful, concise assistant running in a terminal." }
]

puts "--- GPT-5 Nano Chatbot (Type 'exit' to quit) ---"

loop do
  print "\nYou: "
  user_input = gets.chomp
  break if user_input.downcase == 'exit'

  # Add user message to history
  messages << { role: "user", content: user_input }


  begin
    # 3. Call the OpenAI API
    response = client.chat.completions.create(
      model: "gpt-5-nano",
      messages: messages,
    )

    # 4. Extract and display the response
    ai_response = response.choices.first&.message&.content
    puts "\nAI: #{ai_response}"

    # Add AI response to history to maintain context
    messages << { role: "assistant", content: ai_response }

  rescue StandardError => e
    puts "\nError: #{e.message}"
  end
end

puts "Goodbye!"
```

## Test Case

```bash title="Gemini Chatbot Response" ins={"re-elected. Duh.":12}
./geminis_chatbot.rb
--- GPT-5 Nano Chatbot (Type 'exit' to quit) ---

You: Who was the seventh President of the United States?

AI: Andrew Jackson, who served from 1829 to 1837.

You: What was his political affiliation?

AI: He was a Democrat — the founder of the modern Democratic Party (earlier in his career he was aligned with the Democratic-Republicans).


You: Was he relected?

AI: Yes. He was re-elected in 1832, defeating Henry Clay, and served two terms as president (1829–1837). He did not win a third term.

You: exit
Goodbye!
```

## Discussion

- Repeated attempts to get Gemini to use the openai gem failed, even when I supplied the complete URL to the gem in the query request. No luck.

- So:

![Ask Leo, best AI tools for Ruby](@/assets/images/posts/leo-best-ai-tools-for-ruby.png)

Aha! ruby-openai may be the _leading_ Ruby gem, but I don't think it's the _right_ gem for new development. So the AI searches seem to be gravitating to either the oldest or most used gem or both. Interesting.

## Conclusion

AI tools can build you some workable software in a hurry, but it may not be the most up to date solution available.

## Next Steps

Time to investigate the use of [GitHub Copilot](https://github.com/features/copilot) with [LazyVim](https://www.lazyvim.org/).

Or look at [OpenCode](ihttps://opencode.ai/)

Or both...
