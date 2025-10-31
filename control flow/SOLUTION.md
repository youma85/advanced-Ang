# Solution Guide - Control Flow Refactoring

This guide shows the trainer how the refactored code should look after trainees complete the exercise.

---

## Refactored Template (app.component.html)

```html
<div class="container">
  <h1>{{ title }}</h1>

  <!-- Exercise 1: @if with @else -->
  <section class="section">
    <h2>Login Status</h2>
    @if (isLoggedIn) {
      <p class="success">✓ You are logged in!</p>
      <button (click)="toggleLogin()">Logout</button>
    } @else {
      <p class="warning">Please log in to continue</p>
      <button (click)="toggleLogin()">Login</button>
    }
  </section>

  <!-- Exercise 2: @if with @else (no ng-template needed) -->
  <section class="section">
    <h2>Details Panel</h2>
    <button (click)="toggleDetails()">Toggle Details</button>
    @if (showDetails) {
      <div class="details-panel">
        <h3>Product Information</h3>
        <p>This panel contains detailed product information.</p>
        <p>You can add more content here.</p>
      </div>
    } @else {
      <p class="muted">Click the button to show details</p>
    }
  </section>

  <!-- Exercise 3: @for with track -->
  <section class="section">
    <h2>Product List</h2>
    <div class="product-grid">
      @for (product of products; track product.id; let i = $index) {
        <div class="product-card">
          <h3>{{ product.name }}</h3>
          <p class="price">${{ product.price }}</p>
          @if (product.inStock) {
            <p class="in-stock">In Stock</p>
          } @else {
            <p class="out-of-stock">Out of Stock</p>
          }
          <p class="index">Item #{{ i + 1 }}</p>
          <button (click)="removeProduct(product.id)" class="remove-btn">Remove</button>
        </div>
      }
    </div>
  </section>

  <!-- Exercise 4: @for with @empty block -->
  <section class="section">
    <h2>Shopping Cart</h2>
    <p class="instruction">Remove all products above to see the empty state</p>
    <div class="cart">
      @for (item of products; track item.id) {
        <div class="cart-item">
          {{ item.name }} - ${{ item.price }}
        </div>
      } @empty {
        <p class="muted">🛒 Your cart is empty. Add some products!</p>
      }
    </div>
  </section>

  <!-- Exercise 5: @switch with @case and @default -->
  <section class="section">
    <h2>User Role Dashboard</h2>
    <div class="role-switcher">
      <button (click)="changeUserRole('admin')">Admin</button>
      <button (click)="changeUserRole('user')">User</button>
      <button (click)="changeUserRole('guest')">Guest</button>
    </div>

    @switch (currentUser.role) {
      @case ('admin') {
        <div class="role-panel admin-panel">
          <h3>Admin Dashboard</h3>
          <p>You have full access to all features.</p>
          <ul>
            <li>Manage Users</li>
            <li>View Reports</li>
            <li>System Settings</li>
          </ul>
        </div>
      }
      @case ('user') {
        <div class="role-panel user-panel">
          <h3>User Dashboard</h3>
          <p>Welcome! You have standard access.</p>
          <ul>
            <li>View Profile</li>
            <li>Edit Settings</li>
          </ul>
        </div>
      }
      @case ('guest') {
        <div class="role-panel guest-panel">
          <h3>Guest Access</h3>
          <p>You have limited access. Please register for more features.</p>
        </div>
      }
      @default {
        <div class="role-panel">
          <p>Unknown role</p>
        </div>
      }
    }
  </section>

  <!-- Exercise 6: Nested @if and @for -->
  <section class="section">
    <h2>Available Products</h2>
    @if (products.length > 0) {
      <p>Showing {{ products.length }} product(s)</p>
      <ul class="simple-list">
        @for (product of products; track product.id) {
          <li>
            <span>{{ product.name }}</span>
            @if (product.inStock) {
              <span class="badge-success">Available</span>
            } @else {
              <span class="badge-danger">Unavailable</span>
            }
          </li>
        }
      </ul>
    }
  </section>
</div>
```

---

## Updated Component (app.component.ts)

The component can be simplified - **CommonModule is no longer needed** for control flow!

```typescript
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface User {
  name: string;
  role: 'admin' | 'user' | 'guest';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // No CommonModule needed!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Control Flow Exercise';

  isLoggedIn = true;
  showDetails = false;
  errorMessage = '';

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 25, inStock: true },
    { id: 3, name: 'Keyboard', price: 75, inStock: false },
    { id: 4, name: 'Monitor', price: 299, inStock: true }
  ];

  emptyList: string[] = [];

  currentUser: User = {
    name: 'John Doe',
    role: 'admin'
  };

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  changeUserRole(role: 'admin' | 'user' | 'guest') {
    this.currentUser.role = role;
  }

  // trackBy function is no longer needed with new syntax!
  // The track expression is inline in the template
}
```

---

## Key Changes for Trainer to Verify

### ✅ Removed CommonModule Import
The new control flow syntax is built-in, no imports needed!

### ✅ Removed trackBy Function
With `@for`, the track expression is inline: `track product.id`

### ✅ All `*ngIf` converted to `@if/@else`
- Cleaner syntax
- No ng-template needed for else blocks

### ✅ All `*ngFor` converted to `@for`
- Required `track` expression
- Variable names prefixed with `$`: `$index`, `$first`, etc.

### ✅ Added `@empty` blocks
- Shows content when array is empty
- Perfect UX improvement!

### ✅ All `ngSwitch` converted to `@switch`
- More readable
- Similar to TypeScript switch statements

---

## Common Mistakes to Watch For

1. **Forgetting `track` in `@for`** - It's required!
   ```html
   ❌ @for (item of items) { }
   ✅ @for (item of items; track item.id) { }
   ```

2. **Wrong variable names in `@for`**
   ```html
   ❌ let i = index
   ✅ let i = $index
   ```

3. **Leaving CommonModule imported**
   - It's not needed anymore for control flow!

4. **Not using `@empty`**
   - This is a new feature - encourage trainees to use it!

---

## Testing Checklist

- [ ] Login/Logout toggle works
- [ ] Details panel toggle works
- [ ] Product cards display correctly
- [ ] Remove button removes products
- [ ] Empty state shows when all products removed (cart section)
- [ ] Role switching changes dashboard content
- [ ] Available products list updates when products removed

---

## Discussion Points

1. **Performance**: The new syntax is more performant (no runtime directive overhead)
2. **Readability**: Cleaner, more intuitive syntax
3. **Type Safety**: Better TypeScript integration
4. **Bundle Size**: Smaller bundles (no need to import directives)
5. **@empty**: New feature that simplifies empty state handling

