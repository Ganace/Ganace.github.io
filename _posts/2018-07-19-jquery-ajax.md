---
layout: post
title: 【AJAX】关于AJAX使用的小笔记
date:   2018-07-19
categories: HTML5/CSS/JS/JQ
tags: [jQuery,ajax]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于AJAX使用小笔记的文章。



这个需要用jQuery的相关对象来处理AJAX简化代码：

## GET请求

---

####  发送一个GET请求，并返回一个JSON格式的数据：

{% highlight ruby %}

var jqajax = $.ajax('/data.html', {
    dataType: 'json'
});
{% endhighlight %}

####  jQuery提供了get()方法：

{% highlight ruby %}

var jqajax = $.get('/data.html', {
    name: 'Ganace',
    num: 1
});
{% endhighlight %}
---

## POST请求

---

####  jQuery提供了post()方法：

{% highlight ruby %}

var jqajax = $.post('/data.html', {
    name: 'Ganace',
    num: 1
},function(data){
	alert(data);
});
{% endhighlight %}

---

## getJSON请求

---

####  jQuery提供了getJSON()方法：

{% highlight ruby %}

var jqajax = $.getJSON('/data.html', {
    name: 'Ganace',
    num: 1
},function(data){
	// 此处data已经被解析为JSON对象
});

var jqajax = $.getJSON('/data.html', {
    name: 'Ganace',
    num: 1
}).done(function (data) {
    // 此处data已经被解析为JSON对象
});;
{% endhighlight %}

---
