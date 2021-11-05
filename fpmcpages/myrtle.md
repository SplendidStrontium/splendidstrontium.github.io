---
layout: femputermanchine
title: "MYRTLE"
permalink: /femputermanchine/books/myrtle/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/myrtle-painted.jpg"></td>
</tr>
</table>
<p>MYRTLE is a veteran of the Great War who went on to establish a school of magic in New York City that focused on the care and education of orphans. Though not technically an orphan herself, her mother died when she was very young, leaving her to explore the ancient mysteries of magic largely on her own.</p>
<p>She flirted quite literally with extraplanar powers, marrying Vincent Marscapone, a man she later discovered to be capable of walking the plane of Elysion.</p>
<p>After her death at the hands of her possessed friend, Agnes Sepal, MYRTLE was scolded by her ex-husband for her over-enthusiastic protection, a psuedo-imprisonment which led to his inability to govern his home realm. She now wanders the Prime Material Plane as a ghost.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-myrtle" %}

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





