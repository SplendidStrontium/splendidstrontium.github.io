---
layout: post
title: 	"the Big Baby List"
date:		2016-03-10
categories:	parenting
tags:		[lists]
description: 	"what do you need(want) to get through the newborn phase?"
published:	true
lastmod:	2016-03-10 12:21
---
Now finding myself with a sitting child who is quite contented with his free hands and new-found independence, what did I wish I had in my house when he was a baby?

# Feeding a baby #
{% for item in site.data.babylist0-6m.brf_accessories %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
	{{ item.note | prepend:'note: '}}
{% endfor %}

# Bottling milk #
{% for item in site.data.babylist0-6m.bof_accessories %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
	{{ item.note | prepend:'note: '}}
{% endfor %}

# Clothes #
{% for item in site.data.babylist0-6m.clothes %}
	{{ item.name | prepend:' + '}}
	{{ item.cmt }}
{% endfor %}

# Staying warm, dry, and CLEAN #
{% for item in site.data.babylist0-6m.linens %}
{% endfor %}

{% for item in site.data.babylist0-6m.furniture %}
{{ item.name | prepend:' + '}}
{{ item.cmt }}
{{ item.sugg_ext }}
{% endfor %}
