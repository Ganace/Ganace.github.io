---
layout: post
title: 【Github】关于github项目删除所有提交历史记录(commit)的方法
date:   2020-04-14
categories: Git/Github
tags: [github,git,commit]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于github项目删除所有提交历史记录(commit)的方法的文章。


## 代码

---

####  1.创建新分支
{% highlight ruby %}

git checkout --orphan latest_branch
{% endhighlight %}

####  2.添加所有文件
{% highlight ruby %}

git add -A
{% endhighlight %}

####  3.提交更改
{% highlight ruby %}

git commit -m "commit message"
{% endhighlight %}

####  4.删除原有的master分支
{% highlight ruby %}

git branch -D master
{% endhighlight %}

####  5.将当前分支重命名为master
{% highlight ruby %}

git branch -m master
{% endhighlight %}

####  6.强制更新项目远程仓库
{% highlight ruby %}

git push -f origin master
{% endhighlight %}

---

