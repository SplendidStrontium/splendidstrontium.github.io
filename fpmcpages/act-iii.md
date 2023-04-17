---
layout: femputermanchine
title: "ACT III: Long Division"
permalink: /femputermanchine/act-iii/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>Act III begins with the breakup of Mandarc Soo and Friday Perkins, ending any hope Vladislaus Straud had at an in-home truce between the children of two adjacent worlds. Myrtle Marscapone's dear friend Minerva Charm dies, leaving the home vulnerable to invasion by foreign interests.</p>

</div>

<hr>

<h2><a href="{{ '/femputermanchine/' | prepend: site.url }}">ACT 0: Prologue</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-i/' | prepend: site.url }}">ACT I: Retribution</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-ii/' | prepend: site.url }}">ACT II: Gathering Storm</a></h2>

<hr>

<h2>ACT III: Long Division</h2>

<ul>
	{% for post in site.posts reversed %}
        {% if post.url %}
			{% if post.category == "femputermanchine" %}
				{% if post.tags contains "act-iii" %}

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
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/act-iv/' | prepend: site.url }}">ACT IV: Felicity's End</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-v/' | prepend: site.url }}">ACT V: Distillation</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-vi/' | prepend: site.url }}">ACT VI: Purification</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-vii/' | prepend: site.url }}">ACT VII: Transfiguration</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-viii/' | prepend: site.url }}">ACT VIII: Thaumaturgy</a></h2>

<hr>


</body>
</html>





