---
layout: post
title: 【PHP|导出CSV】PHP导出CSV文件乱码解决办法
date:   2017-11-09
categories: PHP
tags: [PHP, CSV,表单导出,乱码]
author: Ganace
comment: false
---

这里是一篇Ganace记录的PHP导出CSV文件乱码解决办法的文章。


## 情况说明

---

用之前提到的PHP导出CSV文件封装类来做数据库表数据导出成svc，在本地测试，用excel打开导出的SVC，不出现乱码，换台电脑，又出现乱码。Linux服务器上run，导出也是乱码。

---

## 解决办法

---

用`iconv('UTF-8//TRANSLIT//IGNORE','GBK',$value)`,把原本为utf-8的内容全部转换成GBK格式，如标题转换例子如下：

{% highlight ruby %}

$table_head = array(
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','ID'),
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','洲名'),
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','国家名'),
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','地区名'),
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','具体地址'),
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','备注'),
    iconv('UTF-8//TRANSLIT//IGNORE','GBK','其他'),
); 

{% endhighlight %}

---

[【PHP\|导出CSV】PHP导出CSV文件的封装类](https://ganace.github.io/posts/php-get-csv.html)

---

