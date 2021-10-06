---
layout: femputermanchine
title: "FP & MC (by book)"
permalink: /femputermanchine/books/
---

<html>
<head>
<meta charset="utf-8">

</head>

<body>

<div id="fpmc-intro">
<p>The following is a list of the two most recent FPMC pieces organized alphabetically by character. Navigate to each character's page to find their entire history.</p>
<p>If you're interested in the reading the book chronologically, check out <a href="{{ '/femputermanchine/' | prepend: site.url }}">FPMC</a>.</p>
</div>

<hr>

<h2><a href="{{ '/femputermanchine/books/avael/' | prepend: site.url }}">AVAEL</a></h2>

<p>AVAEL is a bionic vampress who assists CEDRIC with his many responsibilities.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-avael" %}
				{% assign counter = counter | plus: 1 %}

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
				
				{% if counter == maxPost %}
					{% break %}
				{% endif %}


			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/cedric/' | prepend: site.url }}">CEDRIC</a></h2>

<p>CEDRIC is a daywalking vampire who has sworn his afterlife to destroy evil and greed.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-cedric" %}
				{% assign counter = counter | plus: 1 %}

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
			
				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/goth/' | prepend: site.url }}">GOTH</a></h2>

<p>CASSANDRA GOTH is a child of old-money trying to find her way among strange and fantastical creatures.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-goth" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/jr/' | prepend: site.url }}">JUNIOR</a></h2>

<p>JUNIOR is a frustrated younger sister vying for dominance in an uncooperative world.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-jr" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/kevin/' | prepend: site.url }}">KEVIN</a></h2>

<p>KEVIN MARSCAPONE is a magic-user seeking to overcome childhood illness and maintain a fair and just society.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-kevin" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/mandarc/' | prepend: site.url }}">MANDARC</a></h2>

<p>MANDARC SOO is a young vampire learning the value of a trustworthy first officer.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-mandarc" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/mccoy/' | prepend: site.url }}">McCOY</a></h2>

<p>LENARD McCOY is a foreign doctor who takes his job very seriously.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-mccoy" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/myrtle/' | prepend: site.url }}">MYRTLE</a></h2>

<p>MYRTLE MARSCAPONE is the Magicademy's ex-headmistress atoning for sins against Elysion.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-myrtle" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/perkins/' | prepend: site.url }}">PERKINS</a></h2>

<p>FRIDAY PERKINS is a capable magic-user aiming to eliminate the competition.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-perkins" %}
				{% assign counter = counter | plus: 1 %}

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
				
				{% if counter == maxPost %}
					{% break %}
				{% endif %}


			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/roxxie/' | prepend: site.url }}">ROXXIE</a></h2>

<p>ROXANNE SCHWARTZ is one of the most recent of STRAUD's conversions.</p>

<ul>
	{% assign maxPost = 1 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-roxxie" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/straud/' | prepend: site.url }}">STRAUD</a></h2>

<p>VLADISLAUS STRAUD is surrogate father to many a young vampire.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-straud" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/tzu/' | prepend: site.url }}">TZU</a></h2>

<p>TZU PRANO is a cheerful magic-user pursuing life as a doctor.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-tzu" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/vatore/' | prepend: site.url }}">VATORE</a></h2>

<p>LILITH & CALEB VATORE are two vampires navigating a vegetarian ancestry.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-vatore" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
				{% endif %}

			{% else %}	
			{% endif %}
		{% else %}
        {% endif %}
    {% endfor %}
</ul>

<hr>

<h2><a href="{{ '/femputermanchine/books/vatore/' | prepend: site.url }}">WEASLIE</a></h2>

<p>BRONALD WEASLIE is a middling mage hoping to discover a grander destiny.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-weaslie" %}
				{% assign counter = counter | plus: 1 %}

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

				{% if counter == maxPost %}
					{% break %}
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





