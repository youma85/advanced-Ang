# Dispatch Board Starter

This is a training starter project for Angular 20 using **standalone components only** (no NgModules).

## Overview

This project provides a minimal skeleton for a Dispatch Board application. It includes:

- ✅ Angular 20 with standalone components
- ✅ Standalone providers (no NgModule)
- ✅ Basic routing configuration
- ✅ Mock API server with delay/error simulation
- ✅ Placeholder components ready for implementation

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

```bash
npm install
```

## Running the Application

### Option 1: Run Angular app and Mock API separately

**Terminal 1 - Angular app:**
```bash
npm start
```
The app will be available at: `http://localhost:4200`

**Terminal 2 - Mock API server:**
```bash
npm run start:api
```
The API will be available at: `http://localhost:3000`

### Option 2: Run both concurrently (recommended)

```bash
npm run start:dev
```

This will start both the Angular app and the Mock API server in parallel.

## Mock API Endpoints

The mock API server provides the following endpoints:

- `GET /api/journeys` - Get all journeys
- `GET /api/journeys/:id` - Get a specific journey
- `GET /api/vehicles` - Get all vehicles
- `GET /api/vehicles/:id` - Get a specific vehicle
- `GET /api/tasks` - Get all tasks
- `PATCH /api/journeys/:id` - Update a journey (e.g., assign vehicle)

### Testing Delay & Error States

The mock API supports query parameters to simulate loading states and errors:

**Delay (in milliseconds):**
```
http://localhost:3000/api/journeys?delay=1500
```
This will delay the response by 1500ms, useful for testing loading states.

**Error simulation:**
```
http://localhost:3000/api/journeys?error=true
```
This will return a 500 error, useful for testing error handling.

**Combined:**
```
http://localhost:3000/api/journeys?delay=2000&error=true
```

## Project Structure

```
dispatch-board-starter/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   └── sidebar/
│   │   │   └── models/
│   │   │       ├── journey.model.ts
│   │   │       └── vehicle.model.ts
│   │   ├── board/
│   │   │   ├── board.page.ts
│   │   │   ├── board.page.html
│   │   │   └── board.page.css
│   │   ├── journey/
│   │   │   ├── journey.page.ts
│   │   │   ├── journey.page.html
│   │   │   └── journey.page.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.routes.ts
│   ├── main.ts (standalone bootstrap)
│   ├── index.html
│   └── styles.css
├── server/
│   └── server.js (Mock API)
├── package.json
├── angular.json
├── tsconfig.json
├── README.md
└── EXERCISE.md
```

## Important Notes

- **This project uses ONLY standalone components.** There are no NgModules.
- The bootstrap process uses `bootstrapApplication()` in `src/main.ts`
- Routes are configured using `provideRouter()` with standalone components
- All components are marked with `standalone: true`

## Next Steps

See `EXERCISE.md` for the list of exercises to implement.

## Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

To run unit tests:

```bash
npm test
```

## License

This project is for educational purposes only.
