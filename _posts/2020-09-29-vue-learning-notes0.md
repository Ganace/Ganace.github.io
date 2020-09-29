---
layout: post
title: 【Vue】Vue学习笔记（一）
date:   2020-09-29
categories: Front-end-Foundation
tags: [Vue]
author: Ganace
comment: false
---

前段时间因为工作需要学习了前端Vue框架，目前有正在开发的项目也是用的Vue框架，因为一定程度的开发经验，现在有一点空闲时间，正好总结梳理一下Vue的一些学习笔记。第一篇，内容包括Vue的一些基础学习：Vue实例创建、Vue生命周期。



## Vue介绍与安装



---

#### Vue介绍

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

#### Vue兼容

Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

####  Vue安装

##### CDN引入

{% highlight ruby %}

<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

{% endhighlight %}

##### NPM安装

安装Vue最新稳定版
{% highlight ruby %}

npm install vue

{% endhighlight %}

---

## 安装jekyll

---

在cmd.exe终端控制台中输入`gem install jekyll`回车安装。

安装对应版本的jekyll依赖，查看版本依赖安装 [https://rubygems.org/gems/jekyll](https://rubygems.org/gems/jekyll)，按照依赖列表逐一安装需要的组件。

  : ![jekyll]({{ site.post_img_url }}/202009/jekyll.png)

查看jekyll版本`jekyll -v`,有版本号表示安装成功

C:\>jekyll -v

jekyll 1.2.0

---

## 安装jekyll博客项目依赖

---

#### 安装 bundle

按照fork的博客项目的readme中的要求，要运行jekyll还需要安装bundle。

在cmd.exe终端控制台中输入`gem install bundle`回车安装。

安装bundle的依赖bundler，输入`gem install bundler`回车安装。

#### 在windows终端打开项目

打开cmd.exe，cd到博客项目的文件夹。例：`D:\Ganace.github.io>`。

或者用vscode开发工具的，只要把博客项目文件拖到工作区，右键文件夹->在集成终端中打开就行。

#### 安装jekyll博客项目依赖

运行开始之前需要安装博客项目的依赖，可以输入`bundle install`回车，bundle会按照项目Gemfile.lock文件中要求的依赖项以及各依赖项要求的版本来安装。

---

## 运行jekyll博客项目

---

#### 运行jekyll博客项目

在windows终端打开项目，例：`D:\Ganace.github.io>`。

输入`bundle exec jekyll s`回车可以直接运行项目

如果需要加上草稿箱(_drafts)中的文章,那么就输入`bundle exec jekyll s --drafts`回车运行

#### 运行报错问题

运行jekyll不成功报如下类似错误`Could not find i18n-0.7.0 in any of the sources`基本上是因为没有安装对应的组件，只要控制台输入`gem install i18n --version 0.7.0`回车安装就行。

`gem install 包名或组件名 --version  版本号`

如果不清楚版本，或是版本错误，可以到Ruby社区Gem托管[https://rubygems.org/](https://rubygems.org/)上搜索包名或组件名，选择对应的版本安装，或者查找目前需要的组件所对应的依赖安装。
  : ![组件安装1]({{ site.post_img_url }}/202009/gem1.png)
  : ![组件安装2]({{ site.post_img_url }}/202009/gem2.png)

同一个组件不同版本的组件依赖可能有不同，如果有些报错不知道怎么解决，可以按照Gemfile.lock文件中的组件列表一一在[https://rubygems.org/](https://rubygems.org/)上搜索排查，是否组件依赖版本安装错误或者少了依赖项。

gem安装如果很慢的话，可以更新gem源：

`gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/`

---
