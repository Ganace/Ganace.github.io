---
layout: post
title: 【TypeScript】TypeScript类型体操(十四) 中等挑战
date: 2024-04-05
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[统计数组中的元素个数](#part-1) 、[整数](#part-2) 、[将类型为字面类型（标签类型）的属性，转换为基本类型。](#part-3)

[DeepMutable](#part-4) 、[All](#part-5) 、[Filter](#part-6)

---

## 中等挑战

{: #part-1}

### 一、统计数组中的元素个数

##### 通过实现一个`CountElementNumberToObject`方法，统计数组中相同元素的个数

For example:

```ts
type Simple1 = CountElementNumberToObject<[]>; // return {}
type Simple2 = CountElementNumberToObject<[1, 2, 3, 4, 5]>;
/*
 return {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1
}
*/
type Simple3 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>;
/*
 return {
  1: 2,
  2: 2,
  3: 2,
  4: 1,
  5: 1
}
*/
```

Answer:

```ts
// 数组展开
type Flat<T> = T extends [infer A, ...infer B] ? (A extends any[] ? [...Flat<A>, ...Flat<B>] : [A, ...Flat<B>]) : T;
// O为需要计数的项，U收集重复项
type Count<T, O, U extends any[] = []> = T extends [infer A, ...infer B] ? (A extends O ? Count<B, O, [...U, O]> : Count<B, O, [...U]>) : U["length"];
// 统计数组中的元素个数
type CountElementNumberToObject<T extends any[], U extends any[] = Flat<T>> = {
    [K in U[number]]: Count<U, K>;
};
```

{: #part-2}

### 二、整数

##### 请完成类型 `Integer<T>`，类型 `T` 继承于 `number`，如果 `T` 是一个整数则返回它，否则返回 `never`。

```ts
type Integer<T extends number> = number extends T ? never : `${T}` extends `${any}.${any}` ? never : T;

// fantastic way
// type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never
```

{: #part-3}

### 三、将类型为字面类型（标签类型）的属性，转换为基本类型。

##### 将类型为字面类型（标签类型）的属性，转换为基本类型。

`type PersonInfo = { name: 'Tom', age: 30, married: false, addr: { home: '123456', phone: '13111111111' } }`

// 要求结果如下： `type PersonInfo = { name: string, age: number, married: boolean, addr: { home: string, phone: string } }`

```ts
type ToPrimitive<T> = T extends object
    ? T extends (...args: never[]) => unknown
        ? Function
        : {
              [Key in keyof T]: ToPrimitive<T[Key]>;
          }
    : // 如果 T 是一个包装对象类型，如 Number 或 String 类型，它会具有一个 valueOf 方法返回对应的原始类型。T 是原始类型，直接返回 T
    T extends { valueOf: () => infer P }
    ? P
    : T;
```

{: #part-4}

### 四、`DeepMutable`

##### 实现一个通用的 `DeepMutable` ，它使对象的每个属性，及其递归的子属性 - 可变。

例如：

```ts
type X = {
    readonly a: () => 1;
    readonly b: string;
    readonly c: {
        readonly d: boolean;
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true;
                    readonly j: "s";
                };
                readonly k: "hello";
            };
        };
    };
};

type Expected = {
    a: () => 1;
    b: string;
    c: {
        d: boolean;
        e: {
            g: {
                h: {
                    i: true;
                    j: "s";
                };
                k: "hello";
            };
        };
    };
};
type Todo = DeepMutable<X>; // should be same as `Expected`
```

你可以假设我们在这个挑战中只处理对象。 数组、函数、类等不需要考虑。 但是，您仍然可以通过涵盖尽可能多的不同案例来挑战自己。

```ts
type DeepMutable<T> = T extends Record<string, any>
  ? {
  - readonly [K in keyof T]: T[K] extends Record<string, any> 
    ? T[K] extends (...args: any[]) => any
      ? T[K]
      : DeepMutable<T[K]>
    : T[K]
} : T
```

```ts
type DeepMutable<T extends Record<keyof any, any>> =
  T extends (...args: any[]) => any ?
  T :
  {
    - readonly [K in keyof T]: DeepMutable<T[K]>
  }
```

{: #part-5}

### 五、`All`

##### Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

For example:

```ts
type Test1 = [1, 1, 1]
type Test2 = [1, 1, 2]

type Todo = All<Test1, 1> // should be same as true
type Todo2 = All<Test2, 1> // should be same as false
```

Answer:

```ts
type IsEqual<T, U> = T extends U ? U extends T ? true : false : false;

type All<T extends unknown[], K, Flag extends boolean = false> =
  T extends [infer L, ...infer R]
  ? IsEqual<L, K> extends true
    ? All<R, K, true>
    : false
  : Flag
```

{: #part-6}

### 六、`Filter`

##### Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.

For example:

```ts
Filter<[0, 1, 2], 2>;// [2]
Filter<[0, 1, 2], 0 | 1>;// [0, 1]
Filter<[0, 1, 2], false | 0 | '' | null | undefined>;// [0]
```

Answer:

```ts
type Filter<T extends any[], P, U extends unknown[] = []> = 
T extends [infer F,...infer R] 
? F extends P ? Filter<R,P,[...U,F]> : Filter<R,P,U>
: U
```

```ts
type Filter<T extends any[], P,> = 
T extends [infer F,...infer R] 
? F extends P ? [F,...Filter<R,P>] : [...Filter<R,P>]
: []
```

---
