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
      <li>
        <a href="{{ page.url | relative_url }}">
          {{ page.title }}
        </a>
      </li>
    {% endif %}
  {% endfor %}
  {% for file in site.static_files %}
    {% if file.path contains 'articles/' %}
      {% if file.extname == '.pdf' %}
        <li>
          <a href="{{ file.path | relative_url }}" target="_blank">
            {{ file.name }} (PDF)
          </a>
        </li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

