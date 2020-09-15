---
layout: post
title: 【git】将项目同时提交到多个git远程仓库
date:   2020-09-11
categories: Git-Github
tags: [git]
author: Ganace
comment: false
---

关于将项目同时提交到多个git远程仓库，同时维护两个远程git仓库代码。

最近因为github pages服务在国内挂掉了，博客项目不得不添加了一个国内访问的仓库，我添加的是gitee，烦恼与同时维护两个仓库实在是麻烦，经过查询还有尝试，总结了以下可以用一行命令就把博客项目同时到提交多个git仓库的方法。


## 方法一

---

####  1.打开项目git配置文件

打开`/.git/config`文件，在[remote "origin"]项中添加多个需要同时提交的git仓库url。

例：
{% highlight ruby %}

[remote "origin"]
	url = https://github.com/Ganace/Ganace.github.io.git
	url = https://gitee.com/ganace/Ganace.git
	fetch = +refs/heads/*:refs/remotes/origin/*
{% endhighlight %}

####  2.提交

使用`git push -f` 统一提交到所有仓库，并且强制统一版本。

---

## 方法二

---

####  1.使用如下命令添加远程仓库

{% highlight ruby %}

git remote set-url --add oginin https://gitee.com/ganace/Ganace.git
{% endhighlight %}

####  2.查看远程仓库情况

{% highlight ruby %}

git remote -v
{% endhighlight %}

可以看到gitee的仓库地址已经添加进去了

{% highlight ruby %}

origin  https://github.com/Ganace/Ganace.github.io.git (fetch)
origin  https://github.com/Ganace/Ganace.github.io.git (push)
origin  https://gitee.com/ganace/Ganace.git (push)
{% endhighlight %}

---
