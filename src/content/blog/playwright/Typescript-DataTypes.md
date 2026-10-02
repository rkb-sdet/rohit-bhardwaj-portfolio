---
title: "TypeScript - Data Types"
slug: playwright-typescript-datatypes
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 6
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn TypeScript data types, type annotations, type inference, type safety, and differences from JavaScript with practical examples.
readingTime: 8 min read
featured: false
---

# Data Types in TypeScript

---

## 1. Dynamically vs Statically Typed Languages

### JavaScript → Dynamically Typed
- Variable types are checked at **runtime**.  
- You can change the type of a variable later.  

```javascript
let age = 25;   // number
age = "twenty-five"; // string (no error in JS)
console.log(age); // "twenty-five"
```

⚠ JavaScript allows type changes dynamically, which can cause bugs.

---

### TypeScript → Statically Typed
- Variable types are checked at **compile time**.  
- You cannot change the type once declared.  

```typescript
let data: number = 10; // data is a number
data = "ten"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

✔ TypeScript catches errors before the code runs.

---

## 2. Type Safety in TypeScript

### JavaScript → Not Type-Safe
```javascript
const result = "5" + 3; 
console.log(result); // "53" (string concatenation, not 8)
```

---

### TypeScript → Type-Safe
```typescript
const result: number = "5" + 3; 
// ❌ Error: Type 'string' is not assignable to type 'number'
```

✔ TypeScript prevents operations between incompatible types.

---

### Key Takeaways
- **Dynamic Typing (JS):** Types flexible, checked at runtime.  
- **Static Typing (TS):** Types fixed, checked at compile time.  
- **Type Safety (TS):** Prevents wrong type operations, reducing bugs.  

---

## 3. TypeScript Types, Annotations & Inference

### TypeScript Types
Built-in or custom categories for variables.
```typescript
let isDone: boolean = true;
let score: number = 100;
```

---

### Type Annotations
Explicitly tell TypeScript the type using `: type`.
```typescript
let name: string = "Alice";
let age: number = 30;
```

---

### Type Inference
TypeScript automatically infers types if not annotated.
```typescript
let message = "Hello"; // inferred as string
let count = 42;        // inferred as number

// message = 123; ❌ Error (must stay string)
```

---

### Key Difference
- **Annotation:** You define the type.  
- **Inference:** TypeScript figures it out automatically.  

---

## 4. Primitive Types (Built-in)

1. **Number** → integers & decimals (`42`, `3.14`)  
2. **String** → text data (`'Hello'`, `"Hello"`, `` `Hello ${name}` ``)  
3. **Boolean** → `true` or `false`  
4. **Null** → intentional empty value (`let x = null`)  
5. **Undefined** → declared but not assigned (`let y;`)  
6. **Any** → disables type checking (⚠ avoid unless necessary)  
7. **Union Type** → multiple types (`let id: string | number = "123";`)  
8. **Void** → functions that don’t return anything  

---

## 5. Non-Primitive Types (Objects & Custom)

- **Array**  
- **Tuple**  
- **Class**  
- **Functions**  
- **Interface**  

---

## Key Takeaways
✔ Primitive types → basic, single values.  
✔ Non-primitive types → complex, structured data.  
✔ Avoid `any` → use proper types for safety.  
✔ Union types (`|`) → flexibility for multiple possible types.  

