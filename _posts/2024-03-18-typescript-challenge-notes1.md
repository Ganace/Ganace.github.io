---
layout: post
title: 【TypeScript】TypeScript类型体操(一) 简单挑战
date: 2024-03-18
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

又到了记笔记的时候了，这次是 TypeScript 的类型体操笔记，好玩又涨知识，为以后温故知新做准备。

###### 实现 Pick `Pick<T, K>` | 对象属性只读 `Readonly` | 元组转换为对象 `Tuple to Object` | 第一个元素 `First of Array` | 获取元组长度 `Length of Tuple` | 实现 Exclude `Exclude<T, U>`

---

## 简单挑战

### 一、实现 Pick `Pick<T, K>`

##### 不使用 `Pick<T, K>` ，实现 TS 内置的 `Pick<T, K>` 的功能。

从类型 T 中选出符合 K 的属性，构造一个新的类型。

```ts
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key];
};
```

`keyof` 是一个单目运算符，用于将对象类型的键组合成一个联合类型
`in` 运算符，用来取出（遍历）联合类型的每一个成员类型

##### `TypeScript`提供的工具类型：

`Pick<Type, Keys>` 通过从 Type 中选取一组属性 Keys（字符串字面或字符串字面的并集）来构造一个类型。
{: #my-class}

### 二、对象属性只读 `Readonly`

##### 不要使用内置的`Readonly<T>`，自己实现一个。

泛型 `Readonly<T>` 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会是只读 (`readonly`) 的。

也就是不可以再对该对象的属性赋值。

```ts
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

`readonly`，防止对象的属性被更改

##### `TypeScript`提供的工具类型：

`Readonly<Type>` 构造一个将 Type 的所有属性设置为 `readonly` 的类型，这意味着构造类型的属性不能重新分配。

### 三、元组转换为对象 `Tuple to Object`

##### 将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

```ts
type TupleToObject<T extends readonly (keyof any)[]> = {
    [P in T[number]]: P;
};
```

`keyof any` 返回的是一个联合类型：`string | number | symbol`。

元组的索引都是`number`类型的，所以可以一次全部取到所有元素的类型。

### 四、第一个元素 `First of Array`

##### 实现一个`First<T>`泛型，它接受一个数组`T`并返回它的第一个元素的类型。

```ts
type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
```

`T["length"]`获取元组的长度。

```ts
type First<T extends any[]> = T[number] extends never ? never : T[0];
```

`T[number]` 遍历元组中的每一项。

```ts
type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never;
```

`infer A`在`T`不为空数组时，推导为`T`数组的第一个元素的类型

`...infer rest` 用来表示剩余元素

### 五、获取元组长度 `Length of Tuple`

##### 创建一个`Length`泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

```ts
type Length<T extends readonly unknown[]> = T["length"];
```

```ts
type Length<T extends readonly any[]> = T extends { length: infer L } ? L : never;
```

### 六、实现 Exclude `Exclude<T, U>`

##### 实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。

从联合类型 T 中排除 U 中的类型，来构造一个新的类型。

```ts
type MyExclude<T, U extends T> = T extends U ? never : T;
```

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

##### `TypeScript`提供的工具类型：

`Exclude<UnionType, ExcludedMembers>` 通过从 `UnionType` 中排除所有可分配给 `ExcludedMembers` 的联合成员来构造一个类型。

---
