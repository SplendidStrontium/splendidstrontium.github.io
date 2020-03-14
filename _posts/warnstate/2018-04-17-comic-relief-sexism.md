---
layout: post
title: 	"The Disappearing Male Role Model"
date:	2018-04-17 14:36
categories:	entertainment
tags:		[cartoons, film] 
description: 	"If men appear at all, they are too often cast as comic relief or doofuses"
published: true
lastmod:	2018-04-20 20:36
---

<table id="rm_table">
	<tr>
		<th>I.P.</th>
		<th>Years</th>
		<th>Main Character</th>
		<th>Notable Females</th>
		<th>Notales Males</th>
	</tr>
	{% for ip in site.data.role-model-list.ips %}
	<tr>
		<td>
			{{ ip.name }}
		</td>
		<td>
			{{ ip.yrs }}
		</td>
		<td>
			{{ ip.main_char }}
		</td>
		<td>
			{{ ip.n_females }}
		</td>
		<td>
			{{ ip.n_males }}
		</td>
	</tr>
	{% endfor %}
</table>
