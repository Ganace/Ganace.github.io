---
layout: post
title: 【Vue】Vue学习笔记（零）Vue学习笔记大纲
date:   2020-09-29
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，有了一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第零篇，内容包括Vue的一些基础学习大纲，用于以后复习查漏补缺。

---

## 认识Vuejs

##### 相关笔记：

- [【Vue】Vue学习笔记（一）Vue基础安装与Vue-Cli安装]({{ '/posts/vue-learning-notes1.html' | prepend: site.baseurl }})

- [【Vue】Vue学习笔记（二）Vue基本使用v-for,v-on]({{ '/posts/vue-learning-notes2.html' | prepend: site.baseurl }})

- [【Vue】Vue学习笔记（三）Vue的MVVM与生命周期函数]({{ '/posts/vue-learning-notes2.html' | prepend: site.baseurl }})

### 一、认识Vuejs

###### 1.1 认识Vuejs

- 【Vue的读音】、【Vue的渐进式】、【Vue的特点】

###### 1.2 安装Vue

- 【CDN引入】、【下载引入】、【npm安装】

###### 1.3 Vue初体验

- 【Hello Vuejs】、【Vue列表展示】、【Vue计数器小案例】

  mustache->体验Vue响应式

  v-for 后面给数组追加元素的时候，新的元素也可以在界面中渲染出来

  事件监听：click-> methods

###### 1.4 Vue中的MVVM

###### 1.5 Vue创建时的options

- 【el:】、【data:】、【methods:】、【生命周期函数】

---

## 插值语法\v-bind

##### 相关笔记：

- [【Vue】Vue学习笔记（四）Vue的组件与差值语法]({{ '/posts/vue-learning-notes4.html' | prepend: site.baseurl }})

- [【Vue】Vue学习笔记（五）Vue的指令与语法糖]({{ '/posts/vue-learning-notes5.html' | prepend: site.baseurl }})


### 二、插值语法

- 【mustache语法】

- 【v-once】、【v-html】、【v-text】、【v-pre】、【v-cloak:斗篷】

### 三、v-bind

###### v-bind绑定基本属性

- 【v-bind:src】、【:href】

###### v-bind 动态绑定class

- 【对象语法：作业：class='{类名：boolean}'】、【数组语法：】

###### v-bind 动态绑定style

---

## 计算属性\事件监听\条件判断

##### 相关笔记：

- [【Vue】Vue学习笔记（六）Vue的计算属性和事件监听]({{ '/posts/vue-learning-notes6.html' | prepend: site.baseurl }})

- [【Vue】Vue学习笔记（七）Vue的指令与语法糖]({{ '/posts/vue-learning-notes7.html' | prepend: site.baseurl }})


### 四、计算属性

- 【案例一：firstName+lastName】、【案例二：books->price】

- 【延伸：ES6语法】：let/const，对象的字面量增强写法，for循环let in、let for

###### 4.1.计算属性的本质

- 【fullname:{set(),get()}】

###### 4.2.计算属性和methods对比

- 计算属性在多次使用时，只会调用一次、它是有缓存的

### 五、事件监听

###### 5.1.事件监听基本使用

###### 5.2.参数问题

- 【btnClick】、【btnClick(event)】、【btnClick(abc,event)->$event】

###### 5.3.修饰符

- 【.stop】、【.prevent】、【.enter】、【.native】

### 六、条件判断

###### 6.1.v-if/v-else-if/v-else

###### 6.2.登录小案例

###### 6.3. v-show

- v-show和v-if的区别

---

## 循环遍历\v-model

### 七、循环遍历

###### 7.1.遍历数组

###### 7.2.遍历对象

- 【value】、【value,key】、【value,key,index】

###### 7.3.数组那些方式是响应式的

### 八、v-model的使用

###### 8.1.v-model的基本使用

- v-model=>v-bind:value v-on:input

###### 8.2.v-model和radio/checkbox/select

###### 8.3.修饰符

- 【.lazy】、【.number】、【.trim】

---

## 组件化\模块化开发

### 九、组件化开发

###### 9.1.组件化基本使用

- 【认识组件化】、【组件的基本使用过程】

###### 9.1.组件化写法

- 【全局组件和局部组件】、【父组件和子组件】

- 【组件注册语法糖】、【模板的分类写法】（script、template）

###### 9.2.数据的存放与父子组件通信

- 子组件不能直接访问父组件

- 子组件中有自己的data，而且必须是一个函数

- 为什么必须是一个函数

- 【父传子：props】、【子传父：$emit】

###### 9.3.父子组件的访问

- 【children/refs】、【parent/root】

###### 9.4.slot插槽的使用

- 【基本使用】、【具名插槽】、【编译的作用域】、【作用域插槽】

### 十、前端模块化开发

###### 10.1.为什么要使用模块化

- 简单写JS代码带来的问题、闭包引起代码不可复用、自己实现简单模块化、AMD/CMD/CommonJS

###### 10.2.ES6中模块化的使用

- 【export】、【import】

---

## webpack\Vue CLI

### 十一、webpack

###### 11.1.什么是webpack

- 【webpack和gulp对比】、【webpack依赖环境】、【安装webpack】

###### 11.2.webpack起步

- 【webpack命令】、【webpack配置】webpack.config.js/package.json(scripts)

###### 11.3.webpack的loader

- 【css-loader/style-loader】、【less-loader/less】、【url-loader/file-loader】、【babel-loader】

###### 11.4.webpack配置vue

- 【vue-loader】

###### 11.5.webpack的plugin
###### 11.6.搭建本地服务器

- webpack-dev-server

###### 11.7.配置文件的分离

### 十二、Vue CLI

###### 12.1.什么是CLI

- 【脚手架是什么东西】、【CLI依赖webpack,node,npm】、【安装CLI3-》拉取CLI2模板】

###### 13.2.CLI2初始化的过程与生产的目录结构的解析

###### 13.3.runtime-compiler和runtime-only的区别

- ESLint到底是什么

- template -> ast -> render -> vdom -> 真实DOM

- render:(h)=>h,->createElement

###### 14.4.Vue-ClI3

- 如何通过CLI3创建项目

- CLI3的目录结构

- 配置文件：1.Vue UI 2.隐藏的配置文件 3.自定义vue.config.js

## Vue-Router\Promise

### 十五、Vue-Router

###### 15.1.什么是前端路由

- 【后端渲染/后端路由】、【前后端分离】、【SPA/前端路由】

###### 15.2.路由的基本配置

- 安装vue-router

- Vue.use -> 创建VueRouter对象 -> 挂载到Vue实例上

- 配置映射关系：1.创建组件 2.配置映射关系 3.使用router-link/router-view

###### 15.3.细节处理

- 默认路由

- mode: 'history'

- rounter-link -> tag/replace/active-class

###### 15.4.动态路由

- /user/:id

- this.$route.params.id

###### 15.5.参数的传递

- params

- query->URL

- URL:

- URL(协议://主机:端口/路径?查询)

- URL(scheme://host:port/path?query#fragment)

###### 15.6.路由嵌套

- children: []

###### 15.7.导航守卫

- 【全局导航守卫】、【路由独享守卫】、【组件类守卫】

###### 15.8.Keep-alive
###### 15.9.TabBar的封装过程

### 十六、Promise

###### 16.1.Promise的基本使用

- 如何将异步操作放入到promise中

- (resolve,reject)=>then/catch

###### 16.2.Promise的链式调用
###### 16.3.Promise的all方法

### 十七、Vuex

###### 17.1.什么是状态管理

###### 17.2.vuex的基本使用

- state->直接修改state(错误)

- mutations->devtools

###### 17.3.核心概念

- State->单一状态树

- Getters

- Mutations

- Actions->异步操作（Promise）

- Modules

###### 17.4.目录组织方式

---

## axios\项目开发

### 十八、网络请求封装（axios）

- 18.1.网络请求方式的选择

- 18.2.axios的基本使用

- 18.3.axios的相关配置

- 18.4.axios的创建爱你实例

- 18.5.axios的封装

### 十九、项目开发

- 19.1.划分目录结构

- 19.2.vue.config.js和.editorconfig

- 19.3.项目的模块划分：tabbar->路由映射关系

---
