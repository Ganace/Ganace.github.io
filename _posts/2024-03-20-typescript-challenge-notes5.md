---
layout: post
title: 【TypeScript】TypeScript类型体操(五) 中等挑战
date: 2024-03-20
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

###### 字符串字符替换 `Replace` | 字符串字符替换(所有) `ReplaceAll` | 追加参数 | 联合类型的全排列 `Permutation` | 计算字符串的长度 `Length of String` |

---

## 中等挑战

### 一、字符串字符替换 `Replace`

##### 实现 `Replace<S, From, To>` 将字符串 `S` 中的第一个子字符串 `From` 替换为 `To`

```ts 
type Replace<S extends string, From extends string, To extends string> =
  S extends `${infer L}${From extends '' ? never : From}${infer R}`
  ? `${L}${To}${R}`
  : S
```

```ts 
type Replace<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer V}${From}${infer R}`
  ? `${V}${To}${R}`
  : S
```

### 二、字符串字符替换(所有) `ReplaceAll`

##### 实现 `ReplaceAll<S, From, To>` 将一个字符串 `S` 中的所有子字符串 `From` 替换为 `To`。

```ts 
type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer L}${From }${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S
```

### 三、追加参数

##### 实现一个泛型 `AppendArgument<Fn, A>`，对于给定的函数类型 `Fn`，以及一个任意类型 `A`，返回一个新的函数 `G`。`G` 拥有 `Fn` 的所有参数并在末尾追加类型为 `A` 的参数。

```ts 
type AppendArgument<Fn, A> =
  Fn extends (...args: infer P) => infer R
  ? (...args: [...P, A]) => R
  : never
```

### 四、联合类型的全排列 `Permutation`

##### 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

```ts 
type Permutation<T, K = T> =
  [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never
```

### 五、计算字符串的长度 `Length of String`

##### 计算字符串的长度，类似于 `String#length` 。

```ts 
// 先通过递归将字符串转化为数组，再通过数组的 length 属性获取数组长度
type StringToArray<S extends string> = S extends `${infer T}${infer R}` ? [T, ...StringToArray<R>] : [];
type LengthOfString<S extends string> = StringToArray<S>['length']
```

```ts 
type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T['length'];
```

```ts 
type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${string}${infer R}`
  ? LengthOfString<R, [...T, string]>
  : T['length'];
```

### 六、数组扁平化 `Flatten`

##### 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

```ts 
type Flatten<T extends unknown[], U extends unknown[] = []> =
  T extends [infer F, ...infer R]
  ? F extends unknown[] ?
  Flatten<[...F, ...R], U>
  : Flatten<R, [...U, F]>
  : U
```

```ts 
type Flatten<T extends unknown[]> =
  T extends [infer F, ...infer R]
  ? F extends unknown[]
  ? [...Flatten<F>, ...Flatten<R>]
  : [F, ...Flatten<R>]
  : T
```

---
