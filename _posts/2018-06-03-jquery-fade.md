---
layout: post
title: 【jQuery】jQuery的显示隐藏&淡入淡出&滑入滑出
date:   2018-06-03
categories: Front-end-Foundation
tags: [jQuery]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于jQuery的显示隐藏&淡入淡出&滑入滑出的文章。



这个需要用jQuery的相关对象来处理AJAX简化代码：

## 显示/隐藏

---

####  show()&hide()&toggle()

jQuery元素的显示/隐藏/切换主要用到以下三个个方法：
{% highlight ruby %}

	$(selector).show(speed,callback);
	$(selector).hide(speed,callback);
	$(selector).toggle(speed,callback);
{% endhighlight %}
	: `speed`参数规定显示/隐藏的速度，可选参数为"slow"、"fast"、或者毫秒数。
	: `callback`参数规定显示/隐藏效果显示完成后所执行的js函数。
	
####  示例代码

body标签中代码如下：
{% highlight ruby %}

	<button class="show" type="button">显示</button>
	<button class="hide" type="button">隐藏</button>
	<button class="toggle" type="button">切换</button>
	<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: aquamarine;"></div>
	<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: brown;"></div>
{% endhighlight %}
jq代码如下：
{% highlight ruby %}

	<script type="application/javascript">
		$(function(){
			$('.show').click(function(){
				$('.card').show();
			});
			$('.hide').click(function(){
				$('.card').hide();
			});
			$('.toggle').click(function(){
				$('.card').toggle();
			});
			
		})
	</script>
{% endhighlight %}

---

## 淡入/淡出

---

####  fadeIn()&fadeOut()&fadeOut()&fadeTo()
jQuery元素的淡入/淡出/切换/渐变至透明值主要用到以下四个个方法：
{% highlight ruby %}

$(selector).fadeIn(speed,callback);
$(selector).fadeOut(speed,callback);
$(selector).fadeToggle(speed,callback);
$(selector).fadeTo(speed,opacity,callback);
{% endhighlight %}
	: `speed`参数规定显示/隐藏的速度，可选参数为"slow"、"fast"、或者毫秒数。
	: `callback`参数规定显示/隐藏效果显示完成后所执行的js函数。
	: `opacity`参数是必须参数，规定渐变效果最终的透明度值。

---

####  示例代码

body标签中代码如下：
{% highlight ruby %}

	<button class="fadeIn" type="button">淡入</button>
	<button class="fadeOut" type="button">淡出</button>
	<button class="fadeToggle" type="button">切换</button>
	<button class="fadeTo" type="button">渐变至透明值0.6</button>
	<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: aquamarine;"></div>
	<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: brown;"></div>
{% endhighlight %}
jq代码如下：
{% highlight ruby %}

	<script type="application/javascript">
		$(function(){
			$('.fadeIn').click(function(){
				$('.card').fadeIn();
			});
			$('.fadeOut').click(function(){
				$('.card').fadeOut();
			});
			$('.fadeToggle').click(function(){
				$('.card').fadeToggle();
			});
			$('.fadeTo').click(function(){
				$('.card').fadeTo('slow',0.6);
			});
		})
	</script>
{% endhighlight %}

---

## 逐个变化&滑动变化

---

####  逐个淡入淡出示例代码

body标签中代码如下：
{% highlight ruby %}

	<button class="fadeIn" type="button">逐个淡入</button>
	<button class="fadeOut" type="button">逐个淡出</button>
	<div>
		<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: aquamarine;"></div>
		<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: brown;"></div>
	</div>
{% endhighlight %}
jq代码如下：
{% highlight ruby %}

	<script type="application/javascript">
		$(function(){
			$('.fadeIn').click(function(){
				$('.card:first').fadeIn('fast',function(){
					$(this).next().fadeIn('fast',arguments.callee);
				});
			});
			$('.fadeOut').click(function(){
				$('.card:last').fadeOut('fast',function(){
					$(this).prev().fadeOut('fast',arguments.callee);
				});
			});
		})
	</script>
{% endhighlight %}
  
####  逐个滑入滑出示例代码

body标签中代码如下：
{% highlight ruby %}

	<button class="slideDown" type="button">逐个滑入</button>
	<button class="slideUp" type="button">逐个滑出</button>
	<button class="slideToggle" type="button">逐个切换</button>
	<div>
		<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: aquamarine;"></div>
		<div class="card" style="width: 12.5rem;height: 13.75rem;background-color: brown;"></div>
	</div>
{% endhighlight %}
jq代码如下：
{% highlight ruby %}

	<script type="application/javascript">
		$(function(){
			$('.slideDown').click(function(){
				$('.card:first').slideDown('fast',function(){
					$(this).next().slideDown('fast',arguments.callee);
				});
			});
			$('.slideUp').click(function(){
				$('.card:last').slideUp('fast',function(){
					$(this).prev().slideUp('fast',arguments.callee);
				});
			});
			$('.slideToggle').click(function(){
				$('.card').slideToggle();
			});
		})
	</script>
{% endhighlight %}

---
