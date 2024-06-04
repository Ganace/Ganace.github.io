---
layout: post
title: 【TypeScript】TypeScript类型体操(四) 中等挑战
date: 2024-03-19
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[ 最后一个元素 Last ](#part-1)、[ 排除最后一项 Pop ](#part-2)、[Promise.all](#part-3)

[查找类型](#part-4)、[去除左侧空白](#part-5)、[字符串首字母大写 Capitalize](#part-6)

---

## 中等挑战

{: #part-1}

### 一、最后一个元素 `Last<T>`

##### 实现一个`Last<T>`泛型，它接受一个数组 T 并返回其最后一个元素的类型。

```ts
type Last<T extends any[]> = [any, ...T][T["length"]];
```

```ts
type Last<T extends unknown[]> = [unknown, ...T][T["length"]];
```

```ts
type Last<T extends any[]> = T extends [...any, infer L] ? L : T;
```

{: #part-2}

### 二、排除最后一项 `Pop<T>`

##### 实现一个泛型`Pop<T>`，它接受一个数组`T`，并返回一个由数组`T`的前 `N-1` 项（`N` 为数组`T`的长度）以相同的顺序组成的数组。

```ts
type Pop<T extends unknown[]> = T extends [...infer P, infer _] ? P : T;
```

```ts
// 额外 Push
type Push<T extends unknown[], U> = [...T, U];
// 额外 Shift
type Shift<T extends unknown[]> = T extends [unknown, ...infer U] ? U : never;
// 额外 Unshift
type Unshift<T extends unknown[], U> = [U, ...T];
```

{: #part-3}

### 三、`Promise.all`

##### 给函数`PromiseAll`指定类型，它接受元素为 `Promise` 或者类似 `Promise` 的对象的数组，返回值应为`Promise<T>`，其中 T 是这些 `Promise` 的结果组成的数组。

```ts
type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

declare function PromiseAll<T extends any[]>(
    values: readonly [...T]
): Promise<{
    [P in keyof T]: Awaited<T[P]>;
}>;
```

```ts
declare function PromiseAll<T extends readonly unknown[] | []>(
    values: T
): Promise<{
    -readonly [K in keyof T]: Awaited<T[K]>;
}>;
```

```ts
declare function PromiseAll<T extends unknown[]>(
    values: readonly [...T]
): Promise<{
    [K in keyof T]: Awaited<T[K]>;
}>;
```

##### `TypeScript`提供的工具类型：

`Awaited<Type>` 用来获取 Promise 返回的类型

{: #part-4}

### 四、查找类型

##### 有时，您可能希望根据某个属性在联合类型中查找类型。

在此挑战中，我们想通过在联合类型`Cat | Dog`中通过指定公共属性`type`的值来获取相应的类型。换句话说，在以下示例中，`LookUp<Dog | Cat, 'dog'>`的结果应该是`Dog`，`LookUp<Dog | Cat, 'cat'>`的结果应该是`Cat`。

```ts
type LookUp<U, T extends string> = {
    [K in T]: U extends { type: T } ? U : never;
}[T];
```

{: #part-5}

### 五、去除左侧空白

##### 实现 `TrimLeft<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。

```ts
type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S;
```

{: #part-6}

### 六、字符串首字母大写 `Capitalize`

##### 实现 `Capitalize<T>` 它将字符串的第一个字母转换为大写，其余字母保持原样。

```ts
type MyCapitalize<S extends string> = S extends `${infer F}${infer L}` ? `${Uppercase<F>}${L}` : S;
```

##### `TypeScript`提供的工具类型：

`Capitalize<StringType>` 将字符串中的第一个字符转换为等效的大写字母。

---
