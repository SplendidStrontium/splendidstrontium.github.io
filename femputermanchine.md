---
layout: femputermanchine
title: "FP & MC"
menu: main
permalink: /femputermanchine/ 
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>FemputerManchine is a webnovel inspired by my adventures in The Sims 4.</p>
<p>For ten thousand years the people of planet Earth have been awakening to create civilization and colonize their world. Underneath the mundane runs a secret: that some people are capable of curving reality to their own desires by more than just their force of personality. </p>
<p>In the modern age, people are still hiding their Talent; the memory of witch hunts and mass exterminations fresh in the minds of the hunted. Those who have awakened as mages are scattered across the globe and largely keep to the safety of their own families.</p>
<p>A mysterious Vampire VLADISLAUS STRAUD has sworn himself to his duty to protect the planet in the wake of the Revolution. </p>
<p>If you're interested in the adventures of a particular character, check out <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a> as well as <a href="{{ '/fpmcnotes/' | prepend: site.url }}">notes</a> and <a href="{{ '/hexfiles/' | prepend: site.url }}">errata</a>.</p>
<p>For background information (spoilers) on the setting and jargon, check out the <a href="https://github.com/SplendidStrontium/splendidstrontium.github.io/wiki">wiki</a> or for general discussion, check out our <a href="https://discord.gg/A5PyBpFvE8">Discord</a>. You may also want to try talking to our <a href="{{ '/femputermanchine/chatbot/' | prepend: site.url }}">Chatbot</a>.</p>
</div>

<hr>

<h2> ACT 0 </h2>

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

<h2><a href="{{ '/femputermanchine/act-i/' | prepend: site.url }}">ACT I</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-ii/' | prepend: site.url }}">ACT II</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-iii/' | prepend: site.url }}">ACT III</a></h2>

<hr>


</body>
</html>





