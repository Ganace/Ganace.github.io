---
layout: post
title: 【TypeScript】TypeScript类型体操(九) 中等挑战
date: 2024-03-26
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[RequiredByKeys](#part-1)、[全部属性非只读 Mutable](#part-2)、[属性排除 OmitByType](#part-3)
[ObjectEntries](#part-4)、[Shift](#part-5)、[Tuple to Nested Object](#part-6)

---

## 中等挑战

### 一、`RequiredByKeys`

{: #part-1}

##### 实现一个通用的`RequiredByKeys<T, K>`，它接收两个类型参数`T`和`K`。

`K`指定应设为必选的`T`的属性集。当没有提供`K`时，它就和普通的`Required<T>`一样使所有的属性成为必选的。

```ts
type RequiredByPs<T, K extends keyof T = keyof T, O = Omit<T, K> & { [P in K]-?: T[P] }> = { [P in keyof O]: O[P] };
```

```ts
type Merge<T> = {
    [K in keyof T]: T[K];
};
type RequiredByKeys<T, K extends PropertyKey = keyof T> = Merge<T & Required<Pick<T, K extends keyof T ? K : never>>>;
```

##### `TypeScript`提供的工具类型：

`Omit<Type, Keys>`用来从对象类型`Type`中，删除指定的属性`Keys`，组成一个新的对象类型返回。

`Required<Type`>返回一个新类型，将参数类型`Type`的所有属性变为必选属性。它与`Partial<Type>`的作用正好相反。

### 二、全部属性非只读 `Mutable`

{: #part-2}

##### 实现一个通用的类型 `Mutable<T>`，使类型 `T` 的全部属性可变（非只读）。

```ts
type Mutable<T extends object> = {
    -readonly [K in keyof T]: T[K];
};
```

```ts
type Mutable<T extends object> = {
    -readonly [K in keyof T]: T[K] extends Record<string, unknown> ? Mutable<T[K]> : T[K];
};
```

### 三、属性排除 `OmitByType`

{: #part-3}

##### From `T`, pick a set of properties whose type are not assignable to `U`.

```ts
// For Example
type OmitBoolean = OmitByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },
    boolean
>; // { name: string; count: number }
```

```ts
type OmitByType<T, U> = {
    [K in keyof T as T[K] extends U ? never : K]: T[K];
};
```

### 四、`ObjectEntries`

{: #part-4}

##### Implement the type version of `Object.entries`

```ts
// For example
interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
```

```ts
type ObjectEntries<T, U = Required<T>> = {
    [K in keyof U]: [K, U[K] extends never ? undefined : U[K]];
}[keyof U];
```

##### `TypeScript`提供的工具类型：

`Required<Type>`返回一个新类型，将参数类型`Type`的所有属性变为必选属性。它与`Partial<Type>`的作用正好相反。

### 五、`Shift`

{: #part-5}

##### Implement the type version of `Array.shift`

For example:
` type Result = Shift<[3, 2, 1]> // [2, 1]`

```ts
type Shift<T extends unknown[]> = T extends [infer _, ...infer U] ? [...U] : T;
```

### 六、`Tuple to Nested Object`

{: #part-6}

##### Given a tuple type `T` that only contains string type, and a type `U`, build an object recursively.

For example:

```ts
type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
```

```ts
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R] ? { [K in F & string]: TupleToNestedObject<R, U> } : U;
```

```ts
type TupleToNestedObject<T, U> = T extends [infer F extends PropertyKey, ...infer R] ? { [K in F]: TupleToNestedObject<R, U> } : U;
```

```ts
type TupleToNestedObject<T, U> = T extends [infer F extends PropertyKey, ...infer R] ? Record<F, TupleToNestedObject<R, U>> : U;
```

`type PropertyKey = string | number | symbol;`
`type Record<T extends keyof any, U> = { [K in T]: U; };`

---
