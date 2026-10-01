---
title: "Arrays and Tuples in TypeScript"
slug: playwright-typescript-arrays-tuples
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 11
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn how to declare, access, iterate, and process arrays in TypeScript, along with tuples for fixed-length heterogeneous data.
readingTime: 10 min read
featured: false
---

# Arrays and Tuples in TypeScript

---

## 1. TypeScript Arrays
An **array** in TypeScript is a special type of variable that can store multiple values.  
Values can be of the same type or a combination of different types.

---

### Declaring an Array
Arrays can be declared in two main ways:

1. **Array Literal Syntax (`[]`)**
```typescript
let names: string[] = []; // empty string array
names[0] = "john";
names[1] = "smith";
names[2] = "peter";
names[3] = "scott";

// Alternative initialization
let names2: string[] = ["john", "smith", "peter", "scott"];
```

2. **Generic Array Syntax (`Array<Type>`)**
```typescript
let empNames: Array<string> = ["john", "smith", "peter", "scott"];
let empIds: Array<number> = [101, 102, 103, 104];
let data: Array<string | number> = ["john", "smith", 101, 102]; // union type
let data2: Array<any> = [1, "john", true, null]; // allows multiple types
```

---

### Accessing Array Elements
- Indexing starts from `0`.  
- Access elements using `arr[index]`.

**Example:**
```typescript
console.log(names);    // ['john', 'smith', 'peter', 'scott']
console.log(names[1]); // smith
console.log(names[4]); // undefined (index out of bounds)
```

---

### Iterating Over an Array
There are multiple ways to loop through an array:

**Using `for` loop:**
```typescript
for (let i = 0; i < empNames.length; i++) {
  console.log(empNames[i]);
}
```

**Using `for...in` loop (indexes):**
```typescript
for (let i in empIds) {
  console.log(empIds[i]); // 'i' represents index
}
```

**Using `for...of` loop (values):**
```typescript
for (let element of data) {
  console.log(element); // 'element' represents actual values
}
```

---

### Passing an Array to a Function
Arrays can be passed to functions for processing.

**Example: Searching for an Element**
```typescript
function search(ele: number, arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return true; // found
    }
  }
  return false; // not found
}

let arr: number[] = [10, 20, 30, 40, 50];
console.log(search(20, arr));  // true
console.log(search(100, arr)); // false
```

---

### Function Returning an Array
A function can take an array as input and return a modified array.

**Example: Capitalizing Words**
```typescript
function capitalizeWords(arr: string[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].toUpperCase();
  }
  return result;
}

let words: string[] = ["hello", "world", "typescript"];
console.log(capitalizeWords(words)); // ["HELLO", "WORLD", "TYPESCRIPT"]
```

---

### Key Takeaways
✔ Arrays store multiple values.  
✔ Two ways to declare arrays: `[]` and `Array<Type>`.  
✔ Indexing starts at 0.  
✔ Arrays can be accessed, modified, and iterated using loops.  
✔ Arrays can be passed to functions and returned from functions.  

---

## 2. Tuples in TypeScript
A **tuple** is a fixed-length array where each element has a specific type.  
Useful for storing multiple fields of different data types together.

**Example:**
```typescript
let person: [string, number] = ["Alice", 25];
console.log(person[0]); // Alice
console.log(person[1]); // 25
```

---

## Key Takeaways
✔ Tuples → fixed length, heterogeneous types.  
✔ Arrays → variable length, homogeneous or union types.  
✔ Use tuples when you need structured data with known positions.  

