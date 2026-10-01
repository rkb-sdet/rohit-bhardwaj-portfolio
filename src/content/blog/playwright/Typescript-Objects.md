---
title: "Objects in TypeScript"
slug: playwright-typescript-objects
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 14
tags:
  - Playwright
  - TypeScript
  - JavaScript
  - Automation Testing
date: 2026-10-02
summary: Learn how to create and use objects in TypeScript with properties, methods, different approaches, and a summary comparison table.
readingTime: 10 min read
featured: false
---

# Objects in TypeScript

---

## 1. What is an Object?
An **object** is a collection of key-value pairs.  
It contains:
- **Properties (variables)** → e.g., `name`, `age`, `salary`  
- **Methods (functions)** → e.g., `getDetails()`, `setDetails()`  

Objects represent real-world entities like **Employee**, **Student**, **Product**, etc.

**Example: Employee**
```typescript
let employee = {
  name: "John",
  salary: 50000,
  job: "Engineer",
  getDetails: function () {
    return `${this.name} is a ${this.job} earning ${this.salary}`;
  }
};

console.log(employee.getDetails()); // John is a Engineer earning 50000
```

**Accessing Properties:**
- Dot notation → `employee.name`  
- Bracket notation → `employee["name"]`  

**Modifying Properties:**
```typescript
employee.job = "Manager";
```

---

## 2. Different Ways to Create Objects in TypeScript

1. **Using object type (JS/TS)**  
2. **Inline type object (TS)**  
3. **Using type aliases (TS)**  
4. **Using classes (JS/TS)**  

---

### Approach 1: Using Object Type
Basic way without strict typing.
```typescript
let employee: object = {
  name: "John",
  age: 30,
  job: "Engineer"
};
```
⚠ Limitation: Cannot access properties directly unless using `any` or defining structure.

---

### Approach 2: Inline Type Object
Define structure while creating the object.
```typescript
let student: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Scott",
  age: 15,
  grade: "A",
  getSummary: function () {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
  }
};
```
⚠ Limitation: Need to repeat type structure for each object.

---

### Approach 3: Using Type Aliases
Reusable type definitions.
```typescript
type Product = {
  name: string;
  price: number;
  getInfo: () => string;
};

let book1: Product = {
  name: "TS Handbook",
  price: 500,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  }
};

let book2: Product = {
  name: "JS Guide",
  price: 300,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  }
};
```

**Intersection Types:**
```typescript
type Personal = { name: string; age: number };
type Contact = { email: string; phone: string };

type Candidate = Personal & Contact & {
  getContactInfo: () => string;
};
```

---

### Approach 4: Using Classes
Blueprint for creating multiple objects with same structure and behavior.
```typescript
class Person {
  constructor(public ssn: string, public firstName: string, public lastName: string) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getDetails(): string {
    return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
  }
}

let person1 = new Person("123", "John", "Doe");
console.log(person1.getDetails()); // SSN: 123, Name: John Doe
```

---

## Summary Table

| Approach       | TypeScript Support | Reusability | Recommended For            |
|----------------|--------------------|-------------|----------------------------|
| Object Type    | Basic              | ❌          | Small, quick objects       |
| Inline Type    | Strong             | ❌          | One-time objects           |
| Type Aliases   | Strong             | ✅          | Reusable object types      |
| Classes        | Strongest          | ✅✅        | Object-oriented designs    |

---

## Key Takeaways
✔ Objects store properties and methods.  
✔ Multiple ways to create objects: object type, inline type, type aliases, classes.  
✔ Use **type aliases** for reusable definitions.  
✔ Use **classes** for object-oriented design and scalability.  

