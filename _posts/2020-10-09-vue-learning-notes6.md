---
layout: post
title: 【Vue】Vue学习笔记（六）Vue的计算属性和事件监听
date:   2020-10-09
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，有了一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第五篇，内容包括Vue的一些基础学习：Vue的计算属性和事件监听。

---

## Vue的计算属性

#### 计算属性本质

计算属性的缓存：计算属性只调用一次之后缓存起来，当this.firstName和this.lastName中有改变时，才再次调用然后缓存

![Vue的指令]({{ site.post_img_url }}/202010/vue7.png)

```html {%raw%} 
<div id="app">
  <p>{{ fullName }}</p>
  <!-- setter&getter -->
  <p>{{ fullName1 }}</p>
</div>

<script src="../common/js/vue.js"></script>
<script type="text/javascript">
  const app = new Vue({
    el: '#app',
    data: {
      firstName: '夏目',
      lastName: '贵志',
    },
    computed: {// computed计算属性
      // 计算属性单独调取get方法的简写
      fullName: function () {
        console.log('fullName');
        return this.firstName + ' ' + this.lastName;
      },
      // setter&getter
      // 计算属性一般没有set方法，只读属性
      // 单独调取get方法，例如上fullName方法
      fullName1: {
        set: function (newValue) {
          console.log('set', newValue);
          const names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[1];
        },
        get: function () {
          return this.firstName + ' ' + this.lastName;
        }
      }
    },
  });
</script>
{%endraw%}
```
#### 计算属性和methods对比

- computed计算属性只有第一次调用时会计算，之后只要data数据没有发生改变，每次调用都会返还缓存的计算结果，调用N次计算1次，性能较高。

- methods方法每次调用都会重新计算，调用N次计算N次，没有缓存，性能不高。


![Vue的指令]({{ site.post_img_url }}/202010/vue8.png)

```html {%raw%} 
<div id="app">
  <p>{{ getFullName() }}</p>
  <p>{{ getFullName() }}</p>
  <p>{{ getFullName() }}</p>
  <p>{{ getFullName() }}</p>
  <p>{{ fullName }}</p>
  <p>{{ fullName }}</p>
  <p>{{ fullName }}</p>
  <p>{{ fullName }}</p>
</div>

<script src="../common/js/vue.js"></script>
<script type="text/javascript">
  const app = new Vue({
    el: '#app',
    data: {
      firstName: '夏目',
      lastName: '贵志',
    },
    // computed计算属性
    computed: {
      fullName: function () {
        console.log('fullName');
        return this.firstName + ' ' + this.lastName;
      },
    },
    methods: {
      getFullName: function () {
        console.log('getFullName');
        return this.firstName + ' ' + this.lastName;
      }
    },
  });
</script>
{%endraw%}
```

---

## Vue的事件监听

#### 事件监听基本使用


```html {%raw%} 

{%endraw%}
```
#### 事件监听参数问题

#### 事件监听修饰符

---