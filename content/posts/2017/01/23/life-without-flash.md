---
author: Lehman
title: Life Without Flash
description: Fighting with rogue applications
publishedDate: 2017-01-23
tags:
  - information-technology
showToC: true
---

## AMF Flash

Whilst thrashing around a [DAP'ed SOHO](/posts/2017/01/09/dap-ed), I ended up accidently installing a new version of [Adobe Flash](https://get.adobe.com/flashplayer/) for my [Chrome](https://www.google.com/chrome/index.html) browser. Easy to do since I seem to get an update pop-up every other day from that beast. Now I can't prove this, so I won't point fingers, but the next time I fired up Chrome I started getting strange tabs starting up with even stranger URLs. [Symantec Endpoint Protection](https://www.symantec.com/products/threat-protection/endpoint-family/endpoint-protection) raised a flag as well. WTF?

## A Nasty Piece of Malware

Somehow I managed to install a rogue application called SurfBuyer. No, I won't link to it. Was it somehow "bundled" as part of the Flash install? Like I said, I can't prove that, so the prosecution rests. In any event, I burnt a couple hours rooting this thing out of OS X. Here's [a good guide](https://www.pcrisk.com/removal-guides/10643-surfbuyer-adware-mac) for doing that on the Mac. In addition, I found this Linux command to be helpful as well:

```shell
sudo find . -name &amp;quot;\*SurfBuyer\*&amp;quot; -type f -exec ls -la {} \\;
```

Find any plain file containing "SurfBuyer" in the file name and list it with date and time stamps. Run this at the top of your home directory, and also /Library and /Application. You'll need to use sudo to check system-owned directories.

Other useful find variations: -type d to find directories. Searching for -name "surfbuyer", -name "Surf" -name "Buyer", etc. may be helpful as well. Search and destroy.

This site also describes removal from [Windows machines](http://malwarewarrior.com/remove-surfbuyer-mac/), but I have not tried it myself, because I haven't needed it yet, thank goodness.

## Now for You, Flash

This was an interesting article from [appleinsider](http://appleinsider.com/articles/15/07/13/its-time-to-uninstall-adobes-flash-from-your-mac---heres-how) - just get rid of Flash altogether. You have to install the uninstaller - talk about recursive. Anyway, that worked. I've been Flash-free for a couple of weeks, and I have not noticed any difference. Bear in mind, I'm not looking at that many videos, but the ones I have watched seem to be working OK.

For my Windows 7 machine, I'll probably do what this article says. Later model Windows systems are most likely similar.

## The Scouring of the Chrome Browser

I still wasn't completely satisfied I had cleared everything out, so I decided to remove Chrome as well. This was an interesting process, as pieces of Chrome are everywhere in the OS X file system. Here are a couple of good tutorials:

Remove Google Chrome from El Capitan

(applies for Sierra as well)

[Purge Chrome User Data from OS X](http://crunchify.com/how-to-purge-all-your-google-chrome-user-data-on-mac-os-x/)

Here's a shell script I lifted from [superuser](http://superuser.com/questions/318186/how-do-i-uninstall-google-chrome-completely-from-my-mac). I don't recommend using the script _per se_, but it's a good list of where to poke around in the file system.

```shell
rm -r /Applications/Google\\ Chrome.app/
rm -r ~/Library/Application\\ Support/Google/Chrome/
rm ~/Library/Application\\ Support/CrashReporter/Google\\ Chrome\*
rm ~/Library/Preferences/com.google.Chrome\*
rm ~/Library/Preferences/Google\\ Chrome\*
rm -r ~/Library/Caches/com.google.Chrome\*
rm -r ~/Library/Saved\\ Application\\ State/com.google.Chrome.savedState/
rm ~/Library/Google/GoogleSoftwareUpdate/Actives/com.google.Chrome
rm ~/Library/Google/Google\\ Chrome\*
rm -r ~/Library/Speech/Speakable\\ Items/Application\\ Speakable\\ Items/Google\\ Chrome/ \
```

For Windows, there's this, but again, I can't validate its accuracy:

[Remove Chrome from Windows](http://www.wintips.org/how-to-completely-uninstall-re-install-google-chrome/)

## Reinstall Chrome?

I decided there was no rush in re-installing Chrome. [Firefox Developer](https://developer.mozilla.org/en-US/Firefox/Developer_Edition) is working pretty well, so if I don't get any peer group pressure from the rest of the development team, I'll declare victory over malware and browsers for now. Cheers!
