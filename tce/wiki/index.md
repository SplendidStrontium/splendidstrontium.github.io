---
layout: default
title: "TCE Wiki"
permalink: /tce/wiki/
---

<div class="wiki-index">

<h1>TCE: Wiki</h1>

<p>A companion guide to people, places, and things across the series. Entries contain spoilers behind collapsible sections — expand at your own risk.</p>

<hr>

<h2>By Book</h2>

{% comment %}
  Collect all unique book values from wiki entries, then display them.
  We build a list manually since Liquid doesn't have a native unique-by-property filter
  that works across all Jekyll versions.
{% endcomment %}

{% assign books = "" | split: "" %}
{% for entry in site.wiki %}
  {% unless books contains entry.book %}
    {% assign books = books | push: entry.book %}
  {% endunless %}
{% endfor %}

{% assign books = books | sort %}

{% for book in books %}
  {% assign book_entries = site.wiki | where: "book", book %}
  {% assign sample = book_entries | first %}
  <div class="wiki-book-group">
    <h3><a href="/tce/wiki/{{ book }}/">{{ sample.book_title }}</a></h3>
    <p class="wiki-book-count">{{ book_entries.size }} {% if book_entries.size == 1 %}entry{% else %}entries{% endif %}</p>
  </div>
{% endfor %}

</div>
