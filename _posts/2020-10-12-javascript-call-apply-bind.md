---
layout: post
title: 【JavaScript】JavaScript中call()、apply()、bind()的用法与区别
date:   2020-10-12
categories: Front-end-Foundation
tags: [JavaScript]
author: Ganace
comment: false
---

最近看一些vue源码解读，正好遇到call的应用，一时间竟然反应不过来它的用法了，所以借此抽出一点点时间复习一下JavaScript中call()、apply()、bind()的用法与区别。


## 用来改变this的指向

call()、apply()、bind()是用来改变this的指向的

---

#### this关键字

查看另一篇文章-JavaScript中this关键字的用法:

- [JavaScript中this关键字的用法]({{ '/posts/javascript-this.html' | prepend: site.baseurl }})

#### call()、apply()、bind()的使用

```javascript
var name = '企鹅', sandbag = '豆豆';
var obj = {
  name: '森碟',
  sandbag: this.sandbag,
  exercise: function() {
    console.log(this.name + '吃饭、睡觉、打' + this.sandbag);
  }
}
var bvz = {
  name: '疯狂戴夫',
  sandbag: '僵尸'
}
obj.exercise(); // 森碟吃饭、睡觉、打豆豆
obj.exercise.call(bvz); // 疯狂戴夫吃饭、睡觉、打僵尸
obj.exercise.apply(bvz); // 疯狂戴夫吃饭、睡觉、打僵尸
obj.exercise.bind(bvz)(); // 疯狂戴夫吃饭、睡觉、打僵尸
```
由此可见，call、apply、bind 都可以改变this的指向，返回同样的结果。
其中，bind 返回的是一个新的函数方法，必须()调用才会被执行。

## 返回结果区别

由上一个例子可以看出来：

- call、apply返还的是：改变this指向以后的函数执行结果

- bind返还的是：改变this指向以后的一个新的函数

- bind的时候传的参数会预先传给返回的方法（函数），调用方法时不用再传参数

## 传参情况区别

```javascript
var name = '企鹅', sandbag = '豆豆';
var obj = {
  name: '森碟',
  sandbag: this.sandbag,
  exercise: function(act1, act2) {
    console.log(this.name + act1 + '、' + act2 + '、打' + this.sandbag);
  }
}
var bvz = {
  name: '疯狂戴夫',
  sandbag: '僵尸'
}
obj.exercise('吃饭', '睡觉'); // 森碟吃饭、睡觉、打豆豆
obj.exercise.call(bvz,'躺沙发', '吃零食'); // 疯狂戴夫躺沙发、吃零食、打僵尸
obj.exercise.apply(bvz,['躺沙发', '吃零食']); // 疯狂戴夫躺沙发、吃零食、打僵尸
obj.exercise.bind(bvz,'躺沙发', '吃零食')(); // 疯狂戴夫躺沙发、吃零食、打僵尸
obj.exercise.bind(bvz,['躺沙发', '吃零食'])(); // 疯狂戴夫躺沙发,吃零食、undefined、打僵尸
```
由上面的例子可以得出：

- call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象。

- call的第二个到第n个参数全都用逗号分隔，直接放到后面。

- apply的第二个参数为数组，所有需要传递的参数都必须放在一个数组里面传进去。

- bind除了返回是函数以外，它的参数和call 一样。

---
