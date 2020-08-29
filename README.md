#### 座右铭

火在一天之内把森林烧成灰烬，水和风却需要一百年以上的时间来造林。

#### 介绍

故乡美景：“江作青罗带，山如碧玉簪”。

求学美食：荔枝木菠萝，卷粉炒米糖。

求生之路：周周作一休，日日学厨诗。

一个自得其乐的Ganace。

#### 主题

这个[jekyll](https://jekyllrb.com)主题是基于[materialize](http://materializecss.com)实现的。有关更多详细信息，您可以查看github repo：[mumuxme/materialize-jekyll](https://github.com/mumuxme/materialize-jekyll)


#### 所有

Copyright&nbsp;&copy;&nbsp;Ganace

- - -

如果有任何<b>问题</b>, 请发送一封 <b>邮件</b>给我。 

至于所有文章（除了参考资料）均属于<b>Ganace</b>,分享请带上原始链接及作者名等来源信息。

- - -

#### 个人信息

Email: Ganace@foxmail.com



Materialize - jekyll
==============


## Introducton

This jekyll theme is based on [materialize](http://materializecss.com).
(NOTE: this theme is only made for my own, but you can modify it freely.)

[Open demo](https://mumuxme.github.io/materialize-jekyll/)


## Getting start

#### Install

You may need some dev headers, for debian/linux, just run:

```
# apt-get install liblzma-dev zlib1g-dev
```

(Other dependencies may also needed.)

```
$ git clone https://github.com/mumuxme/materialize-jekyll
$ cd materialize-jekyll
$ bundle install
```

#### Run

1. Modify `_config.yml`, `about.md` and other(whatever you need).
2. You can add a `favicon.ico` file in the project root directory.
3. If you want to use google analytics, add your `google-analytics.js` into `js` directory.

Then:

```
$ bundle exec jekyll s

# or start with draft
$ bundle exec jekyll s --drafts
```

## Or start with docker

```
cd materialize-jekyll

# export GEM_MIRROR=mirror.https://rubygems.org
export GEM_MIRROR='Your-ruby-gem-mirror'

./build-image.sh

./run.sh
```


## Other

#### Emoji

You can use GitHub-flavored emoji. See [emoji cheat sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/)

#### TODO

- Add comment. (???)
- Add options to choose self host or cdn.


## License

[GNU GPL v3](http://www.gnu.org/licenses/).

Others:

- jquery: <https://jquery.com>
- materialize: <http://materializecss.com>
- material-scrolltop: [bartholomej/material-scrolltop](https://github.com/bartholomej/material-scrolltop)
- material design icon: [Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign) or <https://materialdesignicons.com/getting-started>
- GitHub-flavored emoji plugin: [jemoji](https://github.com/jekyll/jemoji)
