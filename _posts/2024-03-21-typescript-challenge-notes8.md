---
layout: post
title: 【TypeScript】TypeScript类型体操(八) 中等挑战
date: 2024-03-21
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[剔除指定字符 Drop Char](#part-1)、[数字减一 MinusOne](#part-2)、[PickByType](#part-3)

[StartsWith](#part-4)、[EndsWith](#part-5)、[PartialByKeys](#part-6)

---

## 中等挑战

### 一、剔除指定字符 `Drop Char`

{: #part-1}

##### 从字符串中剔除指定字符。

```ts
type DropChar<S extends string, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;
```

### 二、数字减一 `MinusOne`

{: #part-2}

##### 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

```ts
// Reverses a string: '123' -> '321'
type Reverse<S extends string, A extends string = ""> = S extends `${infer F}${infer R}` ? Reverse<R, `${F}${A}`> : A;

// Subtract one from a digit: '1' -> '0', '5' -> '4', '0' -> '9'
type DigitMinusOne<D extends string> = "09876543210" extends `${string}${D}${infer R}${string}` ? R : never;

// Subtract one from a reversed number: '5' -> '4', '01' -> '9', '51' -> '41', '001' -> '99'
type RevMinusOne<T extends string> = T extends `${infer F}${infer N}${infer R}`
    ? // if `T` is a multi-digit number like '01', '55' or '123'
      F extends "0"
        ? `9${RevMinusOne<`${N}${R}`>}`
        : `${DigitMinusOne<F>}${N}${R}`
    : // if `T` is a single-digit number like '0', '1' or '8'
    T extends "0"
    ? "1-"
    : T extends "1"
    ? ""
    : DigitMinusOne<T>;

// Reverse `T`, subtract one from reversed, reverse back, and convert to number
type MinusOne<T extends number> = Reverse<RevMinusOne<Reverse<`${T}`>>> extends `${infer Res extends number}` ? Res : 0;
```

### 三、`PickByType`

{: #part-3}

##### From `T`, pick a set of properties whose type are assignable to `U`.

```ts
// For Example
type OnlyBoolean = PickByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },
    boolean
>; // { isReadonly: boolean; isEnable: boolean; }
```

```ts
type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: U;
};
```

### 四、`StartsWith`

{: #part-4}

##### 实现`StartsWith<T, U>`,接收两个`string`类型参数,然后判断`T`是否以`U`开头,根据结果返回`true`或`false`

```ts
type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;
```

```ts
type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;
```

### 五、`EndsWith`

{: #part-5}

##### 实现`EndsWith<T, U>`,接收两个`string`类型参数,然后判断`T`是否以`U`结尾,根据结果返回`true`或`false`

```ts
type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;
```

### 六、`PartialByKeys`

{: #part-6}

##### 实现一个通用的`PartialByKeys<T, K>`，它接收两个类型参数 T 和 K。

`K`指定应设置为可选的 T 的属性集。当没有提供`K`时，它就和普通的`Partial<T>`一样使所有属性都是可选的。

```ts
type Merge<T> = {
    [K in keyof T]: T[K];
};

type PartialByPs<T extends {}, K extends keyof T = any> = Merge<
    {
        [P in keyof T as P extends K ? P : never]?: T[P];
    } & {
        [P in keyof T as P extends K ? never : P]: T[P];
    }
>;
```

---
