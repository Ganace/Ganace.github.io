---
layout: post
title: 【webpack】无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本
date:   2020-07-14
categories: Webpack
tags: [vue,webpack]
author: Ganace
comment: false
---

webpack : 无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本。


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

