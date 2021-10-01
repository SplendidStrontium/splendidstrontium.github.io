---
layout: femputermanchine
title: "CEDRIC"
permalink: /femputermanchine/books/cedric/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/cedric1.jpg"></td>
</tr>
</table>
<p>CEDRIC is a vampire who, unlike many of his brethern, is able to walk unhindered by the wrath of sunlight. As a former magic-user, his powerset tends toward the ethereal; his powers include manipulating others through charisma and persuasion. He is well-spoken and Mortals stand in awe of his undead presence.</p>
<p>He is a native of Uhaigha and came to the East to learn magic at the Magicademy in the last years of the millenium. His life was cut short when he was struck by a car driven by a fellow student of magic, Hermione. He rose as a vampire when Hermione's attempt at resurrection went terribly wrong.</p>
<p>When not embracing his title of DAYWALKER, CEDRIC walks the dream: he became a devout student of Vincent Marscapone when he was no longer able to continue his life using magic. He enjoys reading and working out.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-cedric" %}

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
    {% endfor %}
</ul>

<hr>


</body>
</html>





