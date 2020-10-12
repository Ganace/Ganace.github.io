---
layout: post
title: 【JavaScript】JavaScript中this关键字的用法
date:   2020-09-12
categories: Front-end-Foundation
tags: [JavaScript]
author: Ganace
comment: false
---

复习一下JavaScript中this关键字的用法。

---

## this不同情况下的区分

- 在对象方法中， this 指向调用它所在方法的对象。

- 单独使用 this，则它指向全局对象(浏览器中为window)。

- 函数中使用 this，this 指向函数的所属者(浏览器中为window)。

- 严格模式下，函数中使用 this，this 为 undefined。

- 在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素。

---

## 方法中的 this

在对象方法中， this 指向调用它所在方法的对象。

例下：this指向obj对象

```javascript
var name = '企鹅', friend = '豆豆';
var obj = {
  name: '森碟',
  rest: function () {
    console.log(this.name + '吃饭' + '睡觉');
  },
  exercise: function() {
    console.log(this.name + '打' + this.friend);
  }
}
obj.rest(); //森碟吃饭睡觉
obj.exercise();//森碟打undefined
```
rest方法、exercise 方法所属的对象就是 obj。

## 单独使用 this

单独使用 this，则它指向全局(Global)对象。

在浏览器中，window 就是该全局对象，为 [object Window]。，

```javascript
var obj = this;
console.log(this);//Window {parent: Window, ...}
```

严格模式下，单独使用 this，也一样指向全局(Global)对象。

```javascript
"use strict";
var obj = this;
console.log(this);//Window {parent: Window, ...}
```

##  函数中使用 this

默认情况下，函数的所属者绑定在 this 上。

默认情况下，函数中使用 this，this表示全局对象，window 就是该全局对象。

```javascript
function getThis() {
  console.log(this);
}
getThis();// Window {parent: Window, ...}
```

严格模式下，函数的所属者没有绑定在 this 上。

严格模式下，函数中使用 this，this 为 undefined。

```javascript
"use strict";
function getThis() {
  console.log(this);
}
getThis();// undefined
```

## 事件中的 this

在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素

```html
<button onclick="this.style.color='red'">
  点击变红色
</button>
```

---
