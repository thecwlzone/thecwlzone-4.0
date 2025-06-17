---
author: Lehman
title: Automate Version Numbers with Git Hooks
description: Versioning your commits
publishedDate: 2016-12-07
tags:
  - software-development
  - ruby-and-rails
showToC: true
---

## Introduction

It's not unusual for me to push a dozen or more commits to my [Rails](http://rubyonrails.org/) project repo in a single day. "Commit early and often" is the mantra, at least for developers using [Git](https://git-scm.com/) as the repo engine. If your git commit also kicks off a deployment to somewhere (we have [Jenkins](https://jenkins.io/index.html) detect a commit and start a Capistrano deployment to our integration machine), how do you track what version of the code is running "in the wild"?

Oftentimes there is a VERSION constant in the code that can be manually updated when a new "official" release is to be promoted to production. If that's the case, can we leverage VERSION to track "non-release-worthy" commits as well? Git has a feature called git "hooks" that will allow us to run OS commands and scripts at various points in the Git lifecycle. Git hooks will allow us to automatically increment the VERSION constant on every commit. Here's how we did it...

## Git Client-Side Hooks

Here's the Git bible

[https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

This article will be confined to only client-side hook activities.

In your Rails app root location, the .git directory has a "hooks" directory that should look like this:

![git_hooks_dir](@/assets/images/posts/git_hooks_dir.png)

The pre-commit link will not be in your directory, we'll create that later. But take a look at the sample files, you will get a feel for what can be done with Git hooks.

To activate one of the sample files, copy it to a new file without using the .sample filetype, and then make the file executable:

```shell
cp pre-rebase.sample pre-rebase chmod ugo+x pre-rebase
```

## The Version File

There are probably better ways to do this, but as mentioned earlier we have simply added a version file to the Rails hierarchy and manually modified the VERSION constant prior to every release to production. This works well enough for releases that track typical Agile two week iteration/release cycles, but we may have to revisit that concept as we move closer to continuous deployment. For now, though, the version file looks like this:

![version_file](@/assets/images/posts/version_file.png)

The "minor" part of the version number is "9" in the string "1.0.9"

## Build the Hook File and Put It Under Version Control

The pre-commit hook file needs to do two things: 1) run a script that alters version.rb, and 2) add the altered file to the git commit list. The code to do that is shown below.

Note that the .git directory does not git, er, get committed to the master branch, nor are client-side hooks copied when a repo is cloned, so how do you distribute the hook file to the rest of the development team? Put it under version control, and the best way to do that is to create it in the Rails directory structure and then link to it in .git/hooks. We decided to add a git_hooks directory under lib to store the hook file.

![libgit_hooks](@/assets/images/posts/libgit_hooks.png)

## Add Links to the Hook Files

Now add a link in .git/hooks to the file.

```shell
cd .git/hooks ln -s ../../lib/git\_hooks/pre-commit
```

## Build the Script to Alter the Version File

We convert the VERSION string to integer, bump the minor number and convert back to string. Then we use sed to alter the file with the new VERSION value. There are other approaches of course, including using the Ruby File class, or use Ruby itself on the command line to alter the file. We use sed, so there is one additional statement to remove the backup (\*.bak) file that sed likes to create.

![alter_version_script](@/assets/images/posts/alter_version_script.png)

## Optional - Build a Script to Create the Link

You may have team members that do not have a Linux sys admin background, so links might be a bit of a mystery to them. You can create a small Ruby script to create the link with the Rails runner. We get a list of all hook files in lib/git_hooks and create links as required.

![install_script](@/assets/images/posts/install_script.png)

```shell
bundle exec rails runner ./script/install\_git\_hooks.rb
```

## Done

That's it. Now every time we do a `git commit -m <Message>` the version.rb file gets hacked by sed which bumps the minor version number by 1, the altered file is added to the commit list and the git commit process completes as usual.

## Exception to the Rule

This solution is not perfect. If you are using git "properly", i.e. you create a local feature branch, rebase with master and then merge your feature branch with local master and then push to the repo, you will pick up a new copy of version.rb from master if another team member has pushed a commit to master. This normally does not cause any merge conflicts, but your push to master will "inherit" the latest version number from the master branch. Under these conditions, you may want to manually update version.rb, especially if your local feature branch contains significant changes that you want to track with a unique minor version number. Otherwise you can just let it go, and basically you will have more than one update to master under the same minor version number. We have decided to live with that quirk for now, especially since we still need to address major version numbering and a production release branch strategy.

## Next Up

That takes care of minor versioning for continuous integration, but what do we want to do about "official" releases to production, especially if your team is closing in on a continuous deployment strategy? I'll address that in a future post. Cheers!
