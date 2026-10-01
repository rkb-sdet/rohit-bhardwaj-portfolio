---
title: "TypeScript - Operators"
slug: playwright-typescript-operators
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 7
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn arithmetic, assignment, increment/decrement, comparison, logical, and ternary operators in TypeScript with examples.
readingTime: 7 min read
featured: false
---

# Operators in TypeScript

Operators are symbols used to perform operations on values and variables.  
TypeScript supports all JavaScript operators with type safety.

---

## 1. Arithmetic Operators
Perform basic mathematical operations.

- `+` (Addition): `10 + 5 = 15`  
- `-` (Subtraction): `10 - 5 = 5`  
- `*` (Multiplication): `10 * 5 = 50`  
- `/` (Division): `10 / 5 = 2`  
- `%` (Modulus): `10 % 3 = 1`  
- `**` (Exponentiation): `2 ** 3 = 8`  

**Example:**
```typescript
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % 3); // 1
console.log(2 ** 3); // 8
```

---

## 2. Assignment Operators
Used to assign values to variables.

- `+=` → `x += 5` (same as `x = x + 5`)  
- `-=` → `x -= 5`  
- `*=` → `x *= 5`  
- `/=` → `x /= 5`  
- `%=` → `x %= 5`  

**Example:**
```typescript
let x = 10;
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
x %= 5; // 1
console.log(x);
```

---

## 3. Increment & Decrement Operators
Increase or decrease a value by 1.

- `++` (Increment)  
  - `x++` → Post-increment (use value, then increase)  
  - `++x` → Pre-increment (increase, then use value)  
- `--` (Decrement)  
  - `y--` → Post-decrement  
  - `--y` → Pre-decrement  

**Example:**
```typescript
let num = 5;
console.log(num++); // 5 (then becomes 6)
console.log(++num); // 7
console.log(num--); // 7 (then becomes 6)
console.log(--num); // 5
```

---

## 4. Relational / Comparison Operators
Compare values and return `true` or `false`.

- `<` → `10 < 20` → true  
- `>` → `10 > 20` → false  
- `<=` → `10 <= 10` → true  
- `>=` → `20 >= 15` → true  
- `==` → Equality check (only value) → `10 == "10"` → true  
- `!=` → Not equal → `10 != 20` → true  
- `===` → Strict equality (value + type) → `10 === "10"` → false  
- `!==` → Strict inequality → `10 !== "10"` → true  

**Example:**
```typescript
console.log(10 < 20);   // true
console.log(10 > 20);   // false
console.log(10 == "10"); // true (value only)
console.log(10 === "10"); // false (type mismatch)
```

---

## 5. Logical Operators
Combine multiple conditions.

- `&&` (AND) → true if both conditions are true  
- `||` (OR) → true if at least one condition is true  
- `!` (NOT) → reverses the condition  

**Example:**
```typescript
let x = 12, y = 4;
console.log(x > 5 && x < 15); // true
console.log(x > 10 || y < 5); // true
console.log(!(x > 5));        // false
```

---

## 6. Ternary Operator (Conditional Operator)
Shortcut for `if-else`.

**Syntax:**
```typescript
condition ? value_if_true : value_if_false;
```

**Example:**
```typescript
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"
```

---

## Key Takeaways
✔ Arithmetic → Basic math operations.  
✔ Assignment → Update variable values easily.  
✔ Increment/Decrement → Handy for loops.  
✔ Comparison → Check values and types.  
✔ Logical → Combine conditions.  
✔ Ternary → Short and clean conditional checks.  

