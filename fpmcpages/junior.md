---
layout: femputermanchine
title: "JUNIOR"
permalink: /femputermanchine/books/jr/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/trente-gratstb.jpg"></td>
</tr>
</table>
<p>TRENTE GAGARIN is known by many names but none of them strike directly at her heart so much as "Junior", a name that hearkens back to her deceased sister.</p>
<p>The pink-haired woman was born the thirti-first of her mother's daughters and reluctantly descended to Earth to help her mother, the mysterious NSR Chairperson, propel forward her goals of world domination.</p>
<p>She was instrumental in the Occupancy, a move that took over the Charm Mansion following the untimely death of Minerva Charm. What the NSR hopes to do with a subdued planet remains a future many hope will never be realized.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-jr" %}

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





