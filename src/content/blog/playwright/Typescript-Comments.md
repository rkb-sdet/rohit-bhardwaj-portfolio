---
title: "TypeScript - Comments"
slug: playwright-typescript-comments
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 5
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn single-line, block, nested, disabled-code, and JSDoc comments in TypeScript with practical examples and best practices.
readingTime: 5 min read
featured: false
---

## Comments in TypeScript

Comments are notes inside your code that **do not affect execution**. They help you (and others) understand what the code is doing.

---

### Single-line Comment
- Shortcut:  
  - Windows/Linux → `Ctrl + /`  
  - Mac → `Cmd + /`

```typescript
// This is a single-line comment
let age = 25; // declaring a variable with age
console.log(age); // printing the value of age
```

👉 Use single-line comments for **quick explanations** or **inline notes**.

---

### Multi-line (Block) Comment
- Shortcut:  
  - Windows/Linux → `Shift + Alt + A`  
  - Mac → `Shift + Option + A`

```typescript
/*
This is a multi-line comment
It can span multiple lines
Useful for explaining bigger logic or disabling code temporarily
*/
function greet(name: string) {
  /*
    Step 1: Take input parameter
    Step 2: Return greeting message
  */
  return `Hello, ${name}!`;
}
console.log(greet("Manju"));
```

👉 Use block comments for **detailed explanations** or **documentation-style notes**.

---

### Nested Comments (Not Allowed)
TypeScript does **not** support nested block comments:
```typescript
/*
  Outer comment
  /* Inner comment */ // ❌ Error
*/
```

---

### Using Comments to Disable Code
Sometimes developers comment out code to test or debug:
```typescript
// console.log("This line is disabled temporarily");
console.log("Only this line runs");
```

---

### Documentation Comments (JSDoc Style)
TypeScript supports **JSDoc comments** for better documentation and IDE hints:
```typescript
/**
 * Adds two numbers together
 * @param a - first number
 * @param b - second number
 * @returns sum of a and b
 */
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10)); // Output: 15
```

👉 JSDoc comments are powerful because editors like VS Code show **tooltips** and **type hints** based on them.

---

### Best Practices for Comments
✔ Keep comments **short and meaningful**.  
✔ Use comments to explain **why**, not just **what**.  
✔ Avoid over-commenting obvious code.  
✔ Use JSDoc for functions, classes, and complex logic.  

---

