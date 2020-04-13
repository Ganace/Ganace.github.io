---
layout: post
title: 【Yii2|RABC】关于Yii2中RABC所有表的SQL语句
date:   2017-10-14
categories: PHP
tags: [Yii2,RABC,SQL]
author: Ganace
comment: false
---

这里是一篇Ganace记录的关于Yii2中RABC所有表的SQL语句的文章。


## SQL语句如下

---

{% highlight ruby %}

CREATE TABLE `auth_rule` (
  `name` VARCHAR(64) CHARACTER SET utf8 NOT NULL,
  `data` BLOB,
  `created_at` INT(11) DEFAULT NULL,
  `updated_at` INT(11) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE `auth_item` (
  `name` VARCHAR(64) CHARACTER SET utf8 NOT NULL,
  `type` SMALLINT(6) NOT NULL,
  `description` TEXT CHARACTER SET utf8,
  `rule_name` VARCHAR(64) CHARACTER SET utf8 DEFAULT NULL,
  `data` BLOB,
  `created_at` INT(11) DEFAULT NULL,
  `updated_at` INT(11) DEFAULT NULL,
  PRIMARY KEY (`name`),
  KEY `rule_name` (`rule_name`),
  KEY `type` (`type`),
  CONSTRAINT `auth_item_ibfk_1` FOREIGN KEY (`rule_name`) REFERENCES `auth_rule` (`name`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE `auth_item_child` (
  `parent` VARCHAR(64) CHARACTER SET utf8 NOT NULL,
  `child` VARCHAR(64) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`parent`,`child`),
  KEY `child` (`child`),
  CONSTRAINT `auth_item_child_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `auth_item_child_ibfk_2` FOREIGN KEY (`child`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE `auth_assignment` (
  `item_name` VARCHAR(64) CHARACTER SET utf8 NOT NULL,
  `user_id` VARCHAR(64) CHARACTER SET utf8 NOT NULL,
  `created_at` INT(11) DEFAULT NULL,
  PRIMARY KEY (`item_name`,`user_id`),
  CONSTRAINT `auth_assignment_ibfk_1` FOREIGN KEY (`item_name`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE `menu` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) CHARACTER SET utf8 DEFAULT NULL,
  `parent` INT(11) DEFAULT NULL,
  `route` VARCHAR(256) CHARACTER SET utf8 DEFAULT NULL,
  `order` INT(11) DEFAULT NULL,
  `data` BLOB,
  PRIMARY KEY (`id`),
  KEY `parent` (`parent`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `menu` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  `auth_key` VARCHAR(32) CHARACTER SET utf8 NOT NULL,
  `password_hash` VARCHAR(256) CHARACTER SET utf8 NOT NULL,
  `password_reset_token` VARCHAR(256) CHARACTER SET utf8 DEFAULT NULL,
  `email` VARCHAR(256) CHARACTER SET utf8 NOT NULL,
  `status` INT(11) NOT NULL DEFAULT '10',
  `created_at` INT(11) NOT NULL,
  `updated_at` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

{% endhighlight %}

---