---
title: "Array Methods in TypeScript"
slug: playwright-typescript-array-methods
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 12
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn basic and advanced array methods in TypeScript including push, pop, shift, unshift, concat, slice, splice, indexOf, includes, toString, forEach, map, filter, reduce, some, and every.
readingTime: 12 min read
featured: false
---

# Array Methods in TypeScript

Arrays in TypeScript come with powerful built-in methods to manipulate, transform, and query data.  
They can be grouped into **basic methods** and **advanced methods**.

---

## 1. Basic Array Methods

### `push()`
Adds one or more elements to the end of an array.
```typescript
let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
```

---

### `pop()`
Removes the last element and returns it.
```typescript
let fruits = ['apple', 'banana', 'mango'];
let lastFruit = fruits.pop();
console.log(fruits);     // ['apple', 'banana']
console.log(lastFruit);  // 'mango'
```

---

### `shift()`
Removes the first element and returns it.
```typescript
let numbers = [1, 2, 3];
let first = numbers.shift();
console.log(numbers); // [2, 3]
console.log(first);   // 1
```

---

### `unshift()`
Adds elements to the beginning of an array.
```typescript
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']
```

---

### `concat()`
Combines arrays and returns a new one.
```typescript
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]
```

---

### `slice()`
Extracts a section of an array (non-destructive).
```typescript
let fruits = ['kiwi', 'apple', 'banana', 'mango'];
let selected = fruits.slice(1, 3);
console.log(selected); // ['apple', 'banana']
```

---

### `splice()`
Adds or removes elements at any position.
```typescript
let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1); // remove
console.log(fruits); // ['apple', 'cherry']

fruits.splice(1, 0, 'orange'); // add
console.log(fruits); // ['apple', 'orange', 'cherry']
```

---

### `indexOf()`
Finds the index of the first occurrence.
```typescript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('grape'));  // -1
```

---

### `includes()`
Checks if an array contains a value.
```typescript
let fruits = ['apple', 'banana'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false
```

---

### `toString()`
Converts array to a comma-separated string.
```typescript
let numbers = [1, 2, 3];
console.log(numbers.toString()); // '1,2,3'
```

---

## 2. Advanced Array Methods

| Method     | Definition | Syntax | Return Type |
|------------|------------|--------|-------------|
| **forEach()** | Executes a function once for each element. | `array.forEach(fn)` | void |
| **map()**     | Creates a new array with transformed elements. | `array.map(fn)` | Array<T> |
| **filter()**  | Creates a new array with elements passing a test. | `array.filter(fn)` | Array<T> |
| **reduce()**  | Reduces array to a single value. | `array.reduce(fn, initialValue)` | Any |
| **some()**    | Returns true if at least one element passes. | `array.some(fn)` | boolean |
| **every()**   | Returns true if all elements pass. | `array.every(fn)` | boolean |

---

### `forEach()`
Used for iteration (no return).
```typescript
let fruits = ['apple', 'banana'];
fruits.forEach((fruit, i) => {
  console.log(`${i + 1}. ${fruit}`);
});
// 1. apple
// 2. banana
```

---

### `map()`
Transforms data and returns a new array.
```typescript
let nums = [1, 2, 3];
let squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]
```

---

### `filter()`
Keeps elements that pass a condition.
```typescript
let nums = [1, 2, 3, 4];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

---

### `reduce()`
Accumulates values into one result.
```typescript
let nums = [1, 2, 3];
let total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // 6
```

---

### `some()`
Checks if any element passes.
```typescript
let nums = [1, 2, 3];
let hasNegative = nums.some(n => n < 0);
console.log(hasNegative); // false
```

---

### `every()`
Checks if all elements pass.
```typescript
let nums = [2, 4, 6];
let allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // true
```

---

## Key Takeaways
✔ **Basic methods** → push, pop, shift, unshift, concat, slice, splice, indexOf, includes, toString.  
✔ **Advanced methods** → forEach, map, filter, reduce, some, every.  
✔ `forEach()` → side effects only.  
✔ `map()` → transforms data.  
✔ `filter()` → selects subsets.  
✔ `reduce()` → accumulates values.  
✔ `some()` → checks if any match.  
✔ `every()` → checks if all match.  

