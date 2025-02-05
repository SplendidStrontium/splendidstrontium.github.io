---
layout: darkshadows
title: "Dark Shadows Episode Reviews"
menu: main
permalink: /darkshadows/ 
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="ds-intro">
<p>For now, I hope you'll enjoy my foray into the world of Collinsport. There are more than a few things in common between the worlds, namely werewolves, witches, ghosts, and even a vampire or two.</p>
<p>As I write this, I eagerly look forward to learning more about the Collins family and the whole cast of characters that made "Dark Shadows" a success. I hope you will take the ride along with me.</p>
</div>

<hr>

<h2>PART I: Victoria's Arrival </h2>

<ul>
	{% for post in site.posts reversed %}
        {% if post.url %}
			{% if post.category == "darkshadows" %}
				{% if post.tags contains "pt-i" %}

				    <li class="ds-post">
					<div class="ds-link-box"><a class="ds-link-txt" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | truncate: 31 }}</a></div>
					
					{% if post.thumbnail_id %}
					<div class="ds-tb">
					<img src="{{ site.url }}/assets/tb/{{post.thumbnail_id}}" alt="" class="ds-tb-img">
					</div>
					{% endif %}

					<div class="ds-desc-box">
						<span class="ds-desc">{{post.description}}</span>
						<br><span class="ds-rating">{{post.rating}}</span>
					</div>

					<span class="ds-date">
					<span id="dayname-cn">
					{% assign day = post.date | date: "%w" %}
					{% case day %}
					{% when '0' %}周日
					{% when '1' %}周一
					{% when '2' %}周二
					{% when '3' %}周三
					{% when '4' %}周四
					{% when '5' %}周五
					{% else %}周六
					{% endcase %}</span>

					{{post.date | date: "%d %b, %Y"}}</span></li>
				
				{% else %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<br>

<hr>

<h2><a href="{{ '/darkshadows/part-ii/' | prepend: site.url }}">PART II: The Revenge of Burke Devlin</a></h2>

<hr>

</body>
</html>





