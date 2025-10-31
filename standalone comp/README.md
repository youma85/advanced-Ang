# Angular Standalone Components Exercise

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- Angular CLI installed globally: `npm install -g @angular/cli`

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Verify the installation:**
   ```bash
   ng version
   ```

3. **Run the application:**
   ```bash
   ng serve
   ```
   or
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200/`

   You should see the application running with:
   - A welcome message in a purple gradient box
   - An input field with two-way data binding

## Exercise Instructions
See `EXERCISE_STEPS.md` for detailed step-by-step instructions.

## Goal
Convert this NgModule-based application to use standalone components following Angular's modern architecture.

## Project Structure
```
standalone comp/
├── src/
│   ├── app/
│   │   ├── welcome/
│   │   │   ├── welcome.component.ts
│   │   │   ├── welcome.component.html
│   │   │   └── welcome.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.module.ts (TO BE REMOVED)
│   ├── main.ts (TO BE MODIFIED)
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── EXERCISE_STEPS.md (YOUR GUIDE)
```

## What You'll Learn
- Converting NgModule components to standalone
- Managing imports in standalone components
- Using `bootstrapApplication()` instead of `bootstrapModule()`
- Understanding Angular's modern application architecture
