---
layout: femputermanchine
title: "TZU"
permalink: /femputermanchine/books/tzu/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/tzu-fine.jpg"></td>
</tr>
</table>
<p>TZU PRANO is an orphan from Goryeo, one of the last acquired children of Myrtle Marscapone. If she had any claims to royalty or magical lineage, the records were erased long ago.</p>
<p>As a child, she was a middling student of magic, more interested in enjoying life than burying her nose in books. Somehow her good nature showed through to the old Witch and she became more the woman's child and less merely her student.</p>
<p>TZU has left New York City to pursue the life of a doctor. She has found her calling and her feelings of belonging have improved her facility with magic, which she continues to keep a secret from the Mortals she serves. Through Vladislaus Straud, she met the vampire Sebastian Eriksson and the two look after Alexander Goth following his father's departure.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-tzu" %}

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





