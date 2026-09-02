---
title: "Selenium Locators: A Practical Guide"
slug: selenium-locators
category: Automation Testing
technology: Selenium
tags:
  - Selenium
  - Java
  - Locators
  - WebDriver
date: 2026-08-22
summary: Choose stable Selenium locators and avoid brittle browser automation.
readingTime: 7 min read
featured: true
---

# Selenium Locators: A Practical Guide

A reliable locator is specific enough to identify the intended element and stable enough to survive normal UI changes.

## Start with user-facing identity

Prefer a unique `id`, accessible role, label, or dedicated test attribute when the application provides one. These choices communicate intent better than long CSS chains.

## CSS selectors and XPath

CSS selectors are concise for most relationships. XPath is useful when you need text relationships or a more expressive traversal, but keep it readable.

```java
WebElement loginButton = driver.findElement(By.cssSelector("[data-testid='login']"));
loginButton.click();
```

## Keep locators maintainable

Store locators near the page object that owns them, use meaningful names, and review them when the UI contract changes. Stable selectors reduce flaky tests and debugging time.
