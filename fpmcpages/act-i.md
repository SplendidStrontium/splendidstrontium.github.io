---
layout: femputermanchine
title: "FP & MC ACT I"
permalink: /femputermanchine/act-i/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>Act I was marked by the breakup of Friday Perkins and Mandarc Soo. Angered at his refusal to convert her to vampirism, Friday joined forces with the young Bronald Weaslie and left NYC for his home in Saint Louie.</p>
<p>Lilith Vatore sought the leadership of Quarq and left her childhood home. Mortimer Goth committed suicide in grief over the death of his wife. Kevin Marscapone continued his magical studies, progressing further from the weights of his former curse.</p>
<p>Lenard McCoy continued to develop his forces with the NSR's help, sending the girl Wendy to taunt and distract his former pupil, Mandarc. Lucia Ekstrom fled her home country to seek shelter in the home of Cassandra Goth. Myrtle struggled with depression.</p>
<p>The colder months saw a quiet in activity; Kevin continued to work on his enchanted guns and a number of individuals succumbed to passions they'd merely been sitting upon. McCoy began his courtship of the Arachnid and the Ruby while Trente focused on Caleb Vatore.</p>
<p>As the summer began, friendships were strong and loyalty was the name of the game. The Journey to the West began, wherein Mandarc realized the strength of his friends as they accompanied him to regain his lost companion. Vladislaus Straud administered a memory charm to Perkins and Weaslie, leaving them without the memory of the battle, and indeed, of all they had learned about the Vampire.</p>
<p>If you're interested in the adventures of a particular character, check out <a href="{{ '/femputermanchine/books/' | prepend: site.url }}">FPMC (by book)</a> as well as <a href="{{ '/fpmcnotes/' | prepend: site.url }}">notes</a> and <a href="{{ '/hexfiles/' | prepend: site.url }}">errata</a>.</p>
</div>

<hr>

<h2> <a href="{{ '/femputermanchine/' | prepend: site.url }}">ACT II (current)</a> </h2>

<hr>

<h2>ACT I</h2>

<ul>
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.category == "femputermanchine" %}
				{% if post.tags contains "act-i" %}

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

<h2><a href="{{ '/femputermanchine/act-0/' | prepend: site.url }}">ACT 0</a></h2>

<hr>




</body>
</html>





