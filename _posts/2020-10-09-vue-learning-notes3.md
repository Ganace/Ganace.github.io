---
layout: post
title: 【Vue】Vue学习笔记（三）Vue的MVVM与生命周期函数
date:   2020-10-09
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，因为一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第三篇，内容包括Vue的一些基础学习：Vue的MVVM与生命周期函数。



---

## Vue的MVVM

#### 软件架构模式MVVM

- M：模型层，主要负责业务数据相关；

- V：视图层，顾名思义，负责视图相关，细分下来就是html+css层；

- VM：V与M沟通的桥梁，负责监听M或者V的修改，是实现MVVM双向绑定的要点；

#### Vue的MVVM

- View：html内容,DOM

- Model：Vue实例对应的数据对象data,数据

- ViewModel：Vue的一个实例，桥梁

---

## Vue的生命周期函数

`1.beforeCreate：`在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置（未完成）之前被调用。

`2.created：`完成了 data 数据的初始化（数据和data属性的绑定），没有el选项。实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/ event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

`3.beforeMount：`在挂载开始之前被调用：相关的 render 函数首次被调用。

`4.mounted：`el 被新创建的 vm.$el 替换，并挂载到实例上，之后调用该钩子。

`5.beforeUpdate：`数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

`6.updated：`由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

`7.beforeDestroy：`组件删除之前的确认。

`8.destroyed：`当前组件已被删除，清空相关内容。

![vue实例生命周期]({{ site.post_img_url }}/202010/vue4.gif)

```html {%raw%}
<div id="app">
  <h2>{{ counter }}</h2>
  <button v-on:click='counter++'>+</button>
  <button @click='counter--'>-</button>
  <p></p>
  <button v-on:click='add'>add</button>
  <button @click='sub'>sub</button>
</div>
<script src="../common/js/vue.js"></script>
<script>
  const obj = {
    title: 'Vue生命周期、钩子',
    counter: 0
  };
  const app = new Vue({
    el: '#app',
    data: obj,
    methods: {
      add: function () {
        this.counter++;
      },
      sub: function () {
        this.counter--;
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created: function () {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('befoerDistory');
    },
    destroyed() {
      console.log('distoryed');
    },
  })
</script>

{%endraw%}```

![vue实例生命周期]({{ site.post_img_url }}/202010/vue3.png)

---
