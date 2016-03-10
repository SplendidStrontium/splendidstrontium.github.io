---
layout: post
title: 	"the Big Baby List"
date:		2016-03-10
categories:	parenting
tags:		[lists]
description: 	"what do you need(want) to get through the newborn phase?"
published:	true
lastmod:	2016-03-10 15:11
---
_Now finding myself with a sitting child who is quite contented with his free hands and new-found independence, what did I wish I had in my house when he was a baby?_

# Feeding a baby #
Newborns eat every 1-2 hours during the day, 2-4 hours during the night.  An infant's life revolves around the eating-sleeping cycle.
{% for item in site.data.babylist0-6m.brf_accessories %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
	{{ item.note | prepend:'note: '}}
{% endfor %}

# Bottling milk #
After breastfeeding has become routine for mom and baby (after about a month of age), you may wish to bottle your milk.
{% for item in site.data.babylist0-6m.bof_accessories %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
	{{ item.note | prepend:'note: '}}
{% endfor %}

# Clothes #
Those little growing bodies give off a lot of heat -- Babies are warm!  At any given time of the year, your baby probably wants to wear about as many layers as you do.
{% for item in site.data.babylist0-6m.clothes %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
{% endfor %}

# Staying warm, dry, and CLEAN #
it's easier than you think, with a bit of forethought.
{% for item in site.data.babylist0-6m.linens %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
{% endfor %}

{% for item in site.data.babylist0-6m.furniture %}
{{ item.name | prepend:' + '}}
{{ item.cmt }}
{{ item.sugg_ext }}
{% endfor %}
