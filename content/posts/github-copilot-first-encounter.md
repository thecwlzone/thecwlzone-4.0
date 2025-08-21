---
author: Lehman
title: GitHub Copilot - First Encounter
description: And as if by magic...
publishedDate: 2025-08-13
tags:
  - astro-development
  - artificial-intelligence
showToC: true
---

## Introduction

I know I'm way behind the curve of AI software development enhancements, but hey, I'm retired, so there.

But with a longstanding [GitHub](https://github.com/) account and a [Copilot](https://github.com/copilot) extension available within the [Astro](https://astro.build/) framework, I thought I would at least get myself set up.

Installing the Copilot extension was simple enough, and the Chat extension was installed as well. I left it at that, given that I had no changes to the web site planned.

## My Mistake

But I do like to keep all the packages up to date, and a `pnpm outdated` command yielded a number of downlevel packages. After running `pnpm update`, there were two packages that did not get updated, namely [satori](https://www.npmjs.com/package/satori) and [styleint-config-recommended](https://github.com/stylelint/stylelint-config-recommended). I changed to the latest version of both in `package.json` and re-ran `pnpm update`.

Pushing the changes out to the github repo, the run failed:

![run-checks-fail image](@/assets/images/posts/run-checks-fail.png)

Ugh. Now what?

GitHub flagged the error by running `pnpm lint && astro check`, which happens to be defined in `package.json` as a script, `pnpm check`. So, new rule: after package updates, run `pnpm check` locally to test for errors. Duh.

![package.json image](@/assets/images/posts/package-json-scripts.png)

## The Magic Fix

The error affected two files as noted in the PROBLEMS tab of the VS Code Panel. Calling up the files and rolling over the flagged statement, I noticed that Copilot had a Fix button displayed. I clicked on that and watched Copilot alter my code. Clicking on the Accept button saved the changes.

Re-running `pnpm check` gave me an "all clear" status. Wow.

![file changes image](@/assets/images/posts/file-changes.png)

## Discussion

I was simultaneously gratified and terrified.

I think I know what caused this - upgrading satori from version 15 to version 16 introduced new and exciting features and checks:

    15:44:56 [check] Getting diagnostics for Astro files in /home/runner/work/thecwlzone-4.0/thecwlzone-4.0...
    src/pages/ogImage.png.ts:12:23 - error ts(2345): Argument of type 'Buffer<ArrayBufferLike>' is not assignable to parameter of type 'BodyInit | null | undefined'.
    Type 'Buffer<ArrayBufferLike>' is missing the following properties from type 'URLSearchParams': size, append, delete, get, and 2 more.
    12 return new Response(png, {

I'm glad Copilot knew what this meant, because I was totally lost. And then the fix - adding [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) - OK, [What Does It All Mean Mr. Natural?](https://www.pinterest.com/pin/334040497343905532/)

I'm blown away that a fix was found so quickly - I would have spent a lot of time on [StackOverflow](https://stackoverflow.com/questions) trying to find a solution, but the reality is this: _I don't know what went wrong, and I don't understand the fix_. Now this is not a big deal for a retired guy's personal web site, but what if this code was part of, oh, I dunno, a fuel monitoring system for commercial aircraft. Just push the fix and put your trust in the integration testing? **Hah!**

This is the big risk I see with AI-enhanced software development - if the software fails, [who ya gonna call](https://en.wikipedia.org/wiki/Ghostbusters)?
