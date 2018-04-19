---
layout: post
title: 	"US Cartoon Family Structures"
date:	2018-04-16 21:31
categories:	entertainment
tags:		[cartoons] 
description: 	"Summary of cartoon family representation"
published: true
lastmod:	2018-04-16 21:31
---

<table id="ff_table">
	<tr>
		<td>I.P.</td>
		<td>Years</td>
		<td>Mother</td>
		<td>Father</td>
		<td>Children</td>
	</tr>
	{% for ip in site.data.fam-film-list.ips %}
	<tr>
		<td>
			{{ ip.name }}
		</td>
		<td>
			{{ ip.yrs }}
		</td>
		<td>
			{{ ip.mother }}
		</td>
		<td>
			{{ ip.father }}
		</td>
		<td>
			{{ ip.children }}
		</td>
	</tr>
	{% endfor %}
</table>
