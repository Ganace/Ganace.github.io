---
layout: post
title: 【TypeScript】TypeScript类型体操(十) 中等挑战
date: 2024-03-27
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

 [反转 Reverse](#part-1)、[函数参数类型反转 Flip Arguments](#part-2)、[数组深度展开 FlattenDepth](#part-3)
 [BEM style string](#part-4)、[InorderTraversal](#part-5)、[Flip](#part-6)

---

## 中等挑战

### 一、反转 `Reverse`

{: #part-1}

##### 实现类型版本的数组反转 `Array.reverse`

例如

` type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']`

```ts
type Reverse<T extends unknown[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : T;
```

### 二、函数参数类型反转 `Flip Arguments`

{: #part-2}

##### Implement the type version of lodash's \_.flip.

Type `FlipArguments<T>` requires function type `T` and returns a new function type which has the same return type of `T` but reversed parameters.

For example:

`type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void`

Answer:

```ts
type Reverse<T extends unknown[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];
type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer U ? (...args: Reverse<P>) => U : never;
```

### 三、数组深度展开 `FlattenDepth`

{: #part-3}

##### Recursively flatten array up to depth times.

For example:

`type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times`
`type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1`

Answer:

```ts
type FlattenDepth<T extends any[], C extends number = 1, U extends any[] = []> = T extends [infer F, ...infer R]
    ? F extends any[]
        ? U["length"] extends C
            ? [F, ...FlattenDepth<R, C, U>]
            : [...FlattenDepth<F, C, [0, ...U]>, ...FlattenDepth<R, C, U>]
        : [F, ...FlattenDepth<R, C, U>]
    : T;
```

### 四、`BEM style string`

{: #part-4}

##### The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

For example, the block component would be represented as btn, element that depends upon the block would be represented as btn**price, modifier that changes the style of the block would be represented as btn--big or btn**price--warning.

Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).

Test Cases:

```ts
type cases = [
    Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
    Expect<Equal<BEM<"btn", ["price"], ["warning", "success"]>, "btn__price--warning" | "btn__price--success">>,
    Expect<Equal<BEM<"btn", [], ["small", "medium", "large"]>, "btn--small" | "btn--medium" | "btn--large">>
];
```

Answer:

```ts
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? "" : `__${E[number]}`}${M extends [] ? "" : `--${M[number]}`}`;
```

### 五、`InorderTraversal`

{: #part-5}

##### Implement the type version of binary tree inorder traversal.

For example:

```ts
const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
} as const;

type A = InorderTraversal<typeof tree1>; // [1, 3, 2]
```

Answer:

```ts
type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>] : [];
```

### 六、`Flip`

{: #part-6}

##### Implement the type of `just-flip-object`. Examples:

```ts
Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
```

```ts
type Flip<T extends Record<string, string | boolean | number>> = {
  [K in keyof T as `${T[K]}`]: K
}
```


---
