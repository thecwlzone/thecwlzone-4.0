---
author: Lehman
title: AI Experiments Part 2
description: An AI agent example
publishedDate: 2025-12-10
tags:
  - artificial-intelligence
  - software-development
showToC: true
---

## Introduction

This is Part 2 of my exploration into the wacky and wonderful world of AI Engineering. My knowledge source is [A Common-Sense Guide to AI Engineering](https://pragprog.com/titles/jwpaieng/a-common-sense-guide-to-ai-engineering/), authored by Jay Wengrow and published by the [Pragmatic Bookshelf](https://pragprog.com/). The book has been updated to the 2.0 Beta release (December, 2025), and it's a pretty amazing overview of AI development principles.

See [Part 1](/posts/ai-experiments-part-1) for development environment details.

The chapters in Part 3 of the book dive into [AI agents](https://www.ibm.com/think/topics/ai-agents).

In essence, a nondeterministic Large Language Model's (LLM) text prediction results can be used to trigger a deterministic program function. This process is generally described as the use of _tools_ by an LLM. This turns out to be a pretty powerful concept, and it's the basis for AI agents in general.

## The AI Agent

Author Wengrow builds an AI agent that can create a podcast on any subject requested by the user. Here is a _very_ high level description of the agent's workflow:

1. Use a web search tool to search the web for the topic requested by the user. This will retrieve an array of URL strings.

2. Use a read web page tool on each URL to read the contents of its web page.

3. Use the content of those web pages to extract and write the podcast script. The LLM is instructed to determine if sufficient research has been done to create the podcast. If more information is determined to be required, steps 1, 2 and 3 are repeated.

4. Use a create audio tool to convert the podcast script into an mp3 file.

## Podcast Agent Code Notes

I won't reproduce the (Python) code here, as it's unethical to display somebody else's work without permission, so this section will just be an overview . Need more info? _Buy the book!_

The web search tool uses Google’s [Custom Search JSON API](https://developers.google.com/custom-search/v1/overview), so I had to resurrect my mostly dormant Google account to set up id's and permissions to use the API. The code uses GOOGLE_API_KEY and SEARCH_ENGINE_ID as environment variables.

Screen scraping of the returned URLs is done by a Python package called [BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/). I had to add some error handling due to program crashes if the package encounters any HTML weirdness.

I also added some "debug" statements to display the program's progress and to make sure that it was actually running.

The [OpenAI](https://openai.com/) [gtp-5-mini](https://platform.openai.com/docs/models/gpt-5-mini) Large Language Model was used in all steps except for the text-to-speech step which used the OpenAI [gpt-4o-mini-tts](https://platform.openai.com/docs/models/gpt-4o-mini-tts) model.

The prompts supplied to the LLMs are pretty extensive, and can no doubt be altered/improved to adjust the behavior of the agent. There are chapters in the book about Measuring Quality with Evals (Chapter 8), Prompt Engineering (Chapter 9) and Reducing Hallucinations (Chapter 10), because this is _not_ a trivial exercise.

## Running the Podcast Agent

I fired up the agent on Saturday, December 6th, 2025. I neglected to keep track of the elapsed time, but it was less than 10 minutes.

```shell
uv run ./podcast_chatbot.py
Assistant: What podcast would you like me to create?

User: Create a 5 minute podcast summarizing the latest advances in Large Language Model research.
Assistant: starting web_query...
Assistant: starting extract_text...
Assistant: continuing research...
Assistant: starting web_query...
Assistant: starting extract_text...
Assistant: starting create_audio...
Assistant: starting create_audio...

Assistant: Done. I've initiated production of a 5-minute single-host podcast summarizing the latest advances in large language model research. The audio file will be created as podcast.mp3. Do you want a written transcript or show notes for the episode as well?

User: no

Assistant: Understood — no transcript or show notes. The 5-minute podcast production is underway and the file will be podcast.mp3. Tell me if you want edits or a different topic later.

User: exit
```

### Play the Podcast

<!-- markdownlint-disable MD033 -->
<audio controls>
  <source src="/audio/podcast.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
<!-- markdownlint-restore -->

## Discussion

This result was one of the more successful tests. In earlier tests I had a couple of program crashes due to [excessive tokens](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) and [context window](https://www.ibm.com/think/topics/context-window) overflows. I also had a couple of runs that displayed data in the terminal, but that did not create a podcast. "Why didn't you create a podcast?", I asked. "You didn't tell me to do that.", was the response. WTF? It's in the prompt: "You are a podcast producer..." So going forward it was "Create a 5 minute podcast..." Harumph. On a couple of runs the agent said it would tell me when the podcast was completed, but it never actually responded even though the podcast was created. Bottom line: formulating a request needed some thought about the limitations of the tools. Requests that "failed" were things like "tell me about the top 5...". Better results were obtained with requests along the lines of "create a 5 minute podcast summarizing..."

- Podcast quality was impressive - the text-to-speech step seems pretty mature...

- I understood maybe 20 per cent of the podcast - a lot of AI buzzwords got thrown around, and I'm not AI-savvy enough to detect if there was any BS or other hallucinations in the mix...

- I'm not sure why the create_audio function was called twice - maybe because there were two iterations through the extract_text step? Dunno...

- I didn't ask for transcripts or notes in the prompts - I don't like uppity machines...

- OpenAI says it cost me 66 cents to run this experiment.

## Conclusions

Overall, I was impressed with the response of the program, but I'm sure there are not enough safeguards in the code to rely on the accuracy of the results. Still... I'll probably continue to add some minor refinements to the program, tweak some prompts and create a few more podcasts until my OpenAI cash account goes to zero.
