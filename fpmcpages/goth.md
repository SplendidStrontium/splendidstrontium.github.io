---
layout: femputermanchine
title: "GOTH"
permalink: /femputermanchine/books/goth/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/cassandragoth.jpg"></td>
</tr>
</table>
<p>CASSANDRA GOTH thought of herself as an ordinary twenty-something until recent events tore everything she thought she knew to shreds. Her mother and father have both recently passed, leaving her a considerable inheritance and a lot of questions unanswered.</p>
<p>Fairly good with a gun, she's finding it little protection against the world of magic that has pushed itself violently into her reality. In a whirlwind, she's uncovered that her mother was capable of using magic but kept it secret from her children her entire life.</p>
<p>She lives in her grandmother's estate flanked by two magic-users offering her protection against mysterious forces threatening to destroy her family.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-goth" %}

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





