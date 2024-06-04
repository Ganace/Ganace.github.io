---
layout: post
title: 【TypeScript】TypeScript类型体操(十三) 中等挑战
date: 2024-03-30
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[LastIndexOf](#part-1) 、[数组去重 Unique](#part-2) 、[MapTypes](#part-3)

[Construct Tuple](#part-4) 、[Number Range](#part-5) 、[Combination](#part-6)

---

## 中等挑战

{: #part-1}

### 一、`LastIndexOf`

##### 实现类型版本的 `Array.lastIndexOf`, `LastIndexOf<T, U>` 接受数组 `T`, `any` 类型 `U`, 如果 `U` 存在于 `T` 中, 返回 `U` 在数组 `T` 中最后一个位置的索引, 不存在则返回 `-1`

```ts
type IsEqual<T, U> = U extends T ? (T extends U ? true : false) : false;
type LastIndexOf<T extends any[], U> = T extends [...infer L, infer R] ? (IsEqual<R, U> extends true ? L["length"] : LastIndexOf<L, U>) : -1;
```

{: #part-2}

### 二、数组去重`Unique`

##### 实现类型版本的 `Lodash.uniq` 方法, `Unique` 接收数组类型 `T`, 返回去重后的数组类型.

```ts
type IsInclude<T, U> = U extends [infer F, ...infer Rest] ? (Equal<F, T> extends true ? true : IsInclude<T, Rest>) : false;
type Unique<T, U extends any[] = []> = T extends [infer R, ...infer F] ? (IsInclude<R, U> extends true ? Unique<F, [...U]> : Unique<F, [...U, R]>) : U;
```

{: #part-3}

### 三、`MapTypes`

##### Implement `MapTypes<T, R>` which will transform types in object `T` to different types defined by type `R` which has the following structure

```ts
type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };
MapTypes<{ iWillBeNumberOrDate: string }, StringToDate | StringToNumber>; // gives { iWillBeNumberOrDate: number | Date; }
```

```ts
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
    [K in keyof T]: T[K] extends R["mapFrom"] ? (R extends { mapFrom: T[K] } ? R["mapTo"] : never) : T[K];
};
```

{: #part-4}

### 四、`Construct Tuple`

##### 构造一个给定长度的元组。

`type result = ConstructTuple<2> // 期望得到 [unknown, unkonwn]`

```ts
type ConstructTuple<L extends number, U extends unknown[] = []> = L extends U["length"] ? U : ConstructTuple<L, [...U, unknown]>;
```

{: #part-5}

### 五、`Number Range`

##### Sometimes we want to limit the range of numbers... For examples.

`type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 `

```ts
type NumberRange<L extends number, H extends number, Idx extends 1[] = L extends 0 ? [] : [1, 1], Res = never> = Idx["length"] extends H
    ? H | Res
    : NumberRange<L, H, [...Idx, 1], Idx["length"] | Res>;
```

{: #part-6}

### 六、`Combination`

##### Given an array of strings, do Permutation & Combination. It's also useful for the prop types like video `controlsList`

For example:

```ts
// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<["foo", "bar", "baz"]>;
```

Answer:

```ts
type Combination<T extends string[], All = T[number], Item = All> = Item extends string ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}` : never;
```

---
