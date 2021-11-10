---
layout: femputermanchine
title: "PERKINS"
permalink: /femputermanchine/perkins/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/fridaywinter.jpg"></td>
</tr>
</table>
<p>FRIDAY PERKINS is a one of the last students of the Magicademy before the headmistress's retirement. She, like so many before her, came to the school as an orphan, abandoned by her grandmother for her apparent ambient miasma of ill-fortune.</p>
<p>A talented student of magic, FRIDAY none-the-less developed little closeness to the Matron, always keeping everyone at arm's length. Through a unintentional meeting, she became acquainted with Vladislaus Straud and his vampiric allies and became envious of their powers.</p>
<p>She developed a relationship with Mandarc Soo and helped him cure a low-ranking employee of Lenard McCoy. She continued to press Mandarc to convert her to vampirism, but when he refused to assist, she defected and threw in her lot with the magic-user Bronald Weaslie.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-perkins" %}

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





