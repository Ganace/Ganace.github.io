---
layout: post
title: 【Yii2|SQL数据提供者】关于SQL数据提供者(SqlDataProvider)默认排序问题
date:   2017-09-27
categories: PHP
tags: [Yii2,default sort,默认排序,SQL数据提供者]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于SQL数据提供者(SqlDataProvider)默认排序问题的文章。

## 默认排序

---
####  基本使用
{% highlight ruby %}

$sql = 'SELECT * FROM `post` WHERE `date` LIKE '2017%''
$sql_count = 'SELECT COUNT(\*) FROM `post` WHERE `date` LIKE '2017%'';
$params=[':one' => 1];
$count = Yii::$app->db->createCommand($sql_count)
    ->bindValues($params)
    ->queryScalar();
$dataProvider = new SqlDataProvider([
    'sql' => $sql,
    'params' => $params,
    'totalCount' => $count,
    'pagination' => [
        'pageSize' =>25,
    ],
    'sort' => [
        'attributes' => [
            'title',
            'view_count',
            'created_at',
        ],
        'defaultOrder'=>[
            'title' => SORT_ASC,
        ],
    ],
]);

{% endhighlight %}

####  代码说明

- 在原来的SqlDataProvider基础使用上，添加'defaultOrder'属性到'sort'中,并在'defaultOrder'中列出需要默认排序的字段，以及排序规则

- 代码中`'defaultOrder'=>['title' => SORT_ASC],`即表示默认打开渲染页面，表格中title字段的值按照递增排序

- 关于排除规则
	:SORT_ASC：递增排序，即按升序排列 (A-Z)
	:SORT_DESC：递减排序，即按降序排列 (Z-A)

---


