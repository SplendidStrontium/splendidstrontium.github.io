---
layout: femputermanchine
title: "WEASLIE"
permalink: /femputermanchine/books/weaslie/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/bronald-conf.jpg"></td>
</tr>
</table>
<p>BRONALD WEASLIE is a magic-user of mediocre-at-best skills. He never attended a magical school and laments the lonely childhood he had as his mother's only child. His great-uncle was a friend of Vladislaus Straud, but the younger resists the association, hoping to make his own way in the world.</p>
<p>He lives in Saint Louie and has offered his home and hospitality to Friday Perkins. He hopes to progress as a wizard with the talented woman's tutulage.</p>
<p>His daytime job involves the stewardship of a small crew of quasi-lawful contractors who ask no questions. This attracted the attention of Doctor Lenard McCoy, who provided a reccommendation for him to connect with the NSR.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-weaslie" %}

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





