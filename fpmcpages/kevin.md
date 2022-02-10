---
layout: femputermanchine
title: "KEVIN"
permalink: /femputermanchine/kevin/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/kevin3.jpg"></td>
</tr>
</table>
<p>KEVIN is the only son of the doomed union of the magic-user Myrtle and the vampire Vincent Marscapone. Sickly from birth, he was not permitted to leave his bedroom and spent his childhood listening through the walls to his mother teaching young mages how to navigate the magical world.</p>
<p>With the help of Vladislaus Straud, he was able to rid himself of the curse his father had inadvertently bestowed upon him. No longer a vampire but still gifted with a supernatural pedigree, he has been treated with suspicion by other magic-users who would have preferred to have seen the end of his family tree.</p>
<p>In his mother's absence, he has thrown his loyalty behind Straud and his followers and aims to prevent foreigners from taking over the Earth and using it for their own ends.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-kevin" %}

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





