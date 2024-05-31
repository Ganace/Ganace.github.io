---
layout: post
title: 【Vue】Vue3+TypeScript+Vite项目笔记
date: 2024-03-23
categories: Front-end-Foundation
tags: [Vue, TypeScript, Vite]
author: Ganace
comment: false
---

记录一下用 Vue3+TypeScript+Vite 写得项目的总结笔记，温故知新。

###### SVG 图标 vite-plugin-svg-icons

###### 集成 sass

###### vite-plugin-mock 在 Vite 项目中模拟数据

###### axios 二次封装

###### vue-router 模板路由配置

---

## svg 图标在项目中使用

[vite-plugin-svg-icons github 官方文档](https://github.com/reaway/vite-plugin-svg-icons/blob/HEAD/README.zh_CN.md)

#### 安装

`npm install vite-plugin-svg-icons -D`

#### 配置

```jsx 
// vite.config.ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',

        /**
         * 自定义插入位置
         * @default: body-last
         */
        inject?: 'body-last' | 'body-first'

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
    ],
  }
}
```

#### 引入

```jsx 
// 在 src/main.ts 内引入注册脚本
import "virtual:svg-icons-register";
```

#### 使用

```js 
// /src/components/SvgIcon.vue
<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  },
})
</script>
```

```js 
// /src/App.vue
<template>
  <div>
    <SvgIcon name="icon1"></SvgIcon>
    <SvgIcon name="icon2"></SvgIcon>
    <SvgIcon name="icon3"></SvgIcon>
    <SvgIcon name="dir-icon1"></SvgIcon>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

import SvgIcon from './components/SvgIcon.vue'
export default defineComponent({
  name: 'App',
  components: { SvgIcon },
})
</script>
```

#### Typescript 支持

如果使用 Typescript,你可以在 tsconfig.json 内添加

```js 
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vite-plugin-svg-icons/client"]
  }
}
```

## 集成 sass

#### 安装

`npm install sass`

#### 引入 sass

```js 
// main.ts
import "@/styles/index.sass";
```

#### ./styles/index.sass

```js 
// 引入清除默认样式
@import './reset.scss'
```

#### vite.config.js

```js 
// 引入scss全局变量配置 preprocessorOptions.scss.javascriptOptions: true
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/variable.scss"',
            },
        },
    },
});
```

## vite-plugin-mock 在 Vite 项目中模拟数据

#### 安装

`npm install -D vite-plugin-mock mockjs`

#### 配置与使用

```js 
// vite.config.js
import { UserConfigExport, ConfigEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";

export default ({ command }: ConfigEnv): UserConfigExport => {
    return {
        plugins: [
            vue(),
            viteMockServe({
                // default
                mockPath: "mock",
                localEnabled: command === "serve",
            }),
        ],
    };
};
```

```js 
// mock/test.ts
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
] as MockMethod[]

```

## axios 二次封装

#### 安装

`npm install axios`

#### 配置使用

```js 
// utils/request.js
//创建axios实例， baseURL等可以从配置读取
const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
//添加请求/响应拦截器，
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  //config配置对象，headers属性请求头，经常给服务端携带公共参数
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么 简化数据 return response.data
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
```

#### API 接口统一管理

```js 
// api/user/index.ts，api/user/type.ts统一管理用户相关接口

//api/user/index.ts
import request from "@/utils/request";
import { loginForm, loginResponseData, userResponseData } "./type"
enum API {//统一管理接口
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
//暴露请求函数
export const reqLogin = (data: loginForm)=request.post<any, loginResponseData > (API.LOGIN_URL, data)
export const reqUserInfo = () = request.post<any, userResponseData>(API.USERINFO_URL, data)
//api/user/type.ts
//接口请求数据类型
export interface loginFrom {
  username: string,
  password: string
}
interface dataType {
  token: string
}
//接口返回数据类型
export interface loginResponseData {
  code: number,
  data: dataType
}
//服务器返回用户相关信息
interface userInfo {
  useeId: number,
  avatar: string,
  username: string,
  password: string,
  roles: string[]
  //……
}
interface user {
  checkUser: userInfo
}
export interface userResponseData {
  code: number,
  data: user
}
```

## vue-router 模板路由配置

#### 安装

`npm install vue-router`

#### 配置使用

```js 
// views/login/index.vue，views/home/index.vue, views/404/index.vue
// router/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes.ts";
let router = createRouter({
    history: createWebHashHistory(),
    routers: constantRoute,
    //滚动行为
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});
export default router;
```

```js 
// router/routes.ts
export const constantRoute = [
    { path: "/login", name: "login", component: () => import("@/views/login/index.vue") },
    { path: "/", name: "layout", component: () => import("@/views/home/index.vue") },
    { path: "/404", name: "404", component: () => import("@/views/404/index.vue") },
    { path: "/:pathMatch(.*)*", name: "any", redirect: "404" },
];
```

```js 
// main.ts 注册路由
import router from "./router";
app.use(router);
```

```js 
// App.vue
<router-view></router-view>
```

---
