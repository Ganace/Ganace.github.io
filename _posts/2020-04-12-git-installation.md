---
layout: post
title: 【git】git在windows上的安装与配置
date:   2020-04-12
categories: Git-Github
tags: [git]
author: Ganace
comment: false
---

关于git在windows上的安装与配置


## 下载git

---

####  1.确认自己的系统版本，按照版本下载最新Git软件

例：操作Windows7 64位，目前（2020-04-12）应该安装的最新版本为Git-2.17.0-64-bit.exe
最新版本可去官网查看与安装：[国外Git官网](https://git-scm.com/download/win)

####  2.下载

1.国外官网下载：[Git官网下载](https://git-scm.com/download/win)

2.如果git官网下载太慢，可以前往npm淘宝镜像(cnpm)下载：[Git淘宝镜像下载](https://npm.taobao.org/mirrors/git-for-windows/)
  - cnpm下载最新版本只要列表下拉至最后，由日期可以确定是不是最新版本，点击进入文件夹选择下载。不知道该下载哪个版本，可以去官网查看版本。截至目前（2020-04-12）64位最新版本为Git-2.17.0-64-bit.exe。

---

## 安装配置git

---

####  1.安装配置

1.双击安装->Next

2.Select Components选择以下四项->Next
  - Git Bash Here和Git GUI Here（方便在任意目录下打开git）
  - GitLFS（大文件支持）
  - Associate .git* configuration files with the default text editor（将.git*配置文件与默认文本编辑器关联）
  - Associate .sh files to be run with Bash（将.sh文件关联到Bash运行）

3.Choosing the default editor used by Git（选择默认编辑器）->Next

4.Adjusting your Path environment（配置path环境），选择以下单选->Next
  - Use Git from the Windows Command Prompt（能够从Git Bash和Windows命令提示符中使用Git）

5.之后的配置选项一路默认->Next

6.最后点击Install开始安装，安装完成后点击Finish

7.确认是否安装成功
  - 在桌面右击，可以看到右键菜单中有Git GUI Here和Git Bash Here两个选项，则表示安装成功。

####  2.设置git账号和邮箱

1.先确认本机是否已经有git帐号，有的话需要先删除

  - 打开 控制面板–>用户账户和家庭安全–>管理Windows凭据
  - 如果证书凭据中有有 git:https://github.com 说明存在旧git帐号
  - 展开 git:https://github.com 选择从保管库中删除

2.如果没有git账号需要去申请Git帐号：[申请地址](https://github.com/)

  - 点击Sign up 注册，输入用户名、邮箱、 密码，验证通过后Create account创建账户
  - 登录后首页选择New来创建项目：Repository name（项目名称），Description（项目描述），Public/Private（项目公开/私密），Add a README file（添加README说明文件）Add .gitignore（添加Git忽略配置文件）Choose a license（选择许可证，其中MIT license是最自由的使用比较广泛的开源许可证）
  - 最后Create repository

3.打开终端或者Git Bash,分别输入以下命令并且替换成自己的名字和email，回车

{% highlight ruby %}

git config --global user.name "your name"
git config --global user.email "your email"
{% endhighlight %}

基础配置到此完成。

---
