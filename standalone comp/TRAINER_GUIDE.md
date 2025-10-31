# Trainer Guide - Standalone Components Exercise

## Before the Training Session

### 1. Test the Project
```bash
cd "D:\Formations\Angular\Advanced Angular Exercice\standalone comp"
npm install
ng serve
```

Visit `http://localhost:4200/` and verify:
- Welcome message displays
- Input field works with two-way binding
- No console errors

### 2. What to Distribute to Trainees

Share the entire project folder containing:
- All source files (src/)
- Configuration files (angular.json, package.json, tsconfig.*)
- **EXERCISE_STEPS.md** (their main guide)
- README.md (setup instructions)

**DO NOT share:**
- SOLUTION.md (keep this for yourself)
- TRAINER_GUIDE.md (this file)
- node_modules/ (they'll install it)

---

## During the Training Session

### Introduction (5 minutes)

**Talking Points:**
- Angular is moving away from NgModule architecture
- Standalone components are simpler and more modular
- This is now the recommended approach for new projects
- Today you'll convert a traditional app to standalone

### Exercise Walkthrough (20-30 minutes)

**Phase 1: Let them try independently (10-15 min)**
- Have trainees follow EXERCISE_STEPS.md
- Encourage them to try without help first
- Walk around and observe common mistakes

**Phase 2: Guided solution (10-15 min)**
- Work through each step on a shared screen
- Use SOLUTION.md as your reference
- Explain the "why" behind each change

### Key Concepts to Emphasize

#### 1. **Standalone: true**
```typescript
@Component({
  standalone: true,  // Makes component self-contained
  // ...
})
```
"This tells Angular: I don't need an NgModule to work"

#### 2. **Imports Array**
```typescript
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, WelcomeComponent],
  // ...
})
```
"Standalone components must declare what they use"

#### 3. **Component as Import**
```typescript
imports: [WelcomeComponent]  // Child components are imported like modules
```
"Other components are imported just like modules"

#### 4. **Bootstrap Change**
```typescript
// Old way
platformBrowserDynamic().bootstrapModule(AppModule)

// New way
bootstrapApplication(AppComponent)
```
"No module wrapper needed - bootstrap the component directly"

---

## Common Trainee Mistakes to Watch For

### ❌ Mistake 1: Forgetting CommonModule
```typescript
imports: [FormsModule]  // Missing CommonModule!
```
**Result:** *ngIf won't work
**Fix:** Add `CommonModule` to imports

### ❌ Mistake 2: Not importing child component
```typescript
imports: [CommonModule, FormsModule]  // Missing WelcomeComponent!
```
**Result:** "app-welcome is not a known element"
**Fix:** Add `WelcomeComponent` to imports

### ❌ Mistake 3: Wrong import path
```typescript
import { CommonModule } from '@angular/core';  // WRONG!
```
**Fix:** Should be `'@angular/common'`

### ❌ Mistake 4: Leaving component in AppModule
Still has component in declarations after adding standalone: true
**Result:** Errors about component declared in multiple places
**Fix:** Remove from AppModule declarations (or delete AppModule)

---

## Q&A Preparation

**Q: "Do we need to use standalone for all new projects?"**
A: It's recommended. Angular team considers this the future. NgModules still work but are now optional.

**Q: "Can we mix standalone and NgModule components?"**
A: Yes! You can gradually migrate. Standalone components can be used in NgModules.

**Q: "What about routing?"**
A: Standalone routing uses `provideRouter()` - that's the next exercise!

**Q: "What about lazy loading?"**
A: Actually simpler with standalone! You lazy load components directly instead of modules.

**Q: "Is this production-ready?"**
A: Yes! Standalone has been stable since Angular 15, fully supported in Angular 20.

---

## Time Estimates

- Setup & introduction: 5 min
- Independent work: 10-15 min
- Guided solution: 10-15 min
- Q&A and discussion: 5-10 min
- **Total: 30-45 minutes**

---

## Next Steps / Follow-up Exercises

After this exercise, trainees will be ready for:
1. ✅ Standalone routing with `provideRouter()`
2. ✅ Standalone services with `providedIn: 'root'`
3. ✅ Lazy loading standalone components
4. ✅ Standalone HttpClient with `provideHttpClient()`

---

## Troubleshooting During Session

### "ng serve doesn't work"
1. Check Node version: `node --version` (should be 18+)
2. Check Angular CLI: `ng version`
3. Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### "Port 4200 already in use"
```bash
ng serve --port 4201
```

### "Can't find module errors"
```bash
npm install
```

---

## Success Criteria

By the end, trainees should:
- ✅ Understand what `standalone: true` means
- ✅ Know how to import dependencies in standalone components
- ✅ Be able to bootstrap a standalone application
- ✅ Understand the benefits of standalone over NgModule
- ✅ Feel confident to use standalone in their projects

---

## Additional Resources to Share

- Angular Docs: https://angular.dev/guide/components/importing
- Migration Guide: https://angular.dev/reference/migrations/standalone
- Blog Post: "Angular Standalone Components Guide"
