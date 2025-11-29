---
layout: default
title: Home
---

<div class="banner" style="text-align: center;">
  <img src="{{ '/assets/images/banner.jpg' | relative_url }}" alt="Site Banner" style="width: 66.6%; height: auto; border-radius: 5px;">
</div>

## 文章

<ul>
  {% for page in site.pages %}
    {% if page.path contains 'articles/' and page.path contains '.md' %}
      {% assign filename = page.path | split: '/' | last %}
      {% assign parts = filename | split: '--' %}
      <li>
        <a href="{{ page.url | relative_url }}">
          {% if parts.size > 1 %}
            {{ parts[0] }} {{ page.title }}
          {% else %}
            {{ page.title }}
          {% endif %}
          {% if page.author %}
            - {{ page.author }}
          {% endif %}
        </a>
      </li>
    {% endif %}
  {% endfor %}
  {% for file in site.static_files %}
    {% if file.path contains 'articles/' %}
      {% if file.extname == '.pdf' %}
        {% assign filename = file.name %}
        {% assign parts = filename | split: '--' %}
        <li>
          <a href="{{ file.path | relative_url }}" target="_blank">
            {% if parts.size > 1 %}
              {{ parts[0] }} {{ parts[1] | remove: file.extname }} (PDF)
            {% else %}
              {{ file.name }} (PDF)
            {% endif %}
            - 王昀
          </a>
        </li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

