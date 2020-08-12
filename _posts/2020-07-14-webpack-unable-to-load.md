---
layout: post
title: 【webpack】关于github项目删除所有提交历史记录(commit)的方法
date:   2020-07-14
categories: Webpack
tags: [vue,webpack]
author: Ganace
comment: false
---

webpack : 无法加载文件 D:\nodejs\node_
global\webpack.ps1，因为在此系统上禁止
运行脚本。


## 代码

---

####  1.以管理员身份运行vs code

####  2.执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
{% highlight ruby %}

get-ExecutionPolicy
{% endhighlight %}

####  3.执行：set-ExecutionPolicy RemoteSigned
{% highlight ruby %}

set-ExecutionPolicy RemoteSigned
{% endhighlight %}

####  4.这时再执行get-ExecutionPolicy，就显示RemoteSigned
{% highlight ruby %}

get-ExecutionPolicy
{% endhighlight %}

---

