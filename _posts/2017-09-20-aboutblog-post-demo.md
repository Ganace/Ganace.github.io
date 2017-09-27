---
layout: post
title: 【AboutBlog|文章模板】记录如何写md格式_post文章
date:   2017-09-20
categories: AboutBlog
tags: [posts, markdown,文章模板]
author: Ganace
update: 2017-09-21
comment: false
---

这里是一篇记录如何写markdown格式文章，放入GitHub Page Blog"posts"文件夹中的文章。


## markdown文件头

---

- `layout: post`
    : 这里不能做修改.
- `title`
    : 这是文章的标题，格式：`title: 关于博客`
- `author`
    : 这是文章的作者，默认是网站的作者，格式：`author: Ganace`.
- `date`
    : 这是文章写作或者发布时间，格式如： `date: 2017-09-20` or `data: 2017-09-20 17:18:35`
- `categories`
    : 这是文章隶属的类目名称，格式如： `categories: Ganace`, `categories: Ganace-post`
    ：如果要把一篇文章放入多个类目，只要把类目之间空格就可以了。
- `tags` (可选)
    : 这是文章的标签，可选，格式如： `tags: [PHP, CURL]`.

---

- `mathjax` (可选)
    : 选择是否启用mathjax，true为启用，否则禁用，格式如： `mathjax: true`
- `update` (可选)
    : 文章的更新时间，可选，格式如 `update: 2017-09-21`
- `comment` (可选)
    : 选择是否启用评论，true为启用，否则禁用，格式如： `comment: true`
- `published` (可选)
    : 选择是否发布，格式如： `published: true`

---


## markdown文件内容

可以使用所有markdown格式的内容
