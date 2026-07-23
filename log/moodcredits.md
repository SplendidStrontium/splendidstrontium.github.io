---
layout: default
title: mood icon credits
permalink: /log/moodcredits/
---

All log icons are cropped and modified from public domain works.
<hr>
<br>

<ul class="log-credits">
{% for c in site.data.mood_credits %}
  <li>
    <img class="log-credit-icon" src="/assets/moods/{{ c.icon }}" alt="">
    <span class="log-credit-text">
      {{ c.artist }}, <em>{{ c.title }}</em> ({{ c.year }});
      <a href="{{ c.source }}">public domain</a>; modified
    </span>
  </li>
{% endfor %}
</ul>