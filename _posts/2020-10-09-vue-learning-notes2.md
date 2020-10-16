---
layout: post
title: 【Vue】Vue学习笔记（二）Vue基本使用[v-for,v-on]
date:   2020-10-09
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，因为一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第二篇，内容包括Vue的一些基础学习：Vue基础使用，v-for列表，v-on:click计数器]。


## Vue基本使用

---
Vue挂载，el:
Vue数据，data:

![vue列表]({{ site.post_img_url }}/202010/vue0.png)
```html {%raw%} 
<div id="app">
  <p>{{ message }}-{{ name }}</p>
</div>

<script src="../common/js/vue.js"></script>
<script type="text/javascript">
  //ES6新增let变量、const常量
  const app = new Vue({
    el: '#app', //挂载
    data: {
      message: 'Hello Vue!初体验',
      name: 'Ganace',
    }
  });
</script>
{%endraw%}```

## Vue列表展示

v-for的使用

![vue列表]({{ site.post_img_url }}/202010/vue1.png)
```html {%raw%}
<div id="app">
  <p>列表展示</p>
  <ul>
    <li v-for="music in musics">
      {{ music }}
    </li>
  </ul>
</div>
<script src="../common/js/vue.js"></script>
<script type="text/javascript">
  //ES6新增let变量、const常量
  const app = new Vue({
    el: '#app', //挂载
    data: {
      message: 'v-for列表展示',
      musics: ['qianqian', 'kuwo', 'kugou', 'koukou', 'douban', 'wangyiyun']
    }
  });
</script>
{%endraw%}```

##  Vue计数器小案例

v-on的使用与语法糖、methods:{}

![vue列表]({{ site.post_img_url }}/202010/vue2.gif)
```html {%raw%}
<div id="app">
<h1>{{ title }}</h1>
  <h2>当前计数：{{ counter }}</h2>
  <button v-on:click='counter++'>+</button>
  <button @click='counter--'>-</button>
  <p></p>
  <button v-on:click='add'>add</button>
  <button @click='sub'>sub</button>
</div>

<script src="../common/js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      title: '计数器',
      counter: 0
    },
    methods: {
      add: function () {
        console.log('add run');
        this.counter++;
      },
      sub: function () {
        console.log('sub run');
        this.counter--;
      }
    },
  })
</script>
{%endraw%}```

---
