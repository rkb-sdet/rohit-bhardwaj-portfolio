---
title: "Strings in TypeScript"
slug: playwright-typescript-strings
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 13
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn how to declare strings, use template literals, and apply common string methods in TypeScript with examples.
readingTime: 8 min read
featured: false
---

# Strings in TypeScript

A **string** in TypeScript is a sequence of characters used to represent text.  
Strings can be declared using:

1. Single quotes `'like this'`  
2. Double quotes `"like this"`  
3. Backticks `` `like this` `` → useful for template literals.

```typescript
let str1: string = 'Single quote';
let str2: string = "Double quote";
let str3: string = `Backtick`;
```

---

## Why Use Backticks?
Backticks allow **template literals**, which support string interpolation using `${}`.

```typescript
let num: number = 10;
console.log(`Number is: ${num}`); // Correct way
```

❌ `'Number is: ${num}'` or `"Number is: ${num}"` will not interpolate properly.

---

## Common String Methods
```typescript
let greeting: string = "Hello, TypeScript!";
```

1. **`.length`** → Get number of characters  
```typescript
console.log(greeting.length); // 18
```

2. **`.toUpperCase()` / `.toLowerCase()`** → Change case  
```typescript
console.log(greeting.toUpperCase()); // HELLO, TYPESCRIPT!
console.log(greeting.toLowerCase()); // hello, typescript!
```

3. **`.charAt(index)` / `.indexOf(substring)`** → Get character or find substring  
```typescript
console.log(greeting.charAt(4));      // o
console.log(greeting.indexOf("Type")); // 7
```

4. **`.substring(start, end)`** → Extract part of string  
```typescript
console.log(greeting.substring(7, 11)); // Type
```

5. **`.includes(substring)`** → Check if substring exists  
```typescript
console.log(greeting.includes("Script")); // true
```

6. **`.startsWith()` / `.endsWith()`** → Check start or end  
```typescript
console.log(greeting.startsWith("Hello")); // true
console.log(greeting.endsWith("!"));       // true
```

7. **`.replace(old, new)`** → Replace part of string  
```typescript
console.log(greeting.replace("TypeScript", "World")); // Hello, World!
```

8. **`.split(delimiter)`** → Split into array  
```typescript
console.log(greeting.split(" ")); // ['Hello,', 'TypeScript!']
```

9. **`.trim()` / `.trimStart()` / `.trimEnd()`** → Remove spaces  
```typescript
let spaced = "   Hello World!   ";
console.log(spaced.trim());      // "Hello World!"
console.log(spaced.trimStart()); // "Hello World!   "
console.log(spaced.trimEnd());   // "   Hello World!"
```

---

## String Immutability
Strings are **immutable** → once created, they cannot be changed.  
Methods return new strings instead of modifying the original.

```typescript
let original = "Hello";
let modified = original.concat(", World!");
console.log(original); // "Hello"
console.log(modified); // "Hello, World!"
```

---

## Multi-line Strings
Backticks allow strings to span multiple lines.

```typescript
let multiLine = `Line one
Line two
Line three`;
console.log(multiLine);
```

**Output:**
```
Line one
Line two
Line three
```

---

## Key Takeaways
✔ Strings can be declared with single quotes, double quotes, or backticks.  
✔ Backticks (template literals) allow interpolation and multi-line strings.  
✔ Common methods include `length`, `toUpperCase`, `substring`, `replace`, `split`, and `trim`.  
✔ Strings are immutable → methods return new strings.  

