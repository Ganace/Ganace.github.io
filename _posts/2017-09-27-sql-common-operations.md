---
layout: post
title: 【SQL|常用操作】SQL数据库常用命令
date:   2017-09-27
categories: Back-end-Development
tags: [SQL]
author: Ganace
comment: false
---

这里是一篇Ganace记录的SQL数据库常用命令的文章。不定期更新中··· ···


## 表操作

---
####  删除表数据
- `DROP TABLE tablename`
    :删除整个表（表结构与表数据均删除）
    :tablename为表名
- `TRUNCATE TABLE tablename`
    :清空表中的数据，保留表的数据结构，不保留标识计数值
    :tablename为表名
- `DELETE TABLE tablename`
    :删除表中的数据，保留标识计数值
    :逐行删除，可以回滚
    :tablename为表名

####  查询表的所有记录
- `SELECT * FROM tablename`
    :tablename为表名

####  查询表的所有记录数
- `SELECT COUNT(*) FROM tablename`
    :tablename为表名

---


