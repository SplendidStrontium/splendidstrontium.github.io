---
layout: darkshadows
title: "Dark Shadows Episode Reviews"
menu: main
permalink: /darkshadows/ 
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>The best stories are completely original while being utterly derivative. It is therefore with a heavy heart that I announce that I am putting my work FPMC on indefinite hiatus. For four years, I have poured my heart and soul into this work. It has involved numerous twists and turns, some sensical, some not, and a copious collection of words spanning internal reflection, external description, and dialogue. Last night, I even dreamt of Vladislaus Straud using an alternate guise; he wore long hair and red eyes. I would ordinarily work this into Cedric's dream sequences but I have slowly realized that to grow as a writer involves doing something different. As the hero of the Minecraft trilogy of novels <u>The Island</u>, <u>The Mountain</u>, and <u>The Village</u> so succinctly puts it, growth doesn't come from a comfort zone, but from leaving it. There are a great many places I want to take Cedric et al., but I am not ready yet. Nor are they.</p>
<p>Starting today, I aim to review each of the 1225 episodes of the show "Dark Shadows". It will take some time, that goes without saying, but I hope that I will grow as a writer and return to FPMC fully ready to tackle the conclusion of the battle between Vladislaus Straud and the end of the world.</p>
<p>For now, I hope you'll enjoy my foray into the world of Collinsport. There are more than a few things in common between the worlds, namely werewolves, witches, ghosts, and even a vampire or two.</p>
<p>As I write this, I eagerly look forward to learning more about the Collins family and the whole cast of characters that made "Dark Shadows" a success. I hope you will take the ride along with me.</p>
</div>

<hr>

<h2>PART 1: Victoria Winters </h2>

<ul>
	{% for post in site.posts reversed %}
        {% if post.url %}
			{% if post.category == "darkshadows" %}
				{% if post.tags contains "pt-1" %}

				    <li class="ds-post">
					<div class="ds-link-box"><a class="ds-link-txt" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | truncate: 31 }}</a></div>

					<div class="ds-desc">
						{{post.description}}
					</div>

			
					<span class="ds-date">
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


</body>
</html>





