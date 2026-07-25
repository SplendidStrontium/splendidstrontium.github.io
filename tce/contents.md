---
layout: default
title: "Table of Contents — The Convergent Eigenspace"
permalink: /tce/contents/
---

<div class="tce-toc">
<h1>Table of Contents</h1>

{% for book in site.data.tce.books %}
  {% assign book_docs = site.chapters | where: "book", book.number %}
  {% if book_docs.size > 0 %}
  <section class="toc-book">
    <h2>Book {{ book.number }}: <em>{{ book.title }}</em></h2>

    {% for act in book.acts %}
      {% assign act_chapters = book_docs
         | where: "act", act.number
         | where_exp: "c", "c.deleted_scene != true"
         | sort: "chapter" %}
      {% if act_chapters.size > 0 %}
      <h3 class="toc-act">Act {{ act.number }}: {{ act.title }}</h3>
      <ul class="toc-list">
        {% for c in act_chapters %}
        <li>
          <a href="{{ c.url | relative_url }}">
            {% if c.image %}
            <span class="toc-thumb" style="background-image: url('{{ c.image | relative_url }}');"></span>
            {% else %}
            <span class="toc-thumb toc-thumb--empty"></span>
            {% endif %}
            <span class="toc-label">Chapter {{ c.chapter }}: {{ c.title }}</span>
          </a>
        </li>
        {% endfor %}
      </ul>
      {% endif %}
    {% endfor %}

    {% assign book_ds = book_docs
       | where_exp: "c", "c.deleted_scene == true"
       | sort: "date" %}
    {% if book_ds.size > 0 %}
    <h3 class="toc-act">Deleted Scenes</h3>
    <ul class="toc-list">
      {% for c in book_ds %}
      <li>
        <a href="{{ c.url | relative_url }}">
          {% if c.image %}
          <span class="toc-thumb" style="background-image: url('{{ c.image | relative_url }}');"></span>
          {% else %}
          <span class="toc-thumb toc-thumb--empty"></span>
          {% endif %}
          <span class="toc-label">{{ c.title }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
    {% endif %}
  </section>
  {% endif %}
{% endfor %}
</div>