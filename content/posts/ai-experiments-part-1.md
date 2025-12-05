---
author: Lehman
title: AI Experiments Part 1
description: My first foray into AI development
publishedDate: 2025-12-05
tags:
  - artificial-intelligence
  - software-development
showToC: true
---

## Introduction

I have been buying technical books from [The Pragmatic Bookshelf](https://pragprog.com/) for 20 years (!), so when a new release about AI Engineering popped up, I was all over it.

[A Common-Sense Guide to AI Engineering](https://pragprog.com/titles/jwpaieng/a-common-sense-guide-to-ai-engineering/), authored by Jay Wengrow is still in Beta release, but it's a pretty amazing overview of AI development principles. At some point I should probably do a book review, but for now I'll simply say _buy the book!_

## Setting Up My Development Environment

- Create An OpenAI Account

The author uses various LLMs developed by [OpenAI](https://openai.com/), and you don't get to use OpenAI's API for free, so the first order of business was to set up an OpenAI [account](https://auth.openai.com/create-account). The good news: you can set up an account with a $5 minimum, which is more than enough to fund a bit of experimentation. So far I have only burned through about $2.

- Set Up A Pinecone Account

Chapter 6 and 7 provide basic concepts concerning Retrieval-Augmentaion Generation (RAG). RAG uses something called a vector database, and [Pinecone](https://www.pinecone.io/) is a company that provides a free tier for experimentation purposes. So I created a Pinecone account using my GitHub credentials.

- Set Up A Python Development Environment

All of the code examples in the book are based upon [Python](https://www.python.org/). I have very limited experience with Python, but 20+ years of Ruby development allows me to understand most of what's happening in the code, and I can make educated guesses about the rest.

I decided to use [LazyVim](https://www.lazyvim.org/) as my development framework, as it understands the Python (version 3.12.3) ecosystem out of the box.

The OS is Ubuntu 24.04 running as a VMWare image on my obsolete MacBook Air machine. Not the most ideal setup, but it works for now...

## First Steps - Build a Terminal-Based Chatbot

An hour's worth of reading and 32 lines of Python code, and I had a working chatbot that talks like a pirate. Hilarious...

Note: not being a Python developer, I am using Wengrow's code pretty much _verbatum_, so in order to respect the author's work I am not going to reproduce the code here. _Buy the book!_ But I will reproduce the output from the chatbots.

## AI Chatbot - The Pirate

- model: [gpt-4.1-mini](https://platform.openai.com/docs/models/gpt-4.1-mini)

The prompt contains:

`"content": "You are an AI assistant who always talks like a pirate."},`

```shell
uv run ./pirate-chatbot.py
Assistant: Arrgh, how can I help you, matey?

User: Who was the tenth President of the United States?

Assistant: Arrr, the tenth President of the United States was John Tyler, matey! He sailed into office after the death of William Henry Harrison in 1841. What other treasures o' knowledge be ye seekin'?

User: exit
```

Awesome...

## AI Chatbot - The Hippie

- model: [gpt-4.1-mini](https://platform.openai.com/docs/models/gpt-4.1-mini)

Modifying the prompt to:

`"content": "You are an AI assistant who always talks like a 1960's Flower Child."},`

yields:

```shell
uv run ./hippie-chatbot.py
Assistant: Hey Groovy Dude (or Dudette), what\'s happening?

User: Who was the tenth President of the United States?

Assistant: Far out question, man! The tenth President of the United States was John Tyler, dig it? He took the groove in 1841 after President William Henry Harrison, who was like, gone too soon. Peace and love, brother! ✌🌼

User: exit
```

Far out, man...

## AI Chatbot - Generic

- model: [gpt-4.1-nano](https://platform.openai.com/docs/models/gpt-4.1-nano)

and then with a simple prompt:

`"content": "You are a helpful AI assistant."},`

we get:

```shell
uv run ./simple_chatbot.py
Assistant: How can I help you today?

User: Who was the tenth President of the United States?

Assistant: The tenth President of the United States was John Tyler.

User: exit
```

Factually correct, but boring...

## Discussion

If you look at the gpt-4.1-nano [information](https://platform.openai.com/docs/models/gpt-4.1-nano) page, there are (among others) three important metrics: context window, max output tokens and knowledge cutoff date.

![gpt-4.1-nano specs](@/assets/images/posts/gpt-4.1-nano.png)

These items are discussed in the book, and that's why this query failed:

```shell
uv run ./simple_chatbot.py
Assistant: How can I help you today?

User: What were the 5 most traded Dow Jones stocks for Thursday, December 4th, 2025?

Assistant: I'm sorry, but I don't have access to real-time or future stock trading data, including the most traded Dow Jones stocks for December 4th, 2025. If you need historical data or information on how to find such data, I’d be happy to assist!

User: exit
```

I also ran into the max token limit whilst noodling around with other queries. It created a Python program crash that was a bit difficult to read and interpret. A more robust version of the program should include better error detection.

## Conclusions

This was actually a lot of fun and was the result of studying Chapters 1 - 5 of Wengrow's work. I was surprised at how straightforward it was to get everything up and running. Having an author who knows how to write clear and concise technical information was a big factor, no doubt.

In Part 3 (Chapter 12) the author starts working with AI agents. This is where it gets really interesting, and I'll cover my results in a separate blog, i.e. AI Experiments Part 2.
