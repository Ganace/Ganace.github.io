---
layout: post
title: 【TypeScript】TypeScript类型体操(七) 中等挑战
date: 2024-03-21
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[AnyOf](#part-1)、[IsNever](#part-2)、[IsUnion](#part-3)

[ReplaceKeys](#part-4)、[Remove Index Signature](#part-5)、[Percentage Parser](#part-6)

---

## 中等挑战

### 一、`AnyOf`

{: #part-1}

##### 类型系统中实现类似于 `Python` 中 `any` 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 `true`，否则返回 `false`。如果数组为空，返回 `false`。

```ts
type Falsy = 0 | "" | false | [] | { [key: string]: never } | undefined | null;
type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true;
```

### 二、`IsNever`

{: #part-2}

##### Implement a type `IsNever`, which takes input type `T`. If the type of resolves to `never`, return `true`, otherwise `false`.

```ts
//  For example:
type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
```

```ts
type IsNever<T> = [T] extends [never] ? true : false;
// or
type IsNever<T> = T[] extends never[] ? true : false;
```

### 三、`IsUnion`

{: #part-3}

##### Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

```ts
// For example:
type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
```

```ts
type IsUnion<T, C = T> = [T] extends [never] ? false : T extends C ? ([C] extends [T] ? false : true) : false;
// 同
type IsUnion<T, C = T> = [T] extends [never] ? false : T extends T ? ([C] extends [T] ? false : true) : false;
```

### 四、`ReplaceKeys`

{: #part-4}

##### Implement a type `ReplaceKeys`, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.

```ts
// For example:
type NodeA = {
    type: "A";
    name: string;
    flag: number;
};

type NodeB = {
    type: "B";
    id: number;
    flag: number;
};

type NodeC = {
    type: "C";
    name: string;
    flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<Nodes, "name" | "flag", { name: number; flag: string }>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
```

```ts
type ReplaceKeys<U, T, Y> = {
    [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};
```

### 五、`Remove Index Signature`

{: #part-5}

##### Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

```ts
// For example:
type Foo = {
    [key: string]: any;
    foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
```

```ts
type RemoveIndexSignature<T, P = PropertyKey> = {
    [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};
```

### 六、`Percentage Parser`

{: #part-6}

##### 实现类型 PercentageParser。根据规则 /^(\+|\-)?(\d\*)?(\%)?$/ 匹配类型 T。

匹配的结果由三部分组成，分别是：[正负号, 数字, 单位]，如果没有匹配，则默认是空字符串。

```ts
type CheckPrefix<T> = T extends "+" | "-" ? T : never;
type CheckSuffix<T> = T extends `${infer P}%` ? [P, "%"] : [T, ""];
type PercentageParser<A extends string> = A extends `${CheckPrefix<infer L>}${infer R}` ? [L, ...CheckSuffix<R>] : ["", ...CheckSuffix<A>];
```

```ts
type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
    ? L extends "+" | "-"
        ? R extends `${infer N}%`
            ? [L, N, "%"]
            : [L, R, ""]
        : A extends `${infer N}%`
        ? ["", N, "%"]
        : ["", A, ""]
    : ["", "", ""];
```

---
