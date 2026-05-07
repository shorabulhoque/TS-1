# Advanced TypeScript & OOP Mastery

This repository contains a comprehensive suite of solutions demonstrating advanced problem-solving with TypeScript and Object-Oriented Programming (OOP). It includes strictly typed logic for complex data structures and a series of technical deep-dives into the TypeScript ecosystem.

## 🚀 Project Overview

The project is structured into two core components:
1.  **Technical Solutions (`solutions.ts`):** 7 high-performance TypeScript functions and classes covering array manipulation, generic constraints, type guarding, and class inheritance.
2.  **Architectural Blogs:** Four detailed articles exploring the balance between flexibility and type safety in modern web development.

## 🛠 Tech Stack

*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Environment:** Node.js / ts-node
*   **Methodology:** Object-Oriented Programming (OOP), Functional Programming, and Defensive Coding.

## 📁 File Structure

```text
├── solutions.ts      # Main logic containing all technical solutions
├── blog-1.md         # Technical analysis: any vs. unknown
├── blog-2.md         # Deep dive: Utility Types (Pick & Omit)
├── blog-3.md         # Practical guide: Type Variables & Generics
├── blog-4.md         # Architectural guide: The Four Pillars of OOP
└── README.md         # Project documentation
```

## 📝 Problem Set Highlights

*   **Type Guarding:** Utilizing union types and custom guards to handle dynamic data.
*   **Generics:** Building a strictly-typed `getProperty` function using `keyof` constraints for maximum safety.
*   **OOP Implementation:** Leveraging `private` and `public` access modifiers alongside inheritance to manage complex object relationships.
*   **Data Integrity:** Implementing intersection logic and type-safe object mutations.

## 📖 Technical Blogs

I have authored four technical blog posts exploring core TypeScript concepts and best practices:

1. **Any vs. Unknown:** An analysis of why `any` is a type-safety hole and how `unknown` encourages defensive programming through type narrowing.
2. **The Four Pillars of OOP:** A guide on managing complexity in large-scale applications using Inheritance, Polymorphism, Abstraction, and Encapsulation.
3. **Mastering Pick & Omit:** How to use utility types to create specialized "slices" of interfaces while keeping your code **DRY** (Don't Repeat Yourself).
4. **The Power of Generics:** A deep dive into building reusable, strictly-typed components that adapt to any data structure using type variables.

## ⚙️ How to Run

To execute the solutions locally, ensure you have TypeScript and `ts-node` installed:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   
```
2. **Execute the solution file:**
   ```bash
   # Run directly using ts-node
   npx ts-node solutions.ts
   
```

---

### Key Features:
*   **Strict Typing:** Zero use of `any` within the logic to ensure full compile-time protection.
*   **Optimized Logic:** Using modern ES6+ methods for clean, readable, and efficient data processing.
*   **Professional Documentation:** Each function is designed for scalability and clear intent.