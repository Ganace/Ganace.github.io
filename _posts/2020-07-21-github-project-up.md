---
layout: post
title: 【github】github，用git把本地项目连接到远程github项目上并提交
date:   2020-07-21
categories: Github
tags: [github,git]
author: Ganace
comment: false
---

github，用git把本地项目连接到远程github项目上并提交


## 代码

---

####  1.git remote add origin 项目github-code地址

{% highlight ruby %}

git remote add origin https://github.com/Ganace/gamall.git
{% endhighlight %}

####  2.提交

将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了
{% highlight ruby %}

git push -u origin master
{% endhighlight %}
即可完成代码上传到github

---

