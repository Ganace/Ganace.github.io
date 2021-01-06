---
layout: post
title: 【Vue】Vue学习笔记（五）Vue的指令与语法糖
date:   2020-10-09
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，有了一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第五篇，内容包括Vue的一些基础学习：Vue的指令与语法糖。

---

## Vue的指令

`v-once`：数据只在第一次渲染，之后不再做改变

`v-html`：把数据解析成html再展示

`v-text`：把数据按照文本来展示

`v-pre`：把数据不解析原样展示

`v-cloak`：斗篷，再vue解析之前存在，解析之后不存在

`v-bind`: 动态绑定属性:class属性、style（对象&数组）

---

## Vue的语法糖

#### v-bind

```html {%raw%} 
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>
<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
{%endraw%}
```
#### v-on

```html {%raw%} 
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>
<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
{%endraw%}
```

---

![Vue的指令]({{ site.post_img_url }}/202010/vue6.png)

```html {%raw%} 
<div id="app" v-cloak>
  <p v-once>{{ vonce }}</p>
  <p>{{ vhtml }}</p>
  <p v-html="vhtml"></p>
  <p v-text="vtext"></p>
  <p v-pre="vpre">{{ vpre }}</p>

  <!-- v-bind动态绑定属性 -->
  <p class="title" v-bind:class="vbind">v-bind动态绑定属性</p>
  <p :class="vbind">v-bind语法糖（简写）</p>
  <p :class="{red: false}">v-bind语法class插入对象，{类名：布尔值，类名：布尔值}</p>
  <p :class="{red: isRed}">v-bind语法</p>
  <p v-bind:class="getClass()">v-bind语法用方法调取对象</p>
  <button @click="btnColor">v-bind的class切换</button>
  <p class="title" :class="['active','line',vbind]">v-bind语法class插入数组</p>

  <!-- <p :class="{key(属性名):value(属性值)}">233</p> -->
  <!-- 50px必须加单引号，否则会被当做变量解析 -->
  <!-- <p :style="{fontSize: '50px'}">v-bind+style</p> -->
  <!-- finalSize当做变量使用 -->
  <p :style="{fontSize: finalSize + 'px',color: finalColor}">v-bind+style</p>
  <!-- v-bind动态绑定style数组语法 -->
  <p :style="[baseStyle,baseStyle1]">v-bind+style</p>

</div>

<script src="../common/js/vue.js"></script>
<script type="text/javascript">
  const app = new Vue({
    el: '#app',
    data: {
      title: '差值操作&动态绑定属性',
      messages: [
        'v-once数据只在第一次渲染，之后不再做改变',
        'v-html把数据解析成html再展示',
        'v-text把数据按照文本来展示',
        'v-pre把数据不解析原样展示',
        'v-cloak斗篷，再vue解析之前存在，解析之后不存在',
        'v-bind动态绑定属性+class属性',
        'v-bind动态绑定属性style（对象&数组）',
      ],
      vonce: 'vonce',
      vhtml: '<a href="https://www.zhihu.com/explore">zhihu</a>',
      vtext: 'vtext',
      vpre: 'vpre',
      vbind: 'red',
      isRed: true,

      finalSize: '40',
      finalColor: 'red',

      baseStyle: {
        backgroundColor: 'red'
      },
      baseStyle1: {
        fontSize: '50px'
      }
    },
    methods: {
      btnColor: function () {
        this.isRed = !this.isRed;
      },
      getClass: function () {
        return {
          red: this.isRed
        };
      }
    },
  });
  app.vonce = '123';
</script>
{%endraw%}
```

---
