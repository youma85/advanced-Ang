# Exercise Guide - Dispatch Board

## Objective

Implement advanced Angular 20 features in this Dispatch Board application while maintaining **standalone components only** (no NgModules).

## Prerequisites

Before starting, ensure:
- ✅ You have run `npm install`
- ✅ You can start the app with `npm run start:dev`
- ✅ The app displays the board page at `http://localhost:4200/board`
- ✅ The mock API is running at `http://localhost:3000`

## Exercises (Recommended Order)

### Exercise A: Signal-based Store

**Goal:** Create a signal-based store to manage application state.

**Location:** Create `src/app/core/state/board.store.ts`

**Tasks:**
1. Create a service using `@Injectable({ providedIn: 'root' })`
2. Define signals for:
   - `journeys` (array of Journey)
   - `vehicles` (array of Vehicle)
   - `isLoading` (boolean)
   - `error` (string | null)
3. Implement methods:
   - `loadJourneys()` - fetch from API and update signal
   - `loadVehicles()` - fetch from API and update signal
   - Handle loading and error states
4. Test loading/error states using the mock API query params:
   - `?delay=1500` to test loading
   - `?error=true` to test error handling

**Documentation:**
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [HttpClient](https://angular.dev/guide/http)

---

### Exercise B: Computed Signals & Effects

**Goal:** Use computed signals for derived data and effects for side effects.

**Location:** `src/app/core/state/board.store.ts` and `src/app/board/board.page.ts`

**Tasks:**
1. In the store, add computed signals:
   - `scheduledJourneys()` - filter journeys by status 'Scheduled'
   - `inProgressJourneys()` - filter journeys by status 'InProgress'
   - `availableVehicles()` - vehicles not assigned to any journey
2. In `BoardPageComponent`:
   - Inject the store
   - Use `effect()` to load data when component initializes
   - Display journeys grouped by status
   - Show loading and error states in the template

**Documentation:**
- [Computed Signals](https://angular.dev/guide/signals#computed-signals)
- [Effects](https://angular.dev/guide/signals#effects)

---

### Exercise C: Immutable State Updates (Assignment Logic)

**Goal:** Implement vehicle assignment to journeys with immutable state updates.

**Location:** `src/app/core/state/board.store.ts` and `src/app/board/board.page.html`

**Tasks:**
1. In the store, add method:
   - `assignVehicle(journeyId: number, vehicleId: number)`
   - Update journey's `assignedVehicleId` immutably
   - Use `update()` method on signals to ensure reactivity
   - Optionally: make PATCH request to API to persist change
2. In the board template:
   - Display a dropdown/select for each journey to choose a vehicle
   - Call `store.assignVehicle()` on selection change
3. Verify that the UI updates reactively when assignment changes

**Documentation:**
- [Signal Updates](https://angular.dev/guide/signals#writable-signals)
- [Immutability Patterns](https://angular.dev/guide/signals#mutability)

---

### Exercise D: Route → Input Signal Binding

**Goal:** Convert route parameter binding to use input signals.

**Location:** `src/app/journey/journey.page.ts`

**Tasks:**
1. Replace `@Input() id: string` with input signal:
   ```typescript
   id = input.required<string>();
   ```
2. Create a computed signal to get journey details from the store:
   ```typescript
   journey = computed(() => {
     const journeyId = Number(this.id());
     return this.store.journeys().find(j => j.id === journeyId);
   });
   ```
3. Update the template to display journey details using `journey()` signal
4. Verify that navigating to `/board/journey/1` displays the correct journey

**Documentation:**
- [Input Signals](https://angular.dev/guide/signals#input-signals)
- [Router Input Binding](https://angular.dev/guide/routing#route-parameters-as-inputs)

---

### Exercise E: @defer for Heavy Views (Optional Advanced)

**Goal:** Use Angular's `@defer` to lazy-load heavy components or views.

**Location:** `src/app/board/board.page.html`

**Tasks:**
1. Create a new component for detailed journey list (e.g., `JourneyListDetailComponent`)
2. Use `@defer` to load it only when needed:
   ```html
   @defer (on viewport) {
     <app-journey-list-detail />
   } @loading {
     <p>Loading detailed view...</p>
   } @error {
     <p>Failed to load detailed view</p>
   }
   ```
3. Test different triggers: `on viewport`, `on idle`, `on interaction`, etc.

**Documentation:**
- [@defer Directive](https://angular.dev/guide/defer)
- [Lazy Loading Components](https://angular.dev/guide/ngmodule-faq#what-is-lazy-loading)

---

## Testing Checklist

After completing the exercises, verify:

- [ ] App loads without errors
- [ ] Board page displays list of journeys
- [ ] Loading state appears when adding `?delay=1500` to API URL
- [ ] Error state appears when adding `?error=true` to API URL
- [ ] Vehicle assignment updates the UI reactively
- [ ] Journey detail page receives and displays the correct ID
- [ ] Journey detail page shows full journey information
- [ ] All signals update correctly and trigger re-renders
- [ ] No console errors or warnings

## Additional Challenges (Optional)

1. Add filtering/sorting of journeys
2. Implement journey search functionality
3. Add vehicle availability indicator
4. Create a dashboard with statistics (using computed signals)
5. Add form validation for vehicle assignment
6. Implement undo/redo for assignments
7. Add real-time updates simulation (polling or WebSocket mock)

## Tips

- Use Angular DevTools to inspect signals and their values
- Test edge cases (empty lists, missing data, API failures)
- Keep state updates immutable
- Use TypeScript's strict mode features
- Write unit tests for your store methods

## Resources

- [Angular Signals Official Guide](https://angular.dev/guide/signals)
- [Angular Standalone Components](https://angular.dev/guide/standalone-components)
- [Angular Router Guide](https://angular.dev/guide/routing)
- [RxJS and Signals Interoperability](https://angular.dev/guide/signals#rxjs-interop)

Good luck! 🚀
