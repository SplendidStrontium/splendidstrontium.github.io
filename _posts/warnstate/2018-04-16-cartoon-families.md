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
		<th>I.P.</th>
		<th>Years</th>
		<th>Mother</th>
		<th>Father</th>
		<th>Children</th>
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
