---
title: "Functions and Advanced Functions in TypeScript"
slug: playwright-typescript-functions-advanced
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 10
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn named, anonymous, arrow functions, callback functions, and function overloading in TypeScript with syntax, examples, and best practices.
readingTime: 12 min read
featured: false
---

# Functions in TypeScript

Functions are reusable blocks of code that perform a specific task.  
TypeScript supports different styles of functions: **Named Functions**, **Anonymous Functions**, **Arrow Functions**, **Callback Functions**, and **Function Overloading**.

---

## 1. Named Functions
A named function has a specific name and can be reused multiple times.

**Syntax:**
```typescript
function functionName(parameters): returnType {
  // function body
}
```

**Example:**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10)); // Output: 15
```

---

## 2. Anonymous Functions
An anonymous function does not have a name. It is usually assigned to a variable.

**Syntax:**
```typescript
let variableName = function(parameters): returnType {
  // function body
};
```

**Example:**
```typescript
let multiply = function(x: number, y: number): number {
  return x * y;
};
console.log(multiply(4, 5)); // Output: 20
```

---

## 3. Arrow Functions (Lambda Functions)
Arrow functions provide a shorter syntax for writing functions.

**Syntax:**
```typescript
let functionName = (parameters): returnType => expression;
```

**Example:**
```typescript
let square = (num: number): number => num * num;
console.log(square(6)); // Output: 36
```

**Multi-line Example:**
```typescript
let greet = (name: string): string => {
  return `Hello, ${name}!`;
};
console.log(greet("Pavan")); // Output: Hello, Pavan!
```

---

## 4. Callback Functions
A callback function is passed as an argument to another function and executed later.

**Why Use Callbacks?**
- Useful when a function should run only after another finishes.  
- Common in asynchronous operations (API calls, events, file handling).

**Example:**
```typescript
function greet(name: string, callback: (message: string) => void) {
  console.log(name);
  callback("Hello");
}

function showMessage(message: string) {
  console.log(message);
}

greet("Pavan", showMessage);
// Output:
// Pavan
// Hello
```

---

## 5. Function Overloading
Function overloading allows multiple versions of a function with the same name but different parameters or return types.

**Rules:**
- Define overload signatures.  
- Provide one implementation function.  
- Implementation must handle all overload cases.

---

### Example 1: Different Parameter Types
```typescript
function display(value: number): string;
function display(value: string): string;
function display(value: boolean): string;

function display(value: number | string | boolean): string {
  return `Value is: ${value}`;
}

console.log(display(100));    // Value is: 100
console.log(display("Hello")); // Value is: Hello
console.log(display(true));    // Value is: true
```

---

### Example 2: Different Number of Parameters
```typescript
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
  return c !== undefined ? a + b + c : a + b;
}

console.log(add(2, 3));    // 5
console.log(add(2, 3, 4)); // 9
```

---

### Example 3: Different Return Types
```typescript
function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
  return typeof input === "string" ? input.toUpperCase() : input * 2;
}

console.log(processInput("hello")); // HELLO
console.log(processInput(10));      // 20
```

---

## Incorrect Overloading Examples
❌ No implementation function.  
❌ Wrong return type in implementation.  
❌ Identical parameter types but different return types.  
❌ Incompatible parameter types.  
❌ Conflicting optional parameters.

---

## Summary Table

| Type                | Syntax Example                                | Key Features                          |
|---------------------|-----------------------------------------------|---------------------------------------|
| Named Function      | `function sum(a, b) { return a + b; }`        | Has a name, reusable, traditional     |
| Anonymous Function  | `let multiply = function(x, y) { return x*y; }`| No name, stored in a variable         |
| Arrow Function      | `let square = (x) => x * x;`                  | Shorter syntax, uses `=>`             |
| Callback Function   | `greet("Pavan", showMessage);`                | Executes later, useful in async ops   |
| Function Overloading| Multiple signatures with one implementation   | Flexible, handles different inputs    |

---

## Key Takeaways
✔ Named functions → Best for reusable logic.  
✔ Anonymous functions → Useful for quick one-time use.  
✔ Arrow functions → Short, modern syntax, great for callbacks.  
✔ Callback functions → Essential for async programming.  
✔ Function overloading → Powerful for handling multiple input types.  

