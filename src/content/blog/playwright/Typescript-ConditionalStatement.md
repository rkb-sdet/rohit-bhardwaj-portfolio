---
title: "TypeScript - Conditional Statement"
slug: playwright-typescript-conditionals
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 8
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn if, if-else, nested if-else, and switch-case statements in TypeScript with syntax, examples, and lab assignments.
readingTime: 9 min read
featured: false
---

# Conditional Statements in TypeScript

Conditional statements in TypeScript help in **decision-making** based on conditions.  
They allow code execution to vary depending on whether conditions are true or false.

---

## 1. `if` Statement
Executes a block of code only if the condition is true.

**Syntax:**
```typescript
if (condition) {
  // Code to execute if condition is true
}
```

**Example:**
```typescript
let age: number = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

---

## 2. `if-else` Statement
Executes one block if the condition is true, another if false.

**Syntax:**
```typescript
if (condition) {
  // Code if condition is true
} else {
  // Code if condition is false
}
```

**Example:**
```typescript
let num: number = 10;
if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
```

---

## 3. Nested `if-else` (if-else if)
Used when multiple conditions need to be checked sequentially.  
The first true condition executes, others are skipped.

**Syntax:**
```typescript
if (condition1) {
  // Code for condition1
} else if (condition2) {
  // Code for condition2
} else if (condition3) {
  // Code for condition3
} else {
  // Code if none are true
}
```

**Example:**
```typescript
let marks: number = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}
```

---

## 4. `switch-case` Statement
Tests a variable against multiple values.  
- `case` → block executes if matched.  
- `break` → stops execution after a match.  
- `default` → runs if no match is found.

**Syntax:**
```typescript
switch (expression) {
  case value1:
    // Code for case value1
    break;
  case value2:
    // Code for case value2
    break;
  default:
    // Code if no case matches
}
```

**Example:**
```typescript
let day: number = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}
```

---

## Key Takeaways
- **if** → Executes code if condition is true.  
- **if-else** → Executes one block for true, another for false.  
- **if-else-if** → Checks multiple conditions sequentially.  
- **switch-case** → Efficient for comparing a value against multiple cases.  

---

## Lab Assignments

### If Condition
- Check if a character is uppercase.  
- Check if a number is a multiple of 10.  

### If-Else Condition
- Check if a person is a teenager (age between 13 and 19).  
- Compare two numbers and print the larger one.  
- Check if a number is positive, negative, or zero.  
- Check if a person is eligible for a senior citizen discount (age >= 60).  

### Nested If-Else
- Check if a number is positive and even.  
- Check if a character is an uppercase vowel.  
- Find the largest of three numbers.  
- Check if a number is a multiple of both 5 and 10.  
- Check if a character is a vowel or consonant.  
- Check if a number is divisible by both 2 and 3.  

### Switch Case
- Print the corresponding month name for a given month number.  
- Perform basic arithmetic operations based on user input.  
- Print the season based on the month number.  

