---
layout: post
title: 【webpack】安装Node.js和webpack
date:   2020-07-13
categories: Front-end-Foundation
tags: [webpack]
author: Ganace
comment: false
---

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析,然后将这些模块按照指定的规则生成对应的静态资源。本文介绍了如何安装Node.js和webpack。

Webpack需要利用`NPM`来安装，NPM是随同`NodeJS`一起安装的包管理工具。Node.js 就是运行在服务端的 JavaScript。


## 1.安装Node.js

---

####  1.下载安装包


node.js安装包和源码下载地址[https://nodejs.org/en/download/](https://nodejs.org/en/download/),因为我的系统是windows是64位操作系统，所以选择64-bit版本。

![Node.js安装]({{ site.post_img_url }}/202007/node1.png)

####  2.安装过程

双击安装包

run->Next

同意协议->Next

修改安装目录->Next

从树形图标选择需要的安装模式，可以默认选择或者Online……->Next

Install->Finish

####  3.环境变量配置

检查path环境变量是否配置了Node.js，打开cmd.exe，输入path回车，查看path列表中是否包含nodejs的安装地址`D:\nodejs\`，如果没有的话需要配置。（计算机右键-属性-高级系统设置-环境变量，选择path编辑，在最后添加`;D:\nodejs\`，确定）

####  4.查看版本号

查看Node.js版本`node -v`，能够看到版本号说明安装配置成功。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。`npm -v`能够查看npm的版本。

#### 5.npm相关命令

- `npm install <Module Name>`使用 npm 命令安装模块。安装好之后，`<Module Name>` 模块就放在了工程目录下的 node_modules 目录中，`var express = require('<Module Name>');`引入安装模块。

- `npm install <Module Name>`使用 npm 命令安装模块在本地。(本地安装)

- `npm install <Module Name> -g`使用 npm 命令安装模块在本地。(全局安装)

- `npm uninstall <Module Name>`卸载模块

---

## 安装webpack

---

#### 1.安装webpack

`npm install webpack -g`全局安装

#### 2.安装webpack-cli

`npm install webpack webpack-cli -g`全局安装

webpack 4.X 开始，webpack本身和它的CLI不在在同一个包了，所以还需要安装webpack-cli。如果安装webpack3则不需要再安装webpack-cli，webpack-cli本身已经集成在webpack3中。

#### 3.查看版本

`webpack -v`

---

