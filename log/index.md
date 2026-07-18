---
layout: default
title: log
permalink: /log/
---

<h1 class="log-page-title">log</h1>

{% assign by_year = site.data.log | group_by_exp: "entry", "entry.date | date: '%Y'" %}
{% for year in by_year %}
<section class="log-year">
  <h2 class="log-year-heading">{{ year.name }}</h2>
  {% include log-entries.html entries=year.items %}
</section>
{% endfor %}

<p class="log-credits-link"><a href="/log/moodcredits/">mood icon credits</a></p>