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

<h2><a href="{{ '/femputermanchine/avael/' | prepend: site.url }}">AVAEL</a></h2>

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

<h2><a href="{{ '/femputermanchine/behr/' | prepend: site.url }}">BEHR</a></h2>

<p>CANDY and YUKI are two sisters trying to grapple a changing reality.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-behr" %}
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

<h2><a href="{{ '/femputermanchine/cedric/' | prepend: site.url }}">CEDRIC</a></h2>

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

<h2><a href="{{ '/femputermanchine/goth/' | prepend: site.url }}">GOTH</a></h2>

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

<h2><a href="{{ '/femputermanchine/jr/' | prepend: site.url }}">JUNIOR</a></h2>

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

<h2><a href="{{ '/femputermanchine/kealoha/' | prepend: site.url }}">KEALOHA</a></h2>

<p>MAKOA KEALOHA is a young man trying to cut through resentment of forced isolation and claim a family of his own.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-kealoha" %}
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


<h2><a href="{{ '/femputermanchine/kevin/' | prepend: site.url }}">KEVIN</a></h2>

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

<h2><a href="{{ '/femputermanchine/mandarc/' | prepend: site.url }}">MANDARC</a></h2>

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

<h2><a href="{{ '/femputermanchine/myrtle/' | prepend: site.url }}">MYRTLE</a></h2>

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

<h2><a href="{{ '/femputermanchine/perkins/' | prepend: site.url }}">PERKINS</a></h2>

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

<h2><a href="{{ '/femputermanchine/pidge/' | prepend: site.url }}">PIDGE</a></h2>

<p>PIDGE is a record featuring Davian Hughes, Chiasa Chinoko, and Ben.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-pidge" %}
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

<h2><a href="{{ '/femputermanchine/roxxie/' | prepend: site.url }}">ROXXIE</a></h2>

<p>ROXANNE SCHWARTZ is one of the most recent of STRAUD's conversions.</p>

<ul>
	{% assign maxPost = 2 %}
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

<h2><a href="{{ '/femputermanchine/shelby/' | prepend: site.url }}">SHELBY</a></h2>

<p>SHELBY is a newcomer who's sworn her loyalty to the Camarilla.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-shelby" %}
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

<h2><a href="{{ '/femputermanchine/straud/' | prepend: site.url }}">STRAUD</a></h2>

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

<h2><a href="{{ '/femputermanchine/tang/' | prepend: site.url }}">TANG</a></h2>

<p>VANESSA & ZHANGWEI TANG stand on opposite sides of the conflict following the death of their mother.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-tang" %}
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

<h2><a href="{{ '/femputermanchine/trelaine/' | prepend: site.url }}">TRELAINE</a></h2>

<p>LENARD TRELAINE is a foreign doctor who takes his job very seriously.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-trelaine" %}
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

<h2><a href="{{ '/femputermanchine/tzu/' | prepend: site.url }}">TZU</a></h2>

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

<h2><a href="{{ '/femputermanchine/van-helsing/' | prepend: site.url }}">VAN HELSING</a></h2>

<p>ABRAHAM VAN HELSING is a magic-user determined to rid the world of monsters.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-vanhelsing" %}
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

<h2><a href="{{ '/femputermanchine/vatore/' | prepend: site.url }}">VATORE</a></h2>

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

<h2><a href="{{ '/femputermanchine/vincent/' | prepend: site.url }}">VINCENT</a></h2>

<p>VINCENT MARSCAPONE is an aged and well-traveled Vampire claimed by some to be the Prince of Elysion.</p>

<ul>
	{% assign maxPost = 2 %}
	{% assign counter = 0 %}
	{% for post in site.posts %}
        {% if post.url %}
			{% if post.tags contains "fpmcmain-vincent" %}
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

<h2><a href="{{ '/femputermanchine/weaslie/' | prepend: site.url }}">WEASLIE</a></h2>

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





