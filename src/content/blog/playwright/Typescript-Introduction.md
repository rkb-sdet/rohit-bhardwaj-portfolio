---
title: "TypeScript - Introduction"
slug: playwright-typescript-introduction
category: Automation Testing
technology: Playwright
series: Playwright Fundamentals
seriesOrder: 3
tags:
   - Playwright
   - TypeScript
   - JavaScript
   - Automation Testing
date: 2026-10-02
summary: A beginner-friendly guide to TypeScript setup, compilation, TSX execution, and writing your first TypeScript program for Playwright automation.
readingTime: 8 min read
featured: false
---

---

# Getting Started with TypeScript

## 1. Introduction to TypeScript

### What is TypeScript?
- TypeScript is a **superset of JavaScript** — it means everything in JavaScript works in TypeScript, plus extra features.
- It **compiles (converts)** into plain JavaScript, so it runs anywhere JavaScript does (browsers, Node.js, etc.).
- TypeScript files use the extension **`.ts`** instead of `.js`.

---

## 2. How TypeScript Works
1. You write code in **TypeScript** (`.ts` files).
2. The **TypeScript compiler (`tsc`)** converts it into JavaScript (`.js` files).
3. The JavaScript code runs in browsers, Node.js, or any JavaScript environment.

Think of it like this:
- **TypeScript = Teacher** (helps you avoid mistakes).
- **JavaScript = Student** (executes the final work).

---

## 3. TypeScript vs JavaScript
- ✅ All JavaScript code is valid TypeScript.
- TypeScript adds **optional features** like:
  - **Types** (string, number, boolean, etc.)
  - **Interfaces**
  - **Classes**
- These features make coding **safer, cleaner, and easier to manage**.

---

## 4. Why Use TypeScript?
- **Catch mistakes early** (before running the code).
- **Manage large projects** with better structure.
- **Works with existing JavaScript** — you don’t need to throw away old code.

---

## 5. Setting Up TypeScript

### Tools You Need
- **Node.js** → Runs the TypeScript compiler.
- **TypeScript Compiler (`tsc`)** → Converts `.ts` files to `.js`.
- **VS Code** → Recommended editor for TypeScript.
- **TSX** → Lets you run `.ts` files directly without compiling.

---

### Step 1: Install Node.js
1. Visit the [Node.js download page](https://nodejs.org).
2. Download and install the latest version (18+ recommended).
3. Verify installation:
   ```bash
   node -v
   ```
   Example output: `v22.12.0`

---

### Step 2: Install TypeScript Compiler
1. Open terminal/command prompt.
2. Run:
   ```bash
   npm install -g typescript
   ```
3. Verify installation:
   ```bash
   tsc -v
   ```
   Example output: `Version 5.8.2`

**Windows Fix (if `tsc` not recognized):**
- Add this path to your system environment variables:
  ```
  C:\Users\<your-username>\AppData\Roaming\npm
  ```

---

### Step 3: Install TSX (Optional but Recommended)
Run:
```bash
npm install -g tsx
```
This allows you to run `.ts` files directly:
```bash
tsx app.ts
```

---

### Step 4: Install VS Code
1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com).
2. Install it for your OS (Windows/Mac/Linux).
3. Open VS Code — you’re ready to code!

---

## 6. Quick Summary
- **Node.js** → Runs TypeScript.
- **TypeScript Compiler (`tsc`)** → Converts `.ts` → `.js`.
- **VS Code** → Best editor for TypeScript.
- **TSX** → Run TypeScript directly.

---

## 7. First TypeScript Program

### Steps
1. **Create a Project Folder**
   - Example: `TSDemo`

2. **Open the Folder in VS Code**
   - File → Open Folder → Select `TSDemo`

3. **Create a TypeScript File**
   - Name: `app.ts`
   - Add code:
     ```typescript
     console.log("Welcome to TypeScript!");
     ```

4. **Open Terminal in VS Code**
   - Shortcut: `Ctrl + ~`

5. **Compile TypeScript to JavaScript**
   ```bash
   tsc app.ts
   ```
   - Generates `app.js`

6. **Run the JavaScript File**
   ```bash
   node app.js
   ```
   Output:
   ```
   Welcome to TypeScript!
   ```

---

### Run TypeScript Without Compiling
If you installed **TSX**, simply run:
```bash
tsx app.ts
```

---

## 8. Common Error & Fix

**Error:** Execution Policies issue while running `tsc`.

**Solution:**
Run this command in PowerShell:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

