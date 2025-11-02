# Angular Control Flow Exercise

## Overview
This project contains examples of **OLD-STYLE** Angular control flow directives that need to be refactored to the **NEW** Angular control flow syntax.

## Your Mission
Refactor the template in `src/app/app.component.html` to use modern Angular control flow syntax.

---

## Tasks to Complete

### 1. Replace `*ngIf` blocks with `@if`

**Old syntax:**
```html
<div *ngIf="isLoggedIn">
  <p>You are logged in!</p>
</div>
<div *ngIf="!isLoggedIn">
  <p>Please log in</p>
</div>
```

**New syntax:**
```html
@if (isLoggedIn) {
  <p>You are logged in!</p>
} @else {
  <p>Please log in</p>
}
```

### 2. Replace `*ngIf` with else clause

**Old syntax:**
```html
<div *ngIf="showDetails; else noDetails">
  <div>Details here</div>
</div>
<ng-template #noDetails>
  <p>No details</p>
</ng-template>
```

**New syntax:**
```html
@if (showDetails) {
  <div>Details here</div>
} @else {
  <p>No details</p>
}
```

### 3. Replace `*ngFor` loops with `@for`

**Old syntax:**
```html
<div *ngFor="let product of products; let i = index; trackBy: trackByProductId">
  {{ product.name }}
</div>
```

**New syntax:**
```html
@for (product of products; track product.id; let i = $index) {
  <div>{{ product.name }}</div>
}
```

**Note:** The `track` expression is required in the new syntax!

### 4. Add `@empty` block

**Old syntax:**
```html
<div *ngFor="let item of products">
  {{ item.name }}
</div>
<!-- No easy way to show "empty state" -->
```

**New syntax:**
```html
@for (item of products; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No products available</p>
}
```

### 5. Replace `[ngSwitch]` with `@switch`

**Old syntax:**
```html
<div [ngSwitch]="currentUser.role">
  <div *ngSwitchCase="'admin'">Admin panel</div>
  <div *ngSwitchCase="'user'">User panel</div>
  <div *ngSwitchDefault>Guest panel</div>
</div>
```

**New syntax:**
```html
@switch (currentUser.role) {
  @case ('admin') {
    <div>Admin panel</div>
  }
  @case ('user') {
    <div>User panel</div>
  }
  @default {
    <div>Guest panel</div>
  }
}
```

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200`

4. **Start refactoring:**
   Open `src/app/app.component.html` and replace all old-style directives with new syntax!

---

## Key Differences Summary

| Old Syntax | New Syntax |
|------------|------------|
| `*ngIf="condition"` | `@if (condition) { }` |
| `*ngIf="condition; else template"` | `@if (condition) { } @else { }` |
| `*ngFor="let item of items"` | `@for (item of items; track item.id) { }` |
| `[ngSwitch]` + `*ngSwitchCase` | `@switch (expr) { @case (val) { } }` |
| N/A | `@empty { }` (for empty arrays in `@for`) |

---

## Important Notes

- The new `@for` syntax **requires** a `track` expression (previously optional `trackBy`)
- The `@empty` block is a new feature only available with the new syntax
- Variables in `@for` use `$` prefix: `$index`, `$count`, `$first`, `$last`, `$even`, `$odd`
- No need to import `CommonModule` when using the new control flow syntax!

---

## Verification

After refactoring:
1. The application should work exactly the same
2. All interactive features (buttons, toggles) should still function
3. Try removing all products to see the `@empty` block in action

Good luck! 🚀
