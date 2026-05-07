# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).


---

In TypeScript, **Pick** and **Omit** are built-in utility types that allow you to create new types based on an existing "Master Interface." Instead of rewriting similar structures over and over, you "slice" exactly what you need from a source of truth.

This is the ultimate implementation of the **DRY (Don't Repeat Yourself)** principle.

---

## 1. The "Master Interface" Problem
Imagine you are building a social media app. You have a master `User` interface that contains everything about a person.

```typescript
interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Sensitive!
  profilePic: string;
  createdAt: Date;
}
```

Now, imagine you need a type for a **Public Profile** (which shouldn't show the password or email) and a type for **Updating a User** (where you might only allow changing the username and profile pic).

Without utility types, you would have to manually create `PublicUser` and `UpdateUser` interfaces. If you add a `middleName` to the master `User` later, you have to remember to update all three interfaces. **This is how bugs are born.**

---

## 2. Using `Pick` for Precision
`Pick<Type, Keys>` creates a new type by selecting a specific set of properties from the master interface. 

It says: *"I only want these specific fields."*

Example:
```typescript
// We only want the username and profile picture for the UI
type UserPreview = Pick<User, "username" | "profilePic">;

/* 
Resulting Type:
{
  username: string;
  profilePic: string;
}
*/
```

---

## 3. Using `Omit` for Exclusion
`Omit<Type, Keys>` does the opposite. It creates a type by taking everything **except** the properties you list. 

It says: *"Give me everything, but leave these out."*

Example:
```typescript
// We want to send user data to the frontend, but NEVER the password
type PublicUserProfile = Omit<User, "password">;

/* 
Resulting Type:
{
  id: string;
  username: string;
  email: string;
  profilePic: string;
  createdAt: Date;
}
*/
```

---

## 4. How this keeps your code DRY

Using `Pick` and `Omit` transforms your workflow from "Redundant Copying" to **"Single Source of Truth."**

### A. Automatic Synchronization
If you change the type of `username` from `string` to a custom `UsernameObject` in the Master `User` interface, every `Pick` and `Omit` that uses it will update **automatically**. You don't have to hunt through your code to fix broken types.

### B. Specialized Slices
These utilities allow you to create "slices" for specific layers of your app:
*   **Database Layer:** Uses the Master `User`.
*   **API Layer:** Uses `Omit<User, "password">`.
*   **UI Navbar:** Uses `Pick<User, "username" | "profilePic">`.

### C. Reduced Boilerplate
You spend less time writing `property: type` and more time defining the *relationships* between your data.