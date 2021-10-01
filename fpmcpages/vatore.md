---
layout: femputermanchine
title: "VATORE"
permalink: /femputermanchine/books/vatore/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/lilith-fine.jpg"></td>
</tr>
</table>
<p>LILITH is the eldest sister of the esteemed VATORE family. She has left her family home to take up residence in Brooklyn with the strange but kind vampire Quarq, a friend of Vladislaus Straud. Under the wing of the elder vampire, she hopes to learn how to shed her vegetarian inheritance. She enjoys painting and working out.</p>
<br/>
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/caleb.jpg"></td>
</tr>
</table>
<p>CALEB has become absorbed in the lore of the Moon Priestess, Rini. Some have observed that, in this way, he is much like his father. He is a dreamer; highly intelligent despite a lack of ambition. He is trying to produce a fruit quality enough to sustain his lifestyle.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-vatore" %}

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





