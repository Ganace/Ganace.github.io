---
layout: post
title: 【Vue】Vue学习笔记（四）Vue的组件与差值语法
date:   2020-10-09
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，因为一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第四篇，内容包括Vue的一些基础学习：Vue的组件与差值语法。

---

## Vue的组件template

#### 定义vue的template

`全局组件: `可以在vue控制的任意模版下使用

`局部组件: `仅在实例控制的html代码段里可以使用

---

## Vue的差值语法Mustache

#### Mustache语法（双大括号,翻译：胡须）

![Vue的组件差值语法]({{ site.post_img_url }}/202010/vue5.png)

```html {%raw%} 
<div id="app">
  <p>{{ message }}</p>
  <p>{{ ( 1 + 2 ) * 3 }}</p>
  <p>{{ num + 1 }}</p>
  <p>{{ num * 2 }}</p>
  <p>{{ title + message }}</p>
  <p>{{ title + ' ' + message }}</p>
  <p>{{ title }} {{ message }}</p>
  <my-component></my-component>
  <my-ganace></my-ganace>
</div>
<div id="app2"></div>
<script src="../common/js/vue.js"></script>
<script type="text/javascript">
  Vue.component('my-component', {
    template: "<div>我是全局组件-{{ name }}</div>",
    // 使用vue.component定义组件
    // 第一参数: 定义组件的名字
    // 第二参数: 是个对象
    // 全局组件: 可以在vue控制的任意模版下使用
    data: function () {
      // data字段必须是函数
      return {
        name: 'abc'
      }
    }
  })
  const app = new Vue({
    el: '#app',
    data: {
      tab: 'show',
      title: 'Vue',
      message: 'Mustache语法（双大括号）',
      num: 233
    },
    // 局部组件
    components: {
      'my-ganace': {
        template: '<div>这是局部组件</div>'
      }
    }
  });
  const app2 = new Vue({
    el: '#app2',
    data: {
      name: 'ganace'
    },
    template: '<my-component></my-component>'
  });
</script>
{%endraw%}
```

---
