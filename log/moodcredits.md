---
layout: default
title: mood icon credits
permalink: /log/moodcredits/
---

All mood icons are cropped and modified from public domain works.
<hr>
<br>

<ul class="mood-credits">
{% for c in site.data.mood_credits %}
  <li>
    <img class="mood-icon" src="/assets/moods/{{ c.icon }}" alt="">
    {{ c.artist }}, <em>{{ c.title }}</em> ({{ c.year }});
    <a href="{{ c.source }}">public domain via Wikimedia Commons</a>; modified
  </li>
{% endfor %}
</ul>