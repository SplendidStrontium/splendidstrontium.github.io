---
layout: darkshadows
title: "PART II: The Revenge of Burke Devlin"
permalink: /darkshadows/part-ii/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="ds-intro">
<p>After arriving on the same train as Victoria Winters, the mysterious man Burke Devlin returns to Collinsport with the intent to acquire Collinwood and its properties by any means necessary.</p>
</div>

<hr>

<h2><a href="{{ '/darkshadows/' | prepend: site.url }}">PART I: Victoria's Arrival</a></h2>

<hr>

<h2>PART II: The Revenge of Burke Devlin</h2>

<ul>
	{% for post in site.posts reversed %}
        {% if post.url %}
			{% if post.category == "darkshadows" %}
				{% if post.tags contains "pt-ii" %}

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



<hr>



</body>
</html>





