---
author: Lehman
title: Astro 6 Update Notes
description: Lest I forget...
publishedDate: 2026-03-17
tags:
  - astro-development
showToC: true
---

## Introduction

On March 10, the Astro team announced the [release](https://astro.build/blog/astro-6/) of Astro 6, which was a pretty significant upgrade. Before I forget what I did, I better record the proceedings...

## Upgrade Steps

The [Astro 6 Upgrade Guide](https://docs.astro.build/en/guides/upgrade-to/v6/) had some good information. Running

```bash
pnpm dlx @astrojs/upgrade
```

installed the necessary Astro packages, but left everything else alone.

## Other Packages

I had to remove the [astro-htaccess](https://github.com/BadMannersXYZ/astro-htaccess) package, as it does not support Astro 6 at this time. Since the last change to the package was 2 years ago, I'm assuming it's basically a stale package. After a _git pull_ on the NFSN public directory I will need to manually copy over my custom .htaccess file from tmp into public. No biggie, but I will have to remember to do that step.

## GitHub Changes

A _git push_ failed after the upgrade. The [GitHub](https://github.com) Continuous Integration yaml file needed an explicit reference to [Node](https://nodejs.org/en) version 22. On a whim, I had [Claude](https://claude.ai/login) look at the file, and I got some good suggestions as well as a commentary about what the file does. Impressive, thanks Claude. The new working CI file:

```yaml title=".github/workflows/ci.yaml"
---
name: Run checks

on:
  push:
  workflow_dispatch:

jobs:
  run-checks:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Setup pnpm
        uses: pnpm/action-setup@v4

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: '22'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm i --frozen-lockfile

      - name: Run checks
        run: pnpm check
```

## Remaining Issues

I'm seeing this error message when running the local development server:

```bash
[vite] program reload
[vite] An error happened during full reload
Failed to load url astro:server-app.js (resolved id: astro:server-app.js). Does the file exist?
Error: Failed to load url astro:server-app.js (resolved id: astro:server-app.js). Does the file exist?
    at loadAndTransform (file:///home/clehma203/Sites/thecwlzone-4.0/node_modules/.pnpm/vite@7.3.1_@types+node@25.0.3_jiti@2.6.1_lightningcss@1.31.1_yaml@2.8.2/node_modules/vite/dist/node/chunks/config.js:22663:33)
```

I have to manually refresh the localhost:4321 page to see the latest saved changes.

## Conclusions

Astro 6 has only been out a week. I'm usually not this aggessive with major upgrades, so the upgrade decision may have been a bit premature. OTOH, the web site is functional in production, so I think I will declare victory.
