---
layout: post
title: 【Yii2|SQL数据提供者】关于SQL数据提供者(SqlDataProvider)的基本使用(一)
date:   2017-09-27
categories: PHP
tags: [Yii2,SqlDataProvider,SQL数据提供者]
author: Ganace
update: 2017-09-28
comment: false
---

这里是一篇Ganace记录的关于SQL数据提供者(SqlDataProvider)的基本使用的文章。


## Models

---
####  基本使用

- 在首页加后缀`?r=gii`，使用gii生成模型类。
- 打开生成的含有search名字的文件头部添加`use yii\data\SqlDataProvider;`如下：
{% highlight ruby %}

<?php
namespace app\models;
use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use yii\data\SqlDataProvider;
//...

{% endhighlight %}
-在生成的含有search名字的模型类中，寻找search方法,没有则自己添加在search方法中添加如下代码：
{% highlight ruby %}

$sql = 'SELECT * FROM `post` WHERE `date` LIKE '2017%''
$sql_count = 'SELECT COUNT(\*) `post` WHERE `date` LIKE '2017%'';
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
            'name',
            'title',
            'num',
            'date',
        ],
    ],
]);
return $dataProvider;

{% endhighlight %}

####  代码说明

- 其中'totalCount'是分页属性，按照$count中查询出的当前页数据来只显示当前页数据；$sql_count是计算$sql查询出的结果的数据项总数，是个计数查询

- 其中'pagination'是设置每页数据量的属性，"'pageSize' =>25"表示每页显示25条数据

- 其中'sort'是排序属性，'attributes'中列出的字段名如'name'、'title'、'num'等都会在渲染页面具有排序功能

---

## Controllers

---
####  基本使用

-在gii生成的控制器中寻找index动作，即名为actionIndex的方法，添加如下代码:
{% highlight ruby %}

public function actionIndex()
{
    $searchModel = new XspaydetailSearch();
    $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
    return $this->render('index', [
        'searchModel' => $searchModel,
        'dataProvider' => $dataProvider,
    ]);
}

{% endhighlight %}

####  代码说明

- 其中'$searchModel'是查询过滤的结果数据(查询模块)。

- 其中'$dataProvider'是结果数据(数据模块)。

- 其中
{% highlight ruby %}
return $this->render('index', [
    'searchModel' => $searchModel,
    'dataProvider' => $dataProvider,
]);
{% endhighlight %}
是渲染页面，向index传递数据$searchModel与$dataProvider。


---

[【Yii2\|SQL数据提供者】关于SQL数据提供者(SqlDataProvider)的基本使用(二)](https://ganace.github.io/posts/php/yii2-SqlDataProvider1.html)

[【Yii2\|Yii2-Admin】关于（基于RBAC的权限管理扩展组件）Yii2-Admin的基本使用(一)](https://ganace.github.io/posts/php/yii2-yii2-admin0.html)

---

