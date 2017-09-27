---
layout: post
title: 【PHP|写入文件】PHP用file_put_contents()函数写入文件
date:   2017-09-21
categories: PHP
tags: [PHP, file_put_contents,写入文件]
author: Ganace
comment: false
---

这里是一篇记录PHP如何用file_put_contents()函数写入文件的文章。


## 获取系统今日日期时间

---
- `time()`
    : 返回当前的Unix时间戳,格式如`1505963962`
- `date("l",time())`
    : 显示系统当日星期，格式如`Thursday`
    ：Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
- `date("Y-m-d",time())`
    : 显示系统当日日期，格式如`2017-09-21`，即`年-月-日`
- `date("Ymd",time())`
    : 显示系统当日日期，格式如`20170921`，即`年月日`
- `date("Y.m.d",time())`
    : 显示系统当日日期，格式如`2017.09.21`，即`年.月.日`
- `date("Y/m/d",time())`
    : 显示系统当日日期，格式如`2017/09/21`，即`年/月/日`
- `date("Y-m-d H:i:s",time())`
    : 显示系统当日日期，格式如`2017-09-21 10:31:23`，即`年-月-日 时:分:秒`
    
---


## 日期时间计算

---
- `strtotime()`
    : strtotime()是一个非常强大的一个获取时间戳的函数，可以将任何英文文本的日期或时间描述解析为 Unix 时间戳，格式如`1505963962`
    :添加计算`strtotime("+2 week 1 days 3 hours 45 second")`
    :year（年），month（月），day（小时），minute（分），second（秒）

#### 昨天、今天、明天

- `date("Y-m-d",strtotime("-1 day"))`
    : 计算昨天日期，格式如`2017-09-20`，即`年-月-日`
- `date("Y-m-d",time())`
    : 显示今日日期，格式如`2017-09-21`，即`年-月-日`
- `date("Y-m-d",strtotime("+1 day"))`
    : 计算明天日期，格式如`2017-09-22`，即`年-月-日`

#### 上周下周、上月下月、前年明年

- `date("Y-m-d",strtotime("-1 week"))`
    : 计算一周以前的日期，格式如`2017-09-14`，即`年-月-日`
- `date("Y-m-d",strtotime("-1 week"))`
    : 计算一周以后的日期，格式如`2017-09-28`，即`年-月-日`

- `date("Y-m-d",strtotime("last month"))`
    : 计算一月以前的日期，格式如`2017-08-21`，即`年-月-日`
- `date("Y-m-d",strtotime("+1 month"))`
    : 或者`date("Y-m-d",strtotime("next month"))`
    : 计算一月以后的日期，格式如`2017-10-21`，即`年-月-日`

- `date("Y-m-d",strtotime("-1 year"))`
    : 或者`date("Y-m-d",strtotime("last year"))`
    : 计算一年以前的日期，格式如`2016-09-21`，即`年-月-日`
- `date("Y-m-d",strtotime("+1 year"))`
    : 或者`date("Y-m-d",strtotime("next year"))`
    : 计算一年以后的日期，格式如`2018-09-21`，即`年-月-日`

#### 星期[一~日]的计算

- `date("Y-m-d",strtotime("last Monday"))`
    ：Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
    : 计算上个星期一的日期，格式如`2017-09-18`，即`年-月-日`
- `date("Y-m-d",strtotime("next Sunday"))`
    : 计算下个星期日的日期，格式如`2017-09-24`，即`年-月-日`

#### 自由组合计算

- `date('Y-m-d',strtotime("+1 day +2 hour +3 minute");`
    ：加一天两小时3分钟

---

