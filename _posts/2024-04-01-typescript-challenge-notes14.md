---
layout: post
title: 【TypeScript】TypeScript类型体操(十四) 中等挑战
date: 2024-04-01
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[Combination](#part-1) 、[CheckRepeatedChars](#part-2) 、[FirstUniqueCharIndex](#part-3)

[Parse URL Params](#part-4) 、[获取数组的中间元素](#part-5) 、[找出目标数组中只出现过一次的元素](#part-6)

---

## 中等挑战

{: #part-1}

### 一、`Combination`

##### Given an array of unique elements, return all possible subsequences.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

For example:

```ts
type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
```

Answer:

```ts
type Subsequence<T extends any[], Prefix extends any[] = []> =
  T extends [infer F, ...infer R] ? Subsequence<R, Prefix | [...Prefix, F]> : Prefix
```

{: #part-2}

### 二、`CheckRepeatedChars`

##### 判断一个string类型中是否有相同的字符

For example:

```ts
type CheckRepeatedChars<'abc'>   // false
type CheckRepeatedChars<'aba'>   // true
```

Answer:

```ts
type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer E}` 
  ? E extends `${string}${F}${string}`
    ? true
    : CheckRepeatedChars<E>
  : false
```


{: #part-3}

### 三、`FirstUniqueCharIndex`

##### Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`. 

给定一个字符串 `s` ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 `-1` 。

```ts
type FirstUniqueCharIndex<
  T extends string,
  U extends string[] = []
> = T extends `${infer F}${infer R}`
  // 判断F 在不在 U中存在相同的
  ? F extends U[number]
    // 如果在就把F添加进去，此时也相当于索引+1了
    ? FirstUniqueCharIndex<R, [...U, F]>
    // 如果不在，继续判断F在不在R中存在
    : R extends `${string}${F}${string}`
      ? FirstUniqueCharIndex<R, [...U, F]>
      // 双重判断后都不在，就可以返回索引了
      : U['length']
  : -1
```

{: #part-4}

### 四、`Parse URL Params`

##### You're required to implement a type-level parser to parse URL params string into an Union.

For example:

```ts
ParseUrlParams<':id'> // id
ParseUrlParams<'posts/:id'> // id
ParseUrlParams<'posts/:id/:user'> // id | user
```

Answer:

```ts
type ParseUrlParams<T> = T extends `${string}:${infer R}`
  ? R extends `${infer P}/${infer L}`
    ? P | ParseUrlParams<L>
    : R
  : never
```

{: #part-5}

### 五、获取数组的中间元素

##### 通过实现一个 GetMiddleElement 方法，获取数组的中间元素，用数组表示

如果数组的长度为奇数，则返回中间一个元素 如果数组的长度为偶数，则返回中间两个元素

For example:

```ts
  type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>, // 返回 [3]
  type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // 返回 [3, 4]
```

Answer:

```ts
type GetMiddleElement<T extends any[]> = T extends [infer L, ...infer M, infer R]
  ? (M extends [] ? [L, R] : GetMiddleElement<M>)
  : T
```

{: #part-6}

### 六、找出目标数组中只出现过一次的元素

##### 找出目标数组中只出现过一次的元素。例如：输入`[1,2,2,3,3,4,5,6,6,6]`，输出`[1,4,5]`

```ts
// U收集不重复的数组项，O收集重复的数组项
type FindEles<T extends any[], U extends unknown[] = [], O extends unknown[] = []> =
  T extends [infer F, ...infer R]
  ? (F extends R[number] | O[number] ? FindEles<R, U, [...O, F]> : FindEles<R, [...U, F], O>)
  : U
```

---
