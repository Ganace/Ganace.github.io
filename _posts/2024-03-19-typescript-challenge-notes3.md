---
layout: post
title: 【TypeScript】TypeScript类型体操(三) 中等挑战
date: 2024-03-19
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[获取函数返回类型 ReturnType<T>](#part-1)、[实现 Omit<T, K>](#part-2)、[对象部分属性只读 Readonly<T>](#part-3)

[对象属性只读（递归） DeepReadonly<T>](#part-4)、[元组转合集 TupleToUnion<T>](#part-5)、[可串联构造器](#part-6)

---

## 中等挑战

### 一、获取函数返回类型 `ReturnType<T>`

{: #part-1}

##### 不使用 `ReturnType` 实现 `TypeScript` 的 `ReturnType<T>` 泛型。

```ts
type MyReturnType<T extends (...args: any) => unknown> = T extends (...args: any) => infer R ? R : never;
```

##### `TypeScript`提供的工具类型：

`ReturnType<Type>` 构造一个由函数 `Type` 的返回类型组成的类型。

### 二、实现 `Omit` `Omit<T, K>`

{: #part-2}

##### 不使用 `Omit` 实现 `TypeScript` 的 `Omit<T, K>` 泛型。

`Omit` 会创建一个省略 `K` 中字段的 `T` 对象。

```ts
type MyOmit<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
```

##### `TypeScript`提供的工具类型：

`Omit<Type, Keys>` 通过从 `Type` 中选择所有属性然后删除 `Keys`（字符串字面或字符串字面的并集）来构造一个类型。

### 三、对象部分属性只读 `Readonly<T>`

{: #part-3}

##### 实现一个泛型`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。

类型 `K` 指定 `T` 中要被设置为只读 (`readonly`) 的属性。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。

```ts
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;
```

```ts
// 不使用内置方法
type MyReadonly2<T, K extends keyof T = keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
} & {
    readonly [P in K]: T[P];
};
```

##### `TypeScript`提供的工具类型：

`Readonly<Type>` 构造一个将 `Type` 的所有属性设置为 `readonly` 的类型，这意味着构造类型的属性不能重新分配。

### 四、对象属性只读（递归） `DeepReadonly<T>`

{: #part-4}

##### 实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

您可以假设在此挑战中我们仅处理对象。不考虑数组、函数、类等。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

```ts
type DeepReadonly<T> = T extends Function ? T : { readonly [K in keyof T]: DeepReadonly<T[K]> };
```

```ts
type DeepReadonly<T> = {
    readonly [k in keyof T]: T[k] extends Record<any, any> ? (T[k] extends Function ? T[k] : DeepReadonly<T[k]>) : T[k];
};
```

```ts
// from vue-next
type Primitive = string | number | boolean | bigint | symbol | undefined | null;
type Builtin = Primitive | Function | Date | Error | RegExp;
type DeepReadonly<T> = T extends Builtin
    ? T
    : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends ReadonlyMap<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends WeakMap<infer K, infer V>
    ? WeakMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends Set<infer U>
    ? ReadonlySet<DeepReadonly<U>>
    : T extends ReadonlySet<infer U>
    ? ReadonlySet<DeepReadonly<U>>
    : T extends WeakSet<infer U>
    ? WeakSet<DeepReadonly<U>>
    : T extends Promise<infer U>
    ? Promise<DeepReadonly<U>>
    : T extends {}
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : Readonly<T>;
```

### 五、元组转合集 `TupleToUnion<T>`

{: #part-5}

##### 实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

```ts
type TupleToUnion<T extends unknown[]> = T[number];
```

```ts
type TupleToUnion<T> = T extends (infer U)[] ? U : never;
```

```ts
export type TupleToUnion<T> = T extends Array<infer U> ? U : never;
```

### 六、可串联构造器

{: #part-6}

##### 在 `JavaScript` 中我们经常会使用可串联（`Chainable/Pipeline`）的函数构造一个对象，但在 `TypeScript` 中，你能合理的给它赋上类型吗？

在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 option(key, value) 和 get()。在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。

```ts
type Chainable<T = {}> = {
    option: <K extends string, V>(key: K extends keyof T ? never : K, value: V) => K extends keyof T ? Chainable<Omit<T, K> & Record<K, V>> : Chainable<T & Record<K, V>>;
    get: () => T;
};
```

##### `TypeScript`提供的工具类型：

`Record<Keys, Type>` 构造一个对象类型，其属性键为 `Keys`，其属性值为 `Type`。此实用程序可用于将一种类型的属性映射到另一种类型。

---
