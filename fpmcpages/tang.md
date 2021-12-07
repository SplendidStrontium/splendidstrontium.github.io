---
layout: femputermanchine
title: "TANG"
permalink: /femputermanchine/tang/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/vanessa-conf.jpg"></td>
</tr>
</table>
<p>VANESSA was born MEIFENG TANG, to the witch PEIYUN TANG, the only daughter of the ancient magical family. PEIYUN brought her family to Amerrka about a decade prior, and her young daughter has never fully forgiven her for abandoning the relations they had in Zhongguo. VANESSA is a young acolyte in McCOY's coven eager to rise in the ranks. Genius, Vegetarian, Kleptomaniac. Degree in Villany (with honors).</p>
<br/>
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/zhangwei-playfultb.jpg"></td>
</tr>
</table>
<p>ZHANGWEI is the older of the two TANG siblings. He maintains a fierce loyalty to his mother's legacy and will stop at nothing to preserve what he can of the world unraveling around him. He expressed Talent early on in his life and believes his Ability should be used to bring joy to the world around him. Music Lover, Dance Machine, Goofball. Culinary Institute.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-tang" %}

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





