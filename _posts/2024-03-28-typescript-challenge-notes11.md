---
layout: post
title: 【TypeScript】TypeScript类型体操(十一) 中等挑战
date: 2024-03-28
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[斐波那契序列](#part-1)、[`AllCombinations`](#part-2)、[`GreaterThan`](#part-3)

[`Zip`](#part-4)、[`IsTuple`](#part-5)、[`Chunk`](#part-6)

---

## 中等挑战

### 一、斐波那契序列

{: #part-1}

##### Implement a generic `Fibonacci<T>` takes an number `T` and returns it's corresponding Fibonacci number.

The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

For example:

```ts
type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21
```

Answer:

```ts
type Fibonacci<T extends number, CurrentIndex extends any[] = [1], Prev extends any[] = [], Current extends any[] = [1]> = CurrentIndex["length"] extends T
    ? Current["length"]
    : Fibonacci<T, [...CurrentIndex, 1], Current, [...Prev, ...Current]>;
```

### 二、`AllCombinations`

{: #part-2}

##### Implement type `AllCombinations<S>` that return all combinations of strings which use characters from S at most once.

For example:

```ts
type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
```

Answer:

```ts
type StrToUnion<S> = S extends `${infer F}${infer R}` ? F | StrToUnion<R> : never;
type AllCombinations<S extends string, U extends string = StrToUnion<S>> = [U] extends [never] ? "" : "" | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];
```

### 三、`GreaterThan`

{: #part-3}

##### In This Challenge, You should implement a type `GreaterThan<T, U>` like `T` > `U`

Negative numbers do not need to be considered.

For example

```ts
GreaterThan<2, 1>; //should be true
GreaterThan<1, 1>; //should be false
GreaterThan<10, 100>; //should be false
GreaterThan<111, 11>; //should be true
```

Answer:

```ts
type ParseInt<T> = T extends `${infer X extends number}` ? X : never;

type RemoveLeadingZeros<T extends string> = T extends "0" ? T : T extends `${0}${infer Rest}` ? RemoveLeadingZeros<Rest> : T;

type InnerMinusOne<T extends string> = T extends `${infer X extends number}${infer Y}` ? (X extends 0 ? `9${InnerMinusOne<Y>}` : `${[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8][X]}${Y}`) : "";

type Reverse<T extends string> = T extends `${infer X}${infer Y}` ? `${Reverse<Y>}${X}` : "";

type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<Reverse<InnerMinusOne<Reverse<`${T}`>>>>>;

type InnerGreaterThan<T extends number, U extends number> = T extends U ? true : T extends 0 ? false : InnerGreaterThan<MinusOne<T>, U>;

type GreaterThan<T extends number, U extends number> = T extends U ? false : U extends 0 ? true : InnerGreaterThan<T, U>;
```

### 四、`Zip`

{: #part-4}

##### In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`

`type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]`

```ts
type Zip<T, U, Rt extends unknown[] = []> = T extends [infer F1, ...infer R1] ? (U extends [infer F2, ...infer R2] ? Zip<R1, R2, [...Rt, [F1, F2]]> : Rt) : Rt;
```

### 五、`IsTuple`

{: #part-5}

##### Implement a type `IsTuple`, which takes an input type `T` and returns whether `T` is tuple type.

For example:

```ts
type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false
```

Answer:

```ts
type IsTuple<T> = [T] extends [never] ? false : T extends readonly any[] ? (number extends T["length"] ? false : true) : false;
```

### 六、`Chunk`

{: #part-6}

##### Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it. `Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`

For example:

```ts
type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
```

Answer:

```ts
type Chunk<T extends any[], U extends number = 1, S extends any[] = []> = T extends [infer F, ...infer R]
    ? S["length"] extends U
        ? [S, ...Chunk<T, U>]
        : Chunk<R, U, [...S, F]>
    : S["length"] extends 0
    ? S
    : [S];
```

---
