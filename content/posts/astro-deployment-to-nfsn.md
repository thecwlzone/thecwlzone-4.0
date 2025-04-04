---
author: Lehman
title: Astro Deployment to NearlyFreeSpeech.net
description: Take an Astro project and run it on NearlyFreeSpeech.net
publishedDate: 2025-04-04
tags:
  - astro-development
showToC: true
---

_The Astro framework has almost two dozen deployment strategies "baked in", but if you are using an "off brand" hosting company, you need to roll your own. Here's how I deployed an Astro blog site to NearlyFreeSpeech.net_

## Introduction

I was looking for a way to freshen up my personal web site. I had been using [Middleman](https://middlemanapp.com/) for a long time, but it was starting to look a bit stale. Then I discovered [Astro](https://astro.build/). With a wealth of example [themes](https://astro.build/themes/) available to get me started, I decided to make the transition.

Astro supports a large number of web hosts, but my host - [NearlyFreeSpeech.net](https://www.nearlyfreespeech.net/) (NFSN) - was not one of them, so I needed to set up my own deployment process, as described below...

Note: this article assumes you have a working knowledge of web frameworks and GitHub. Onward...

## Set up the Git Repos

I'm assuming you are comfortable with creating a new git repo on GitHub for your Astro project... (Note 1)

Once your GitHub repo is in place, we can add the NFSN repo. This is where we will push the contents created when we run `pnpm build`. At your Astro project root directory, run:

(On one line...)

`git remote add nfsn \`
`your_nfsn_login@ssh.nyc1.nearlyfreespeech.net:/home/protected/repo_name`

Run `git remote -v`. You should see two nfsn and two origin remotes listed. (Note 2)

## Put the dist directory Under Git

The Astro `dist` directory holds all the files necessary to run a static web site. Normally you would not want that as part of your GitHub repo, but since we want to push the contents to our web host, `dist` needs to be added. So - remove the `dist` entry from the `.gitignore` file, and then do:

`git add . ; git commit -am "Add dist to the repo" ; git push`

## Push dist to the NFSN protected Repo

This is the tricky, magical git command:

`git subtree push --prefix dist nfsn master`

/home/protected/repo_name should now be populated with a git-centric hierarchy of files. (Note 3)

## Pull the contents into the NFSN /home/public directory

Log into your nfsn account, `cd` into /home/public. This is moment where you replace your site's current content with your new Astro-created content.

Delete everything under /home/public - this is the scary part... (Note 4)

While still in the /home/public directory, clone the "local" git repo in /home/protected using this command:

(On one line...)

`git clone \`
`your_nfsn_login@ssh.nyc1.nearlyfreespeech.net:/home/protected/repo_name .`

Don't forget the trailing dot (.) to denote the current directory.

/home/public should now look like the dist directory in your Astro project.

In theory, your new Astro-based content should be showing up when you hit your web site's URL...

Once all this is done, the development process looks like this:

- Make changes to your project
- Build and preview a new set of files in dist
- Push changes to the GitHub repo
- Push (subtree) changes to the NFSN repo
- Log into NFSN, run a git pull from /home/public

## htaccess and favicon.ico Files

NFSN will capture errors, e.g. 403, 404, 500, etc. If you want to override that with your own error capture (like [this one](/404)), then you will need to add the [astro-htaccess](https://github.com/BadMannersXYZ/astro-htaccess) integration tool, and add it to your astro.config.ts file.

`pnpm astro add astro-htaccess`

```ts
import htaccessIntegration from 'astro-htaccess'

export default defineConfig({
  site: config.site,
  integrations: [mdx(), sitemap(), htaccessIntegration()],

```

It's pretty slick - the tool will comb through your files for things like 404.html and automatically add an entry into the generated .htaccess file. The file will be added to the dist directory during the next build.

The favicon.ico is more problematic. After generating a set of icons at [RealFaviconGenerator](https://realfavicongenerator.net/) I simply did a `sftp` transfer of favicon.ico to /home/public. There is probably a more elegant way of handling this, but I haven't found it.

## Final Thoughts

The /home/public directory should be subjected to only a `git pull` process, even though it has "push" permissions. There is probably a better way to handle this.

There are a lot of manual steps to pushing new content to GitHub and NFSN. There is most likely a way to add more automation to the process, perhaps using some GitHub pre or post hooks, but that's pretty fuzzy to me at the moment, so it will have to wait as a possible future enhancement. What I have running now will suffice, and I'm knocked out with the new look and feel of my personal web site.

Please feel free to [contact](/contact) me with any questions or comments. Cheers!

## Notes

(1) [https://docs.astro.build/en/tutorial/1-setup/4/](https://docs.astro.build/en/tutorial/1-setup/4/)

(2) Note that your assigned NSFN hostname may be different; you can find hostname information under your sites tab.

(3) [https://www.geeksforgeeks.org/git-subtree/](https://www.geeksforgeeks.org/git-subtree/)

(4) It may be possible to restore your original /home/public contents by doing a rsync on a snapshot located in /home/.zfs/snapshot (a hidden directory, you have to `cd` into it).
