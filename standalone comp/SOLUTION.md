# Solution Guide (For Trainer Only)

## Expected Solution

This document shows what the trainees should achieve after completing the exercise.

---

## Step 1: WelcomeComponent (standalone)

**File: `src/app/welcome/welcome.component.ts`**

```typescript
import { Component } from '@angular/core';

@Component({
  standalone: true,  // ADD THIS
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeText = 'Welcome to the Standalone Component Migration Exercise!';
}
```

---

## Step 2: AppComponent (standalone)

**File: `src/app/app.component.ts`**

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ADD THIS
import { FormsModule } from '@angular/forms';    // ADD THIS
import { WelcomeComponent } from './welcome/welcome.component';  // ADD THIS

@Component({
  standalone: true,  // ADD THIS
  imports: [CommonModule, FormsModule, WelcomeComponent],  // ADD THIS
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Standalone Migration';
  message = '';

  updateMessage(value: string): void {
    this.message = value;
  }
}
```

---

## Step 3: Delete AppModule

**Delete the file:** `src/app/app.module.ts`

This file is no longer needed!

---

## Step 4: Update main.ts

**File: `src/main.ts`**

```typescript
import { bootstrapApplication } from '@angular/platform-browser';  // CHANGE THIS
import { AppComponent } from './app/app.component';  // ADD THIS

bootstrapApplication(AppComponent)  // CHANGE THIS
  .catch(err => console.error(err));
```

---

## Verification Checklist

After completing all steps:

✅ `src/app/app.module.ts` is deleted
✅ `WelcomeComponent` has `standalone: true`
✅ `AppComponent` has `standalone: true`
✅ `AppComponent` imports `[CommonModule, FormsModule, WelcomeComponent]`
✅ `main.ts` uses `bootstrapApplication(AppComponent)`
✅ Application runs without errors: `ng serve`
✅ All functionality works (welcome message, input field, ngModel binding)

---

## Common Errors & Solutions

### Error: "Can't bind to 'ngModel'"
**Cause:** `FormsModule` not imported in AppComponent
**Solution:** Add `FormsModule` to the imports array

### Error: "Can't resolve all parameters for CommonModule"
**Cause:** Importing from wrong path
**Solution:** Import from `@angular/common`

### Error: "'app-welcome' is not a known element"
**Cause:** `WelcomeComponent` not imported in AppComponent
**Solution:** Add `WelcomeComponent` to imports array

### Error: "No NgModule metadata found"
**Cause:** Still using `bootstrapModule()` in main.ts
**Solution:** Switch to `bootstrapApplication()`

---

## Key Learning Points to Emphasize

1. **Standalone components are self-contained**
   - They declare their own dependencies
   - No need for NgModule

2. **Import what you use**
   - `CommonModule` for *ngIf, *ngFor, pipes
   - `FormsModule` for ngModel
   - Child components must be imported

3. **Bootstrap is simpler**
   - Direct component bootstrap
   - No module wrapper needed

4. **This is the future of Angular**
   - Recommended for new projects
   - Easier to understand and maintain
   - Better tree-shaking and bundle size
