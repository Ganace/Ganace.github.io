---
layout: post
title: 【Blog|文章模板】记录如何写md格式_post文章
date:   2017-09-02
categories: Zero-Jekyll-Blog
tags: [posts, markdown,文章模板]
author: Ganace
update: 2020-09-29
comment: false
---

这里是一篇Ganace记录的如何写markdown格式文章，放入GitHub Page Blog"posts"文件夹中的文章。


## markdown文件头

---

- `layout: post`
    : 这里不能做修改.
- `title`
    : 这是文章的标题，格式：`title: 关于博客`
- `author`
    : 这是文章的作者，默认是网站的作者，格式：`author: Ganace`.
- `date`
    : 这是文章写作或者发布时间，格式如： `date: 2017-09-20` or `data: 2017-09-20 17:18:35`
- `categories`
    : 这是文章隶属的类目名称，格式如： `categories: Ganace`, `categories: Ganace-post`
    : 如果要把一篇文章放入多个类目，只要把类目之间空格就可以了。
- `tags` (可选)
    : 这是文章的标签，可选，格式如： `tags: [PHP, CURL]`.

---

- `mathjax` (可选)
    : 选择是否启用mathjax，true为启用，否则禁用，格式如： `mathjax: true`
- `update` (可选)
    : 文章的更新时间，可选，格式如 `update: 2017-09-21`
- `comment` (可选)
    : 选择是否启用评论，true为启用，否则禁用，格式如： `comment: true`
- `published` (可选)
    : 选择是否发布，格式如： `published: true`

---


### markdown文件内容

---

可以使用所有markdown格式的内容

## 链接\图片\代码

### 链接

[链接](https://ganace.gitee.io/)

[链接](https://ganace.gitee.io/)

```ruby
[链接](https://ganace.gitee.io/)
[链接](https://ganace.gitee.io/)
```

### 图片

![Screenshot](https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2247692397,1189743173&fm=5)

![image][pic0]

![布偶猫]({{ site.post_img_url }}/202009/cat.jpg)

![布偶猫]({{ "/202009/cat.jpg" | prepend: site.post_img_url }})

```ruby
![Screenshot](https://i0.hdslb.com/bfs/archive/22650682fd25a4a5aa96dd9ef53190c6b8d54912.png)
![image][pic0]
[pic0]:data:image/png;base64,……
![布偶猫]({{ site.post_img_url }}/202009/cat.jpg)
![布偶猫]({{ "/202009/cat.jpg" | prepend: site.post_img_url }})
```

### 代码

#### 输出双大括号

{%raw%}
  {{  message  }}
{%endraw%}
```js
{％raw％}{%raw%}
  {{  message  }}
{%endraw%}{％endraw％}
```
％替换成%

#### 代码

```javascript
~~~javascript
console.log('Ganace');
~~~
```

~~~javascript
```ruby
console.log('Ganace');
```
~~~

~~~js
document.getElementById("myBtn").addEventListener("click", displayDate);
```js
document.getElementById("myBtn").addEventListener("click", displayDate);
```
~~~

~~~php
<?php
echo "Hello World!";
?>
```php
<?php
echo "Hello World!";
?>
```
~~~

~~~sql
SELECT COUNT(*) FROM tablename
```sql
SELECT COUNT(*) FROM tablename
```
~~~

~~~html
<form action="form_action.asp" method="get">
  First name: <input type="text" name="fname" />
  Last name: <input type="text" name="lname" />
  <input type="submit" value="Submit" />
</form>
```html
<form action="form_action.asp" method="get">
  First name: <input type="text" name="fname" />
  Last name: <input type="text" name="lname" />
  <input type="submit" value="Submit" />
</form>
```
```xml
<form action="form_action.asp" method="get">
  First name: <input type="text" name="fname" />
  Last name: <input type="text" name="lname" />
  <input type="submit" value="Submit" />
</form>
```
~~~

### 标题

# 标题1

## 标题2

### 标题3

#### 标题4

##### 标题5

###### 标题6

```
# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6
```

## 分行

第一行 北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”

第二行 野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟，置杯焉则胶，水浅而舟大也。
    
```
第一行 北冥有鱼，……

第二行 野马也，尘埃也，……
```

## 添加类名\引用\标注

### 添加类名

{: .my-class}
hello

```ruby
{: .my-class}
hello
```
### 引用

 北冥有鱼，其名为鲲。[^1]

```ruby
北冥有鱼，其名为鲲。[^1]

[^1]:
    庄子，《逍遥游》
```

### 标注

到头来，依旧是风尘骯髒违心愿。**<sup>按：骯，口朗切，仄声，音慷。骯髒，义即不屈</sup>**好一似，无瑕美玉遭泥陷；又何须，王孙公子叹无缘？

```
到头来，依旧是风尘骯髒违心愿。**<sup>按：骯，口朗切，仄声，音慷。骯髒，义即不屈</sup>**好一似，无瑕美玉遭泥陷；又何须，王孙公子叹无缘？
```


---

[^1]:
    庄子，《逍遥游》


[pic0]:data:image/jpg;base64,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