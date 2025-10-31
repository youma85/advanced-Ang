# Exercise: Convert NgModule-based Components to Standalone

## Objective
Convert this NgModule-based Angular application to use standalone components.

## Current Structure
The application currently uses:
- `AppModule` (NgModule-based architecture)
- `AppComponent` (declared in module)
- `WelcomeComponent` (declared in module)
- Traditional `platformBrowserDynamic().bootstrapModule()`

## Your Tasks

### Step 1: Convert WelcomeComponent to Standalone
1. Open `src/app/welcome/welcome.component.ts`
2. Add `standalone: true` to the `@Component` decorator
3. Remove the component from `AppModule` declarations

**Hint:** A standalone component looks like this:
```typescript
@Component({
  standalone: true,
  selector: 'app-welcome',
  // ... other properties
})
```

---

### Step 2: Convert AppComponent to Standalone
1. Open `src/app/app.component.ts`
2. Add `standalone: true` to the `@Component` decorator
3. Import required dependencies:
   - `FormsModule` (for ngModel)
   - `CommonModule` (for *ngIf)
   - `WelcomeComponent` (the child component)
4. Add an `imports` array to the `@Component` decorator

**Hint:** The component should import everything it needs:
```typescript
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, WelcomeComponent],
  selector: 'app-root',
  // ... other properties
})
```

---

### Step 3: Remove AppModule
1. Delete `src/app/app.module.ts` (you no longer need it!)

---

### Step 4: Update main.ts
1. Open `src/main.ts`
2. Replace `platformBrowserDynamic().bootstrapModule()` with `bootstrapApplication()`
3. Import `bootstrapApplication` from `@angular/platform-browser`
4. Import `AppComponent`
5. Bootstrap the AppComponent directly

**Hint:** The new bootstrap looks like this:
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
```

---

### Step 5: Verify the Application Works
1. Run `ng serve` or `npm start`
2. Open your browser to `http://localhost:4200`
3. Verify that:
   - The welcome message displays
   - The input field works
   - Two-way binding with ngModel functions correctly
   - No console errors appear

---

## Success Criteria
✅ No AppModule file exists
✅ All components have `standalone: true`
✅ main.ts uses `bootstrapApplication()`
✅ Application runs without errors
✅ All functionality works as before

## Common Mistakes to Avoid
- ❌ Forgetting to add `CommonModule` import (needed for *ngIf, *ngFor, etc.)
- ❌ Forgetting to add `FormsModule` import (needed for ngModel)
- ❌ Not importing child components in the parent component
- ❌ Leaving the component in AppModule declarations after adding standalone

---

## Bonus Challenge (Optional)
If you finish early, try adding a new standalone component to display the current date and time!
