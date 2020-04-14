---
layout: post
title: 【jQuery】关于jQuery插件扩展方法
date:   2018-07-19
categories: HTML5/CSS/JS/JQ
tags: [jQuery]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于jQuery插件扩展方法的文章。



这个需要用jQuery的相关对象来处理AJAX简化代码：

## 重点笔记

---

####  根据设定参数修改文字颜色与背景颜色

{% highlight ruby %}

$.fn.changecolor = function (options) {
	var opts = $.extend({}, $.fn.changecolor.defaults, options);
    this.css('color', opts.color).css('backgroundColor', opts.bgColor);
	return this;
}

// 初始默认值
$.fn.changecolor.defaults = {
    color: '#00BCD4',
    bgColor: '#ffffff'
}
{% endhighlight %}
其中，`var opts = $.extend({}, $.fn.changecolor.defaults, options);`opts合并默认值和用户设定值。
其中，`return this;`返回this保证链式操作。

`$.extend({}, obj1, obj2)`是jQuery提供的辅助方法,它把所得的结果全部合并在{}中并返回，obj2中有与obj1同名的属性时，越靠后的obj2中的属性值会覆盖靠前的obj1的。

---

