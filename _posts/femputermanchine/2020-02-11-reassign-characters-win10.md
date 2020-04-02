---
layout: post
title: "Reassign Keyboard Characters [Windows 10]"
date: 2020-02-11 07:32
category: femputermanchine
tags:	 [windows10, how-to]
description: "Caret on a Stick; 6° of separation"
thumbnail_id:	"00-002.png"
published: true
comments_id: 21
lastmod: 2020-02-11 08:54
---

I write recipes that require cooking and I also occasionally speak of rotations in degrees. I am not well-versed in Kelvin or radians and I assume people would prefer I not speak that way. I have developed a need for the degree symbol (°) but the standard US keyboard does not have it bound. I have put the character map on my taskbar but it was still taking far too long to get this character into my writing. I did a bit of research on how to correct this problem and here is how I did it. 

First, use your favorite internet search engine to locate a program Microsoft has developed called Microsoft Keyboard Layout Creator. 

<img src="{{ site.url }}/assets/img/mklc-download.png" />

Note that the program does not specifically state that it works for Windows 10 but I had no problems using it.

Install the program as you would ordinarily. Open the program and load your standard layout. For me, this is the standard US layout. We'll use this as our base and modify to suit.

<img src="{{ site.url }}/assets/img/mklc-load.png" />

The keyboard image will populate with the standard keybinds. I am changing the (up)caret. This character  is also called a circumflex. Of the number-key characters, it is the one I use the least often; the only thing I can think I've used it for recently is drawing arrows in signs in Minecraft. 

We need the key on shift-6. So make sure you switch to the shift set of keys.

<img src="{{ site.url }}/assets/img/mklc-shift.png" />

Open your character map and locate the degree symbol. Note the code for inserting the character at the bottom. For some of you, you might have been able to input this character using codes on the number pad. Unfortunately I don't have a number pad on my keyboard so this wasn't an option.

<img src="{{ site.url }}/assets/img/mklc-charactermap.png" />

You can write this code in the reassign dialogue in the layout creator. You could probably also copy and paste the unicode character but I've seen some tomfoolery when I do this in certain programs so I was feeling superstitious. 

<img src="{{ site.url }}/assets/img/mklc-reassign.png" />

You can test your layout using the provided test field. If you're happy with what you have, export to allow Windows to make an install package.

<img src="{{ site.url }}/assets/img/mklc-export.png" />

Locate the package it creates for you; the program will tell you where it put it and what the name is. I renamed mine. Install it.

<img src="{{ site.url }}/assets/img/mklc-setup.png" />

After you've done that, you'll need to change your language settings to tell Windows to use the new keyboard. Open your Windows language settings, either from the language bar or by searching for it.

<img src="{{ site.url }}/assets/img/mklc-languages.png" />

Open the English language and find the installed keyboards. Your new keyboard is called 'US - Custom'. I removed the basic QWERTY keyboard, and then re-added it so that it was second priority in the list.

<img src="{{ site.url }}/assets/img/mklc-remove.png" />

From here I didn't see my keyboard in my language bar, but it appeared once I restarted the computer. Don't skip this step! Now you should see both keyboards in your language bar, provided you use it. 

<img src="{{ site.url }}/assets/img/mklc-langbar.png" />

You can use WIN+SPACEBAR to change keyboards. I am a bit disappointed it shows up as its own entry and not akin to the CTRL-SHIFT-F method to change between simplified and traditional characters in the Chinese keyboards; but I'll try to see the positives. If I need those carets for telling myself which chest is cobblestone and which is granite, well, now it's only two keys away.

<img src="{{ site.url }}/assets/img/mklc-confirm.png" />
 
And _voilà_! It works.
