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
      <li style="margin-bottom: 15px;">
        <a href="{{ page.url | relative_url }}" style="text-decoration: none; color: inherit;">
          {% if parts.size > 1 %}
            <div style="font-size: 1.1em; font-weight: bold; color: #2a7ae2;">{{ page.title }}</div>
            <div style="color: #666; font-size: 0.9em;">{{ parts[0] }} {% if page.author %}- {{ page.author }}{% endif %}</div>
          {% else %}
            <div style="font-size: 1.1em; font-weight: bold; color: #2a7ae2;">{{ page.title }}</div>
            {% if page.author %}<div style="color: #666; font-size: 0.9em;">- {{ page.author }}</div>{% endif %}
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
        <li style="margin-bottom: 15px;">
          <a href="{{ file.path | relative_url }}" target="_blank" style="text-decoration: none; color: inherit;">
            {% if parts.size > 1 %}
              <div style="font-size: 1.1em; font-weight: bold; color: #2a7ae2;">{{ parts[1] | remove: file.extname }} (PDF)</div>
              <div style="color: #666; font-size: 0.9em;">{{ parts[0] }} - 王昀</div>
            {% else %}
              <div style="font-size: 1.1em; font-weight: bold; color: #2a7ae2;">{{ file.name }} (PDF)</div>
              <div style="color: #666; font-size: 0.9em;">- 王昀</div>
            {% endif %}
          </a>
        </li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

