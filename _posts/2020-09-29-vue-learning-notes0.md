---
layout: post
title: 【Vue】Vue学习笔记（一）Vue基础安装与Vue-Cli安装
date:   2020-09-29
categories: Front-end-Foundation
tags: [Vue,Vue-Cli]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，因为一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第一篇，内容包括Vue的一些基础学习：Vue基础安装、Vue-Cli安装。


## Vue介绍与安装

---

#### Vue介绍

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

#### Vue兼容

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

####  Vue安装

##### 1.CDN引入

{% highlight ruby %}

<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

{% endhighlight %}

##### 2.NPM安装

安装Vue最新稳定版
```ruby
npm install vue
```

#### Vue实例创建

{%raw%}
```html
<div id="app">
  {{  message  }}
</div>
```
{%endraw%}
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

---

## Vue-Cli安装

---

Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。
使用npm安装webpack工具，利用webpack可以快速构建Vue全家桶（vue+vue-cli+vue-router+vuex+axios）,一步搭建大型应用。

#### 安装 Node.js/npm/webpack

Vue-Cli内部是通过`Webpack`来配置打包的。Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析,然后将这些模块按照指定的规则生成对应的静态资源。

Webpack需要利用`NPM`来安装，NPM是随同`NodeJS`一起安装的包管理工具。Node.js 就是运行在服务端的 JavaScript。

所以我们在安装Vue-Cli之前，需要依次安装Node.js和webpack。

安装教程：[【webpack】安装Node.js和webpack]({{ site.post_img_url }}/posts/webpack-install.html)

#### 全局安装Vue-Cli

`npm install -g vue-cli`

安装完成后`vue -V`查看版本号，需要注意V是大写。出现版本号说明全局安装成功。

#### 本地安装Vue-Cli


##### 本地安装Vue-Cli（项目安装）

新建项目文件夹project_file,终端命令行cd进入到项目目录，输入：

`vue create <Project Name>`创建项目，其中`<Project Name>`为文件名，不支持驼峰（含大写字母），这里我输入的是`vue create project_name`。

##### 安装配置选择

- `Please pick a preset: (Use arrow keys)`选择配置模式，键盘上下选择默认(default)还是手动(Manually)，这里我选择的是Manually手动。

- `Check the features needed for your project:`自定义配置，（）里面打`*`的为已选择，键盘上下选择，空格键打`*`,回车默认。这里我选择的是以下几项。`(*) Babel` `(*) Router` `(*) Vuex` `(*) CSS Pre-processors` `(*) Linter / Formatter`。

- ` Use history mode for router?`router是否使用history模式，这里我选择的Yes。

- `Pick a CSS pre-processor`选择一项css预处理器，这里我选择的`Sass/SCSS (with node-sass)`。

- `Pick a linter / formatter config`选择代码格式化检测方案，这里我选择`ESLint + Prettier`。

- `Pick additional lint features:`选择检查方式，这里我选择`Lint on save`保存时检查。

- `Where do you prefer placing config for Babel, ESLint, etc.? `把babel,eslint这些配置文件放哪，这里我选择`In dedicated config files`放在独立文件夹。

- `Save this as a preset for future projects? `是否保存为未来项目的预配置，这里我选择`Yes`。

- `Save preset as? `为预配置起名，这里我起名`vue4`回车。

- 等待安装成功

---
