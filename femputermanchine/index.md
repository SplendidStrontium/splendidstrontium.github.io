---
layout: femputermanchine
title: "Femputer Manchine"
permalink: /femputermanchine/ 
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>For ten thousand years the people of planet Earth have been awakening to create civilization and colonize their world. Underneath the mundane runs a secret: that some people are capable of curving reality to their own desires by more than just their force of personality. </p>
<p>In the modern age, people are still hiding their Talent; the memory of witch hunts and mass exterminations fresh in the minds of the hunted. Those who have awakened as mages are scattered across the globe and largely keep to the safety of their own families.</p>
<p>A mysterious Vampire VLADISLAUS STRAUD has sworn himself to his duty to protect the planet in the wake of the Revolution. </p>
<p>If you're interested in the adventures of a particular character, check out <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a>. If you prefer to listen to the recent chapters read aloud, check out our <a href="https://www.youtube.com/channel/UC2GGSbxdmmy-X7c5wyzE38w">YouTube Channel</a>.</p>
<p>Check out our <a href="https://discord.gg/A5PyBpFvE8">Discord</a>.</p>
</div>

<hr>

<h2>ACT 0: Prologue </h2>

<ul>
	{% for post in site.posts reversed %}
        {% if post.url %}
			{% if post.category == "femputermanchine" %}
				{% if post.tags contains "act-0" %}

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

<br>

<hr>

<h2><a href="{{ '/femputermanchine/act-i/' | prepend: site.url }}">ACT I: Retribution</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-ii/' | prepend: site.url }}">ACT II: Gathering Storm</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-iii/' | prepend: site.url }}">ACT III: Long Division</a></h2>

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





