---
layout: post
title: 【webpack】webpack打包出现WARNING in configuration The 'mode' option has not been set, webpack will fallback to 'production' for this value. 错误
date:   2020-07-16
categories: Webpack
tags: [vue,webpack]
author: Ganace
comment: false
---

webpack打包出现WARNING in configuration The 'mode' option has not been set, webpack will fallback to 'production' for this value. 错误


## 代码

---

####  1.问题:webpack打包运行的时候出现以下错误

{% highlight ruby %}

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
{% endhighlight %}

####  3.解决办法

方法一：新建webpack配置文件webpack.config.js，在配置文件中，设置mode开发模式（production or development），例：
{% highlight ruby %}

module.exports = {
  mode: 'development'
};
{% endhighlight %}

方法二：直接在命令行中设置mode开发模式
{% highlight ruby %}

webpack ./src/main.js -o ./dist/bundle.js --mode=development
{% endhighlight %}
---

