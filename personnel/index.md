---
layout: page
title: Personnel
menu: main
permalink: /personnel/
---

<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="peoplelist.css">
</head>

<body>

<div id="who-list">
{% for post in site.categories.who %}
	<li class="name">
	{{post.date | date: "%F"}} ... <a class="arch-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	</li>	
{% endfor %}
</div>

</body>
</html>
