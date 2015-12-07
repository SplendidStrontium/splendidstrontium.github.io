---
layout: post
title:  "How to install EVE Online on Linux Mint 17.2 Cinnamon [32-bit]"
date:   2015-11-29
categories: howto
description:  "or another similar OS"
tags:   [eve]
lastmod:	2015-11-29
---
I have recently been getting back into EVE Online, and now that I'm on Linux more often than not, I wondered whether it was possible to set up the game accessible by Linux.  It was a relatively simple installation.

-  *INSTALL WINE*

This allows you to emulate the Windows environment without a separate boot-up.  You can do this via your package manager or command line.  Check to make sure your installation went through without hiccup by typing:

`$ wine --version`

-  *INSTALL WINETRICKS*

A helper to get some of EVE's dependencies into our fake Windows environment.

`$ sudo apt-get install winetricks`

-  *INSTALL FONTS*

EVE needs some fonts installed before the Launcher will properly display.  You can do this using winetricks.

`$ winetricks fonts`

will give you a list.  From the list, select allfonts, consolas, corefonts, tahoma, and install all of them.

-  *INSTALL PACKAGES*

use winetricks, either GUI or CMD, to install required packages.  You need to install vc2005express.  A more updated version of Visual C++ may also work, although 2005 seems to be working for me at present.

-  *DOWNLOAD EVE LAUNCHER FROM CCP*

I searched online and found the most up-to-date version of CCP's launcher.  The file name was "EVEOnlineLauncher_2_2_967872.exe".

-  *MOVE LAUNCHER TO WINE'S FOLDER*

Locate your recently downloaded file and copy it to WINE's system32 folder.  Mine is located at /home/[MYUSERNAME]/.wine/dosdevices/c:/windows/system32

-  *INSTALL LAUNCHER*

`$ wine EVEOnlineLauncher_2_2_967872.exe`

Or change the file name to whatever you downloaded from CCP.

-  *OPTIONAL: MAKE A SHORTCUT*

Open up your c:/Program Files/CCP/EVE and locate "EVE Online Launcher.lnk".  This file can be copied and pasted to your desktop, or anywhere else you like, to launch the EVE Online Launcher.  Make sure the default program that opens this file is set to "WINE Windows Program Loader".

I have logged into EVE and made changes to my skills loading, but I haven't made the adventure out into space in fear of getting sucked into the game for a few hours.  I will report back with more findings about EVE on Linux.
