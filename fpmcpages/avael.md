---
layout: femputermanchine
title: "AVAEL"
permalink: /femputermanchine/avael/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/avael-tbbored.jpg"></td>
</tr>
</table>
<p>AVAEL is a 'former' vampress who employs an extensive life-support system to maintain her continued consciousness. She has welcomed the changeover and is acclimating to life as part-human, part-server. She currently resides with Cedric and provides him with physical backup; her abilities are constantly being upgraded to extend her capabilities as fighter-bot and network-switch.</p>
<p>Before AVAEL was aligned with Vladislaus Straud and his allies, she was a companion to Doctor Lenard Trelaine. They travelled throughout the United States extensively before she became disenchanted with the Doctor's lack of compassion toward humanity. She defected not once, but twice, and is now dedicated to her job assisting the forces of good protecting her home planet.</p>
<p>In life, AVAEL chafed at being treated as inferior because of her sex. She regarded herself as equal in potential to any other human she encountered. She is happy having transcended a number of binary distinctions and considers herself owing a great deal to her benefactors.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-avael" %}

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

<br>

<hr>


</body>
</html>





