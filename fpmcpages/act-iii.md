---
layout: femputermanchine
title: "FP & MC: ACT III"
permalink: /femputermanchine/act-iii/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>Act III of Femputer&Manchine sees the after-effects of the death of Myrtle Marscapone. Avaelle Easton is sent back to her home and cements her loyalty to the Doctor Trelaine. </p>
<p>Later on, Makoa sees a rise in his ambitious qualities after returning to the island paradise of Sulani. Kevin, Cedric, and Roxanne storm the Goth Manor only to escape with a prisoner and an injury that they didn't bear before. As the season winds to a close, Larry reasserts his determination to find Hermione and Cedric is busied with a new family of vampires and two new kittens. Finally, Straud encourages the young boy Emmitt Skinner to leave the home he's been imagining beneath the thumb of Trente Gagarin.</p>
<p>If you're interested in the adventures of a particular character, check out <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a> as well as <a href="{{ '/fpmcnotes/' | prepend: site.url }}">notes</a> and <a href="{{ '/hexfiles/' | prepend: site.url }}">errata</a>.</p>
<p>For background information (spoilers) on the setting and jargon, check out the <a href="https://github.com/SplendidStrontium/splendidstrontium.github.io/wiki">wiki</a> or for general discussion, check out our <a href="https://discord.gg/A5PyBpFvE8">Discord</a>.</p>
</div>

<hr>

<h2><a href="{{ '/femputermanchine/' | prepend: site.url }}">ACT 0</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-i/' | prepend: site.url }}">ACT I</a></h2>

<hr>

<h2><a href="{{ '/femputermanchine/act-ii/' | prepend: site.url }}">ACT II</a></h2>

<hr>

<h2>ACT III</h2>

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




</body>
</html>





