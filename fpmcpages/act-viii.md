---
layout: femputermanchine
title: "ACT VIII: Thaumaturgy"
permalink: /femputermanchine/act-viii/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>Act VIII is the current act of FPMC.</p>
<p>If you're interested in the adventures of a particular character, check out <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a> as well as <a href="{{ '/fpmcnotes/' | prepend: site.url }}">notes</a> and <a href="{{ '/hexfiles/' | prepend: site.url }}">errata</a>.</p>
<p>For background information (spoilers) on the setting and jargon, check out the <a href="https://github.com/SplendidStrontium/splendidstrontium.github.io/wiki">wiki</a> or for general discussion, check out our <a href="https://discord.gg/A5PyBpFvE8">Discord</a>. You may also want to try talking to our <a href="{{ '/femputermanchine/chatbot/' | prepend: site.url }}">Chatbot</a>.</p>
</div>

<hr>

<h2><a href="{{ '/femputermanchine/' | prepend: site.url }}">ACT 0: Prologue</a></h2>

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

<h2>ACT VIII: Thaumaturgy</h2>

<ul>
	{% for post in site.posts reversed %}
        {% if post.url %}
			{% if post.category == "femputermanchine" %}
				{% if post.tags contains "act-viii" %}

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




</body>
</html>




