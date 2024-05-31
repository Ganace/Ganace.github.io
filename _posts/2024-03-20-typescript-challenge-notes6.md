---
layout: post
title: 【TypeScript】TypeScript类型体操(六) 中等挑战
date: 2024-03-20
categories: Front-end-Foundation
tags: [TypeScript]
author: Ganace
comment: false
---

TypeScript 的类型体操笔记，温故知新。

[为接口新增字段 Append to object](#part-1)、[返回正数字符串 Absolute](#part-2)、[字符串转字母 String to Union](#part-3)

[类型合并 Merge](#part-4)、[字母大小写转换和连接字符串 KebabCase](#part-5)、[两个接口类型的差值属性 Diff](#part-6)

---

## 中等挑战

### 一、为接口新增字段 `Append to object`

{: #part-1}

##### 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

```ts
type AppendToObject<T extends Object, U extends keyof any, V> = {
    [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
```

### 二、返回正数字符串 `Absolute`

{: #part-2}

##### 实现一个接收 string,number 或 bigInt 类型参数的 Absolute 类型,返回一个正数字符串。

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`;
```

TypeScript 中，通过模板字符串将(`number` / `bigint` )数组转换为字符串时，编译器会自动进行转换

### 三、字符串转字母 `String to Union`

{: #part-3}

##### 实现一个将接收到的`String`参数转换为一个字母`Union`的类型。

```ts
type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ? L | StringToUnion<R> : never;
```

```ts
type StringToUnion<T extends string, U extends unknown[] = []> = T extends `${infer L}${infer R}` ? StringToUnion<R, [...U, L]> : U[number];
```

### 四、类型合并 `Merge`

{: #part-4}

##### 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

```ts
type Merge<F, S> = {
    [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};
```

### 五、字母大小写转换和连接字符串 `KebabCase`

{: #part-5}

##### Replace the `camelCase` or `PascalCase` string with `kebab-case`.

字符串替换 `FooBarBaz` -> `foo-bar-baz`

```ts
type KebabCase<S extends string> = S extends `${infer F}${infer R}` ? (R extends Uncapitalize<R> ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}`) : S;
```

##### `TypeScript`提供的工具类型：

`Uppercase<StringType>` 将字符串中的每个字符转换为大写版本。
`Lowercase<StringType>` 将字符串中的每个字符转换为等效的小写字母。
`Capitalize<StringType>` 将字符串中的第一个字符转换为等效的大写字母。
`Uncapitalize<StringType>` 将字符串中的第一个字符转换为等效的小写字母。

### 六、两个接口类型的差值属性 `Diff`

{: #part-6}

##### 获取两个接口类型中的差值属性。

```ts
type Diff<O, O1> = {
    [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K];
};
```

```ts
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;
```

##### `TypeScript`提供的工具类型：

`Omit<Type, Keys>` 通过从 `Type` 中选择所有属性然后删除 `Keys`（字符串字面或字符串字面的并集）来构造一个类型。

```ts
//  | 和 & 的使用
type type1 = 1 | 2 | "3";
type type2 = 2 | "3" | 0;

type res1 = type1 | type2; // 0 | 1 | 2 | "3"
type res2 = type1 & type2; // 2 | '3'
```

```ts
//  | 和 & 在对象中的使用
type Foo = {
    name: string;
    age: string;
};
type Bar = {
    name: string;
    age: string;
    gender: number;
};

type result = keyof (Foo | Bar); // "name" | "age"

interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = keyof (Colorful & Circle); // "color" | "radius"
```

---
