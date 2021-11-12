---
layout: femputermanchine
title: "STRAUD"
permalink: /femputermanchine/straud/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/straud-portrait.jpg"></td>
</tr>
</table>
<p>COUNT VLADISLAUS STRAUD IV is far older than he looks. His origins lie in a mysterious place he's only made passing reference to as 'Firsthome'.</p>
<p>He became acquainted with the English in the late Renaissance; rumors persist that he made friends with the Bard and the Queen during this time of high adventure. He soon after made his way to the United States. His home in Jamaica Estates was then amid considerable forest instead of the suburban jungle that today surrounds his home. His home stands as a base of operations for he and his associates to steel themselves against the threat of alien invasion.</p>
<p>Straud has taken a particular interest in Mandarc, recently assisting him to reacquire his dognapped companion Dexx. He also appears proficient in magic from apparently opposed spheres, having invoked divinations as well as memory charms and vampiric glamour.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-straud" %}

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





