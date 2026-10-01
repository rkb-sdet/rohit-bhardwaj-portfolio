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

# TypeScript Data Types

---

## 1. Dynamically Typed vs Statically Typed Languages

### JavaScript → Dynamically Typed
- Variable types are checked at **runtime**.
- You can change the type of a variable later.

**Example:**
```javascript
let age = 25; // age is a number
age = "twenty-five"; // Now age is a string
console.log(age); // Output: "twenty-five"
```
✅ No errors because JavaScript allows type changes dynamically.

---

### TypeScript → Statically Typed
- Variable types are checked at **compile time**.
- You cannot change the type later.

**Example:**
```typescript
let data: number = 10; // data is a number
data = "ten"; // ❌ Error: Type 'string' is not assignable to type 'number'
```
✔ TypeScript catches this error before the code runs.

---

## 2. Type-Safety

### JavaScript → Not Type-Safe
Allows operations between incompatible types, leading to unexpected behavior.

**Example:**
```javascript
const result = "5" + 3; 
console.log(result); // Output: "53" (not 8)
```

---

### TypeScript → Type-Safe
Prevents operations between incompatible types.

**Example:**
```typescript
const result: number = "5" + 3; 
// ❌ Error: Type 'string' is not assignable to type 'number'
```

---

### Key Takeaways
- **Dynamic Typing (JS):** Types are flexible, checked at runtime.  
- **Static Typing (TS):** Types are fixed, checked at compile time.  
- **Type Safety (TS):** Prevents wrong type operations, reducing bugs.  

---

## 3. TypeScript Types, Annotations & Type Inference

### TypeScript Types
Built-in or custom categories for variables (e.g., `number`, `string`, `boolean`).

**Example:**
```typescript
let isDone: boolean = true;
let score: number = 100;
```

---

### Type Annotations
Explicitly telling TypeScript the type of a variable using `: type`.

**Example:**
```typescript
let name: string = "Alice";
let age: number = 30;
```

---

### Type Inference
TypeScript automatically guesses the type if you don’t annotate it.

**Example:**
```typescript
let message = "Hello"; // inferred as string
let count = 42;        // inferred as number

// message = 123; ❌ Error (TypeScript knows message must stay a string)
```

---

### Key Differences
- **Type Annotation:** You manually define the type.  
- **Type Inference:** TypeScript figures it out automatically.  

---

## 4. TypeScript Data Types

### Primitive Types (Built-in)

- **Number** → integers & decimals (`42`, `3.14`)  
- **String** → text data (`'Hello'`, `"Hello"`, `` `Hello ${name}` ``)  
- **Boolean** → `true` or `false`  
- **Null** → intentional empty value (`let x = null`)  
- **Undefined** → declared but not assigned (`let y;`)  
- **Any** → flexible type (disables checks) → ⚠ Avoid using  
- **Union Type** → multiple types (`let id: string | number = "123";`)  
- **Void** → functions that don’t return anything  

---

### Non-Primitive Types (Objects & Custom)
- **Array**
- **Tuple**
- **Class**
- **Functions**
- **Interface**

---

### Key Takeaways
✔ Primitive types → basic, single values.  
✔ Non-primitive types → complex, structured data.  
✔ Avoid `any` → use proper types for safety.  
✔ Union types (`|`) → flexibility when variable can be multiple types.  

