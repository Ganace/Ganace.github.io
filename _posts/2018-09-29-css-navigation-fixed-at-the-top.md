---
layout: post
title: 【CSS3】CSS导航如何固定在页面顶端
date:   2018-09-29
categories: Front-end-Foundation
tags: [CSS3]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于CSS导航固定在页面顶端的文章。



这个需要用到css的position属性。如下这个示例：

假设导航的class为nav，将其固定在页面顶部可以这样写：
1 .nav{width:100%;height:30px;position:fixed;top:0;left:0;}
其中高宽请根据实际情况修改。
## CSS导航固定在页面顶端

---

####  需要用到css的position属性

class为topnav的导航，如果要固定在页面顶部可以这样写：

{% highlight ruby %}

.top-nav{
	width:100%;
	height:30px;
	position:fixed;
	top:0;
	left:0;
}
{% endhighlight %}

其中，导航的宽高可以根据实际情况再做修改。

---

