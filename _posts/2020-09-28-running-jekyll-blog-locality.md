---
layout: post
title: 【Blog|jekyll-locality】jekyll博客在windows系统下搭建本地环境
date:   2020-09-28
categories: Zero-Jekyll-Blog
---

关于如何将jekyll博客项目在本地的windows系统下搭建本地环境运行。

因为现在写博客的间隔越来越长，导致有的时候会忘记post格式对应样式，写好md文件上传git以后，发现线上的文章样式不符合预期，往往需要多次调试，这个时候，每次调试过后需要上线更新pages再查看样式，如此反复，颇为麻烦。

去网上查看了很多怎么在本地run jekyll的资料，但是基本都是在linux上运行的，没有针对windows的本地运行，有一些也是太早前了，不是很适用，踩了很多坑，终于成功了。在这里记录一下成功流程。


## 安装ruby

由于jekyll是的开发语言是ruby，所以要在windows搭建jekyll本地环境就需要先配置好ruby环境。

---

####  下载安装包

##### 国外官网下载：

  打开链接：[ruby官网下载](https://git-scm.com/download/win)

  : ![ruby官网下载]({{ site.post_img_url }}/202009/ruby1.png)

DevKit是一个在Widow上帮助简化安装及使用RuyC/C++扩展如RDicout和RedCloth的工具箱。所以新手的话最好直接选择`RubyInstallers->WITH DEVKIT`的版本，在官网的列表中选择加粗的`Ruby+Devkit 2.6.6-1 (x64)`版本，x64是自己电脑的系统类型，本人是windows 64位操作系统，所以选的(x64)版本。

##### 官网下载缓慢解决办法：

从官网获取需要下载的安装包的地址url，

打开[https://d.serctl.com/?dl_start](https://d.serctl.com/?dl_start),把下载地址填入并提交。
  : ![ruby下载]({{ site.post_img_url }}/202009/ruby2.png)

在已经完成的下载列表中，随便选择其中一个点击下载按钮，下载安装包。
  : ![ruby下载]({{ site.post_img_url }}/202009/ruby3.png)


####  安装

双击安装包，开始安装。

同意协议->Next

接下来按照默认选择->Next

我的安装地址参考：`E:\Ruby\Ruby26-x64`。

新版本的安装包按照默认会勾选加入系统环境变量，所以不需要多余的配置

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
