---
layout: post
title: 【TypeScript】TypeScript类型体操(十二) 中等挑战
date: 2024-03-29
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[Fill](#part-1)、[Trim Right](#part-2)、[去除数组指定元素](#part-3)
[Trunc](#part-4)、[IndexOf](#part-5)、[Join](#part-6)

---

## 中等挑战

### 一、`Fill`

{: #part-1}

##### `Fill`, a common JavaScript function, now let us implement it with types. `Fill<T, N, Start?, End?>`, as you can see,`Fill` accepts four types of parameters, of which `T` and `N` are required parameters, and Start and End are optional parameters. The requirements for these parameters are: `T` must be a `tuple`, `N` can be any type of value, Start and End must be integers greater than or equal to 0.

`type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]`

```ts
type Fill<T extends unknown[], N, Start extends number = 0, End extends number = T["length"], L extends any[] = []> = T extends [infer F, ...infer R]
    ? [...L, 0][Start] extends undefined
        ? Fill<R, N, Start, End, [...L, F]>
        : [...L, 0][End] extends undefined
        ? Fill<R, N, Start, End, [...L, N]>
        : Fill<R, N, Start, End, [...L, F]>
    : L;
```

### 二、`Trim Right`

{: #part-2}

##### 实现 `TrimRight<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。

`type Trimed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'`

```ts
type TrimRight<S extends string> = S extends `${infer L}${" " | "\n" | "\t"}` ? TrimRight<L> : S;
```

### 三、去除数组指定元素

{: #part-3}

##### 实现一个像 `Lodash.without` 函数一样的泛型 `Without<T, U>`，它接收数组类型的 `T` 和数字或数组类型的 `U` 为参数，会返回一个去除 `U` 中元素的数组 `T`

例如：

```ts
type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
```

```ts
type Without<T extends unknown[], U extends unknown | unknown[]> = T extends [infer F, ...infer R]
    ? F extends U
        ? Without<R, U>
        : U extends unknown[]
        ? F extends U[number]
            ? Without<R, U>
            : [F, ...Without<R, U>]
        : [F, ...Without<R, U>]
    : T;
```

### 四、`Trunc`

{: #part-4}

##### Implement the type version of `Math.trunc`, which takes string or number and returns the integer part of a number by removing any fractional digits.

`type A = Trunc<12.34> // 12`

```ts
type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer _}` ? (F extends "" ? "0" : F) : `${T}`;
```

### 五、`IndexOf`

{: #part-5}

##### Implement the type version of `Array.indexOf`, `indexOf<T, U>` takes an Array `T`, any `U` and returns the index of the first `U` in Array `T`.

For example:

```ts
type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
```

Answer:

```ts
type IndexOf<T extends unknown[], U, N extends unknown[] = []> = T extends [infer F, ...infer R] ? (Equal<F, U> extends true ? N["length"] : IndexOf<R, U, [...N, F]>) : -1;
```

##### `TypeScript`提供的工具类型：

`ReturnType<Type>` 构造一个由函数 `Type` 的返回类型组成的类型。

### 六、`Join`

{: #part-6}

##### Implement the type version of `Array.join`, `Join<T, U>` takes an Array `T`, string or number `U` and returns the Array `T` with `U` stitching up.

For example:

```ts
type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'
```

Answer:

```ts
type Join<T extends any[], U extends string | number = ","> = T extends [infer F extends string, ...infer R] ? (R["length"] extends 0 ? `${F}` : `${F}${U}${Join<R, U>}`) : "";
```

---
