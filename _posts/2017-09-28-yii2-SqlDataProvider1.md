---
layout: post
title: 【Yii2|SQL数据提供者】关于SQL数据提供者(SqlDataProvider)的基本使用(二)
date:   2017-09-28
categories: Yii2
tags: [Yii2,SqlDataProvider,GridView]
author: Ganace
comment: false
---

这里是一篇记录关于SQL数据提供者(SqlDataProvider)的基本使用的文章。


## Views

---
####  基本使用
-在views文件中寻找gii生成的index.php文件，把其中GridView::widget小部件修改如下:
{% highlight ruby %}

<?= GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        ['class' => 'yii\grid\SerialColumn'],
        [
            'attribute' => 'name',
            'value' => 'name',
            'headerOptions' => [
                'class'=>'col-md-2 col-sm-2',
            ],
        ],
        [
            'attribute' => 'title',
            'value'=>function($data){
                if (empty($data['title'])) {
                    return '空';
                }else{
                    return $data['title'];
                }
            }
        ],
        [
            'attribute' => 'num',
            'value'=>function($data){
                if (empty($data['num'])) {
                    return '空';
                }else{
                    return $data['num'];
                }
            }
        ],
        'date', #直接使用数据模型列的数据
    ],
    'emptyText'=>'当前没有数据！', #没有数据时显示
    'layout'=>"{items}\n{pager}", #去掉"Showing 1-2 of 4 items."
]); ?>

{% endhighlight %}

####  代码说明
-其中`['class' => 'yii\grid\SerialColumn']`为表格提供头部信息

-其中`'dataProvider' => $dataProvider,`接收渲染数据模块，`'filterModel' => $searchModel,`接收查询过滤器模块

-其中'columns'提供各列属性。'attribute'定义该列使用数据提供者中哪一字段值，'value'定义显示在表格中的数据。'headerOptions'定义该列的头部样式。

---
