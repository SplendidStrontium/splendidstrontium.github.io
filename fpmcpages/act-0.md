---
layout: femputermanchine
title: "FP & MC ACT 0"
permalink: /femputermanchine/act-0/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>Act 0 of Femputer&Manchine was a strange collection of adventures as I got my feet wet exploring the characters and working over their backstories and motivations. Much of what is enumerated here might be thought of as an alternate timeline, but certainly not all of it. Friends were established and loyalties cemented as the characters began to fall into what would become their eventual destinies.</p>
<p>If you're interested in the adventures of a particular character, check out <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a> as well as <a href="{{ '/fpmcnotes/' | prepend: site.url }}">notes</a> and <a href="{{ '/hexfiles/' | prepend: site.url }}">errata</a>.</p>
</div>

<hr>

<h2><a href="{{ '/femputermanchine/' | prepend: site.url }}">ACT II (current)</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-i/' | prepend: site.url }}">ACT I</a></h2>

<hr>

<h2>ACT 0</h2>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.category == "femputermanchine" %}
				{% if post.tags contains "act-0" %}

				    <li class="fpmc-post">
					<div class="fpmc-link-box"><a class="fpmc-link-txt" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | truncate: 31 }}</a></div>

					<div class="fpmc-desc">
						{{post.description}}
					</div>

			
					<span class="fpmc-date">
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




