---
layout: femputermanchine
title: "VINCENT"
permalink: /femputermanchine/vincent/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<table class="inline-imgtbl-l">
<tr>
<td><img class="inline-img" src="{{ site.url }}/assets/tb/vincent.jpg"></td>
</tr>
</table>
<p>VINCENT MARSCAPONE is an aged and well-traveled Vampire.</p>
<p>In the early 1920s, he married the magic-user Myrtle Soo and gave her his name. The pair opened up the Marscapone School of Magic for any and all who wanted to study magic but had no other tutelage.</p>
<p>Vincent died early in the twenty-first century in what would come to be known as the Y2K crisis. Somehow he was able to seal away a portion of his soul within his son, Kevin, and he now lives on as a voice within his mind.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>. The entire collection of books may be found at <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>.</p>
</div>

<hr>
<br/>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-vincent" %}

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





