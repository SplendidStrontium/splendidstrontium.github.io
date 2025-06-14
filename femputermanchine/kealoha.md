---
layout: femputermanchine
title: "KEALOHA"
permalink: /femputermanchine/kealoha/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/kealoha-makoa.jpg"></td>
</tr>
</table>
<p>MAKOA KEALOHA is a recent convert sired by the Vampire VLADISLAUS STRAUD. He has a young family who he cares deeply for, especially his daughter NANI. </p>
<p>He had a recent stint of involvement with STRAUD in NYC when he attempted to take over the plasma fruit business but was convinced by CEDRIC to return home and try to patch things up with his family. His family still doesn't know that he's a vampire, a source of difficulty for the young man.</p>
<p>During his absence, his wife LILLIANA brought in a young man DUANE to help watch after the young girl, inciting in MAKOA feelings of jealousy and resentment already present from his relationship with STRAUD.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-kealoha" %}

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





