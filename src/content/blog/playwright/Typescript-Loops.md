---
title: "TypeScript - Looping Statements"
slug: playwright-typescript-loops
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 9
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn while, do-while, for loops, break, continue, and their differences in TypeScript with syntax, examples, and lab assignments.
readingTime: 10 min read
featured: false
---

# Looping Statements in TypeScript

Looping statements in TypeScript allow executing a block of code multiple times based on a condition.

---

## 1. `while` Loop
Executes a block of code **as long as the condition is true**.

**Syntax:**
```typescript
while (condition) {
  // Code to execute
}
```

**Example:**
```typescript
let i: number = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**Output:**
```
1
2
3
4
5
```

---

## 2. `do-while` Loop
Executes the code **at least once** before checking the condition.

**Syntax:**
```typescript
do {
  // Code to execute
} while (condition);
```

**Example:**
```typescript
let j: number = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
```

**Output:**
```
1
2
3
4
5
```

---

## 3. `for` Loop
Best when the number of iterations is known.

**Syntax:**
```typescript
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```

**Example:**
```typescript
for (let k: number = 1; k <= 5; k++) {
  console.log(k);
}
```

**Output:**
```
1
2
3
4
5
```

---

## 4. `break` Statement
Stops the loop immediately when a condition is met.

**Example:**
```typescript
for (let n: number = 1; n <= 10; n++) {
  if (n === 5) {
    break; // exits loop when n is 5
  }
  console.log(n);
}
```

**Output:**
```
1
2
3
4
```

---

## 5. `continue` Statement
Skips the current iteration and moves to the next one.

**Example:**
```typescript
for (let m: number = 1; m <= 5; m++) {
  if (m === 3) {
    continue; // skips when m is 3
  }
  console.log(m);
}
```

**Output:**
```
1
2
4
5
```

---

## 6. Comparison: `while` vs `do-while`

| Feature             | while Loop                  | do-while Loop              |
|---------------------|-----------------------------|----------------------------|
| Condition Check     | Before execution            | After first execution      |
| Execution Guarantee | May not run if false        | Runs at least once         |

**Example:**
```typescript
let x: number = 5;

while (x < 5) {
  console.log("Inside while loop"); // Won't run
}

do {
  console.log("Inside do-while loop"); // Runs once
} while (x < 5);
```

**Output:**
```
Inside do-while loop
```

---

## Key Takeaways
- ✅ Use `while` → when condition must be checked before execution.  
- ✅ Use `do-while` → when loop should run at least once.  
- ✅ Use `for` → when number of iterations is known.  
- ✅ Use `break` → to stop a loop early.  
- ✅ Use `continue` → to skip an iteration.  

---

## Lab Assignments

### While Loop
- Calculate sum of first 10 natural numbers.  
- Calculate factorial of a given number.  
- Reverse a given number.  
- Check if a number is prime.  
- Find the largest digit in a number.  
- Check if a number is a palindrome.  

### Do-While Loop
- Print numbers from 1 to 10.  
- Perform arithmetic operations until user chooses to exit.  

### For Loop
- Print multiples of 5 from 5 to 50.  
- Print prime numbers between 1 and 50.  
- Print sum of even numbers between 1 and 20.  
- Print sum of odd numbers between 1 and 20.  
- Print table of 7.  
- Print numbers divisible by 3 and 5 from 1 to 100.  
- Count digits in a number.  
- Find sum of digits in a number.  
- Print multiples of 7 between 1 and 100.  
- Calculate sum of all even numbers from 1 to N.  

### Continue
- Print odd numbers from 1 to 20 (skip even).  
- Print numbers from 1 to 30, skip multiples of 5.  

### Break
- Find and print the first even number between 1 and 10.  
- Print numbers from 1 to 30, stop when greater than 15.  
