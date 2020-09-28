---
layout: post
title: 【PHP|导出CSV】PHP导出CSV文件的封装类
date:   2017-11-07
categories: Back-end-Development
tags: [PHP]
author: Ganace
update: 2017-11-09
comment: false
---

这里是一篇Ganace记录的PHP导出CSV文件的封装类的文章。


## 封装代码

---

{% highlight ruby %}

<?php 
 #导出CSV表格封装类
class OutputCSV
{
    # $filename 为文件名，如'出库报表'
    # $headers 为表头,array数组，如array('a1','a2','a3','a4','a5');
    # $datas 为表中数据，array数组。可以是从数据库中取出的数组。
    public function getCSV($filename,$headers,$datas)
    {
        #设置内存占用
        set_time_limit(0);  
        ini_set('memory_limit', '512M');
        #打开文件句柄  
        $output = fopen('php://output', 'w') or die("Sorry,can't open php://output");  
        #设置头部信息，即此为一个csv文件   
        header("Content-Type: application/csv");  
        header("Content-Disposition: attachment; filename=$filename.csv");  
        #输出csv文件的表头 
        fputcsv($output, $headers);  
        #输出每一行数据到文件中  ,$result为从数据库中取出的数组
        foreach ($datas as $value) {
            fputcsv($output, array_values($value));  
        }
        #关闭文件句柄  
        fclose($output) or die("Sorry,can't close php://output");  
        exit;
    }
}

{% endhighlight %}

## 下载地址

---

[https://github.com/Ganace/Ganace.github.io/blob/master/assets/php/OutputCSV.php](https://github.com/Ganace/Ganace.github.io/blob/master/assets/php/OutputCSV.php)

---

[【PHP\|导出CSV】PHP导出CSV文件乱码解决办法](https://ganace.github.io/posts/php-get-csv-mess.html)

---