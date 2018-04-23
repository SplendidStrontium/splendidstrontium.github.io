---
layout: post
title: 	"LoL: Champion Shape List"
date:	2018-04-22 10:30
categories:	entertainment
tags:		[league-of-legends] 
description: 	"Organized by release date"
published: true
lastmod:	2018-04-22 10:30
---

<table id="lol_table">
	<tr>
		<th>Name</th>
		<th>Release Date</th>
		<th>Form</th>
	</tr>
	{% for champ in site.data.lol-list.champs %}
	<tr>
		<td class="champ_name">
			<span class="champ_lg_name">{{ champ.name }}</span> <span class="champ_title">{{ champ.title }}</span>
		</td>
		<td>
			{{ champ.bday }}
		</td>
		<td>
			{{ champ.form }}
		</td>
	</tr>
	{% endfor %}
</table>
