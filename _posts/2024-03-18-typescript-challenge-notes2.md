---
layout: post
title: 【TypeScript】TypeScript类型体操(二) 简单挑战
date: 2024-03-18
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[Awaited](#part-1)、[If](#part-2)、[Concat](#part-3)、[Includes](#part-4)

[Push](#part-5)、[Unshift](#part-6)、[Parameters](#part-7)

---

## 简单挑战

### 一、Awaited

{: #part-1}

##### 假如我们有一个 `Promise` 对象，这个 `Promise` 对象会返回一个类型。在 TS 中，我们用 `Promise` 中的 `T` 来描述这个 `Promise` 返回的类型。请你实现一个类型，可以获取这个类型。

```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? (U extends PromiseLike<any> ? MyAwaited<U> : U) : never;
```

##### `TypeScript`提供的工具类型：

`Awaited<Type>` 用来获取 Promise 返回的类型

### 二、If

{: #part-2}

##### 实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

```ts

```

### 三、Concat

{: #part-3}

##### 在类型系统里实现 `JavaScript` 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

```ts
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];
```

### 四、Includes

{: #part-4}

##### 在类型系统里实现 `JavaScript` 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。

```ts
//源版
type Includes<T extends readonly any[], U> = {
    [P in T[number]]: true;
}[U] extends true
    ? true
    : false;
```

```ts
//修订版
type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : false;

type Includes<Value extends any[], Item> = IsEqual<Value[0], Item> extends true ? true : Value extends [Value[0], ...infer rest] ? Includes<rest, Item> : false;
```

### 五、Push

{: #part-5}

##### 在类型系统里实现通用的 `Array.push` 。

```ts
type Push<T extends unknown[], U> = [...T, U];
```

### 六、Unshift

{: #part-6}

##### 实现类型版本的 `Array.unshift` 。

```ts
type Unshift<T extends unknown[], U> = [U, ...T];
```

### 七、Parameters

{: #part-7}

##### 实现内置的`Parameters` 类型，而不是直接使用它

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any;
```

##### `TypeScript`提供的工具类型：

`Parameters<Type>` 从函数类型 `Type` 的参数中使用的类型构造元组类型。

---
