---
layout: post
title: 【github】用git把本地项目与远程github项目连接与提交
date:   2020-07-21
categories: Git/Github
tags: [github,git]
author: Ganace
comment: false
---

github，用git把本地项目与远程github项目连接与提交


## 代码

---

####  1.本地项目连接GitHub远程项目

打开终端，cd到本地项目的文件夹

git remote add origin 项目github-code地址

{% highlight ruby %}

git remote add origin https://github.com/Ganace/test.git
{% endhighlight %}

####  2.拉取GitHub项目到本地

打开终端，cd到准备存放项目的文件夹

git clone 项目github-code地址

{% highlight ruby %}

git clone https://github.com/Ganace/test.git
{% endhighlight %}

####  3.提交

将本地的master分支推送到origin主机，同时指定origin为默认主机

{% highlight ruby %}

git push -u origin master
{% endhighlight %}
然后就可以不加任何参数使用git push 完成代码上传到github

push到GitHub的文件要求小于100M

PS：几个常用git命令

{% highlight ruby %}

git init // 初始化git仓库，该命令将创建.git 的子目录
git add // 跟踪新文件,将新建的文件或修改过的文件添加到索引库
git push // 上传
git commit // 将暂存区里的改动给提交到本地的版本库
git commit -m "注释" // 添加注释
git status // 检查当前文件状态,nothing to commit, working directory clean表示所有已跟踪文件在上次提交后都未被更改过
git pull origin master // 拉取远端origin/master分支并合并到当前分支
git pull origin dev // 拉取远端origin/dev分支并合并到当前分支
git push origin master // 将当前分支提交到远端origin/master分支
{% endhighlight %}

---

