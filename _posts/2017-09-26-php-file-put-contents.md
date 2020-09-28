---
layout: post
title: 【PHP|写入文件】PHP用file_put_contents()函数写入文件
date:   2017-09-21
categories: Back-end-Development
tags: [PHP]
author: Ganace
comment: false
---

这里是一篇Ganace记录的PHP如何用file_put_contents()函数写入文件的文章。


## 日志例子

---

{% highlight ruby %}

public function log($msg)
{
    $path='./runtime/log/';
    if (! is_dir($path)) mkdir($path);
    $filename = $path.'log_'.date('Ymd').'.txt';
    $content = date("Y-m-d H:i:s")."|".$msg."\n";
    file_put_contents($filename, $content, FILE_APPEND);
}

{% endhighlight %}

---

