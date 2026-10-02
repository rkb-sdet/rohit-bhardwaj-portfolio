---
title: "TypeScript - Variables"
slug: playwright-typescript-variables
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 4
tags:
   - Playwright
   - TypeScript
   - JavaScript
   - Automation Testing
date: 2026-10-01
summary: A beginner-friendly guide to TypeScript setup, compilation, TSX execution, and writing your first TypeScript program for Playwright automation.
readingTime: 10 min read
featured: false
---

---
# TypeScript Variables

A **variable** is a container that holds data.  
In TypeScript (and JavaScript), variables can be declared using **`var`**, **`let`**, or **`const`**.  
Each keyword behaves differently in terms of **scope, value assignment, redeclaration, reassignment, and hoisting**.

---

## Scope

### `var` → Function Scope
- Accessible anywhere inside the function.
- Not limited to blocks (`if`, `for`, etc.), which can cause unexpected behavior.

**Example:**
```typescript
function exampleVar() {
  if (true) {
    var message = "Hello, World!";
  }
  console.log(message); // Works! (function-scoped)
}
exampleVar(); // Output: "Hello, World!"
```

### `let` & `const` → Block Scope
- Accessible only inside the block `{}` where declared.
- Safer and more predictable than `var`.

**Example:**
```typescript
function exampleLetConst() {
  if (true) {
    let message = "Hello, let!";
    const greeting = "Hello, const!";
  }
  // console.log(message);   // Error: Not accessible outside block
  // console.log(greeting);  // Error: Not accessible outside block
}
exampleLetConst();
```

---

## Value Assignment at Declaration

- `var` and `let` → Value assignment is **optional**.  
- `const` → Value assignment is **mandatory**.

**Example:**
```typescript
var b;
console.log(b); // Output: undefined

let d;
console.log(d); // Output: undefined

// const f; // Error: Missing initializer in `const` declaration
const g = 60; // Works because value is assigned at declaration
```

---

## Redeclaration

| Keyword | Allows Redeclaration? |
|---------|------------------------|
| var     | ✅ Yes                 |
| let     | ❌ No                  |
| const   | ❌ No                  |

**Examples:**
```typescript
var city = "New York";
var city = "Los Angeles"; // Allowed (but risky!)

let country = "USA";
// let country = "Canada"; // Error

const planet = "Earth";
// const planet = "Mars"; // Error
```

---

## Reassignment

| Keyword | Allows Reassignment? |
|---------|-----------------------|
| var     | ✅ Yes                |
| let     | ✅ Yes                |
| const   | ❌ No                 |

**Examples:**
```typescript
var age = 25;
age = 30; // Allowed

let score = 50;
score = 60; // Allowed

const pi = 3.14;
// pi = 3.14159; // Error (Cannot change a constant)
```

---

## Hoisting (Access Before Declaration)

- `var`: Hoisted but initialized as `undefined`.
- `let` & `const`: Hoisted but **not initialized** (cannot be used before declaration).

**Example:**
```typescript
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // Error (Cannot access before initialization)
let b = 20;

console.log(c); // Error (Cannot access before initialization)
const c = 30;
```

---

## Summary Table

| Feature                  | var            | let             | const           |
|---------------------------|----------------|-----------------|-----------------|
| Scope                    | Function       | Block           | Block           |
| Value Assignment          | Optional       | Optional        | Mandatory       |
| Redeclare                 | ✅ Allowed     | ❌ Not Allowed  | ❌ Not Allowed  |
| Reassign                  | ✅ Allowed     | ✅ Allowed      | ❌ Not Allowed  |
| Hoisting                  | ✅ undefined   | ❌ Not init     | ❌ Not init     |
| Best Use                  | ❌ Avoid       | ✅ Changing     | ✅ Constants    |

---

## Best Practices
✔ Avoid `var` → Can cause unexpected bugs.  
✔ Use `let` → When variable values need to change.  
✔ Use `const` → For values that should never change.  

---
