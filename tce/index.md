---
layout: default
title: The Convergent Eigenspace
permalink: /tce/
---

<html>
	<head>
		<meta charset="utf-8">
	</head>

<body>

<h1>The Convergent Eigenspace</h1>

<p>At the age of nineteen, a young man destroys his old identity to take a new name, stepping into the shoes of Cedric Kenyon.</p>

<p><em>The Convergent Eigenspace</em> starts with Book 0: <em>What Time Cannot Touch</em>. While Cedric has abandoned his old life, he finds he has brought with him a tendency toward bizarre and troubling dreams. He must endure terror by night while each day attempting to grasp at feats he had long believed impossible. When his magical abilities emerge in ways his fellow students don't recognize, he finds that a unique gift can feel like loneliness, and sometimes like a curse. In true Gothic fashion, Cedric discovers our past will always haunt us, but we nevertheless have a choice of how we deal with our skeletons — and our endless Thirst.</p>

<p>To read the series, visit <a href="https://read.nan.nyc">my substack</a>.</p>

<p>I will occasionally post author's notes on the <a href="/tce/blog/">blog</a>. To explore the people, places, and things of the series, visit the <a href="/tce/wiki/">wiki</a>.</p>

<br>
<hr>
<h2>Recent Additions</h2>
{% assign blog = site.categories.blog %}
{% assign chapters = "" | split: "" %}
{% if site.book0 %}{% assign chapters = site.book0 %}{% endif %}
{% assign recent = blog | concat: chapters | sort: "date" | reverse %}
{% for item in recent limit: 3 %}
  {% include tce-card.html item=item %}
{% endfor %}

</body>
</html>

