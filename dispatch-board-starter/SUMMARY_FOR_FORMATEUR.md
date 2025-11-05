# Summary for Trainer - Dispatch Board Starter

## Overview

This is a ready-to-use starter project for teaching Angular 20 advanced features with **standalone components only**.

## What's Provided

### ✅ Working Features

1. **Standalone Components Architecture**
   - No NgModules anywhere
   - Bootstrap via `bootstrapApplication()` in `src/main.ts`
   - All components marked with `standalone: true`
   - Routes configured via `provideRouter()`

2. **Basic Application Structure**
   - Root component with header and sidebar
   - Board page (placeholder with TODOs)
   - Journey detail page (placeholder with route→input binding)
   - Routing configured with lazy loading

3. **Mock API Server**
   - Express server with CORS enabled
   - Endpoints for journeys, vehicles, tasks
   - Query params support:
     - `?delay=1500` - adds delay in ms
     - `?error=true` - returns 500 error
   - Location: `server/server.js`
   - Start with: `npm run start:api`

4. **TypeScript Models**
   - Journey interface: `src/app/core/models/journey.model.ts`
   - Vehicle interface: `src/app/core/models/vehicle.model.ts`

### ❌ NOT Implemented (Students Must Do)

1. **Signal-based Store**
   - Students must create `src/app/core/state/board.store.ts`
   - Implement signals for state management
   - Add loading/error states

2. **Computed Signals & Effects**
   - Students must use `computed()` for derived data
   - Use `effect()` for side effects (data loading)

3. **Vehicle Assignment Logic**
   - Students must implement immutable state updates
   - Use signal `update()` method

4. **Input Signals for Route Params**
   - Currently uses `@Input() id: string`
   - Students must convert to `id = input.required<string>()`

5. **@defer Directive**
   - Students must implement lazy loading for heavy views

## File Locations for Student Implementation

| Exercise | Primary Files | Additional Files |
|----------|--------------|------------------|
| A - Signal Store | `src/app/core/state/board.store.ts` (create new) | `src/app/board/board.page.ts` |
| B - Computed & Effects | `src/app/core/state/board.store.ts`<br>`src/app/board/board.page.ts` | `src/app/board/board.page.html` |
| C - Assignment Logic | `src/app/core/state/board.store.ts`<br>`src/app/board/board.page.html` | - |
| D - Route→Input Signals | `src/app/journey/journey.page.ts`<br>`src/app/journey/journey.page.html` | - |
| E - @defer | `src/app/board/board.page.html` | Create new detail component |

## Mock API Usage for Demonstrations

### Testing Loading States

```bash
# Open browser console and watch network tab
http://localhost:3000/api/journeys?delay=2000
```

Students should see:
- Loading spinner/message for 2 seconds
- Then data appears

### Testing Error States

```bash
http://localhost:3000/api/journeys?error=true
```

Students should see:
- Error message displayed
- Graceful error handling (no crash)

### Testing Both Combined

```bash
http://localhost:3000/api/journeys?delay=1500&error=true
```

Students should see:
- Loading for 1.5 seconds
- Then error message

## Running the Project

### Quick Start (Recommended)
```bash
npm install
npm run start:dev
```

This starts both Angular app (port 4200) and API server (port 3000) concurrently.

### Separate Terminals
```bash
# Terminal 1
npm start

# Terminal 2
npm run start:api
```

## Key Teaching Points

### 1. Standalone Components
- **Show:** `src/main.ts` - no `AppModule`
- **Show:** Each component has `standalone: true`
- **Emphasize:** This is the future of Angular (Angular 20+)

### 2. Signal-based State Management
- **Explain:** Why signals are better than RxJS for simple state
- **Show:** Automatic dependency tracking
- **Demonstrate:** Reactive updates without subscriptions

### 3. Computed Signals
- **Show:** How `computed()` creates derived state
- **Demonstrate:** Automatic recalculation when dependencies change
- **Compare:** With old approach using pipes/getters

### 4. Effects
- **Explain:** When to use effects vs. computed
- **Show:** Side effects (HTTP calls, logging)
- **Warning:** Don't overuse - prefer computed when possible

### 5. Immutable State Updates
- **Demonstrate:** Wrong way (mutation) vs. right way (immutable)
- **Show:** Using `update()` with spread operators
- **Explain:** Why immutability matters for reactivity

### 6. Input Signals
- **Show:** Old way `@Input()` vs. new way `input()`
- **Demonstrate:** Integration with computed signals
- **Explain:** Type safety and required inputs

### 7. @defer
- **Show:** Different triggers (viewport, idle, interaction)
- **Demonstrate:** Performance improvement with lazy loading
- **Explain:** When to use @defer

## Common Student Mistakes to Watch For

1. **Forgetting `standalone: true`** in new components
2. **Mutating signals directly** instead of using `set()`/`update()`
3. **Not handling loading/error states** in the UI
4. **Using effects for computed values** (should use `computed()` instead)
5. **Forgetting to call signals as functions** (e.g., `id` instead of `id()`)
6. **Not importing required standalone components** in component imports array

## Extension Ideas

After completing core exercises, advanced students can:

1. Implement journey filtering/sorting
2. Add a statistics dashboard with computed signals
3. Create a vehicle availability calendar
4. Implement undo/redo with signal history
5. Add optimistic UI updates
6. Create a command pattern for state changes
7. Add unit tests for the store
8. Implement WebSocket mock for real-time updates

## Troubleshooting

### API Server Won't Start
- Check if port 3000 is already in use
- Verify `express` and `cors` are installed: `npm install`

### Angular App Won't Start
- Check Angular CLI version: `ng version`
- Clear cache: `rm -rf .angular/cache`
- Reinstall: `rm -rf node_modules && npm install`

### CORS Issues
- Verify API server is using `cors()` middleware
- Check API is running on `http://localhost:3000`
- Ensure Angular app uses correct API URL

## Testing the Starter Before Distribution

1. Clone to fresh directory
2. Run `npm install`
3. Run `npm run start:dev`
4. Verify app loads at `http://localhost:4200`
5. Verify API responds at `http://localhost:3000/api/journeys`
6. Test delay: `http://localhost:3000/api/journeys?delay=1500`
7. Test error: `http://localhost:3000/api/journeys?error=true`
8. Navigate to journey detail: `http://localhost:4200/board/journey/1`
9. Check no console errors

## Contact & Support

For issues or questions about this starter project, refer students to:
- `README.md` - Installation and usage
- `EXERCISE.md` - Exercise instructions
- Angular official docs: https://angular.dev

---

**Project Status:** ✅ Ready for distribution
**Last Updated:** 2025-11-04
**Angular Version:** 20.0.0
**Architecture:** Standalone Components Only
