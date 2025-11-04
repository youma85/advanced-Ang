/**
 * Mock API Server for Dispatch Board Training
 * Supports query params:
 * - ?delay=1500 : adds delay in milliseconds before response
 * - ?error=true : returns 500 error
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for Angular app
app.use(cors());
app.use(express.json());

// Mock data
const journeys = [
  {
    id: 1,
    title: 'Journey to Paris',
    startTime: '2025-11-05T08:00:00Z',
    endTime: '2025-11-05T12:00:00Z',
    status: 'Scheduled',
    assignedVehicleId: null
  },
  {
    id: 2,
    title: 'Journey to Lyon',
    startTime: '2025-11-05T09:00:00Z',
    endTime: '2025-11-05T14:00:00Z',
    status: 'InProgress',
    assignedVehicleId: 1
  },
  {
    id: 3,
    title: 'Journey to Marseille',
    startTime: '2025-11-05T10:00:00Z',
    endTime: '2025-11-05T16:00:00Z',
    status: 'Scheduled',
    assignedVehicleId: 2
  },
  {
    id: 4,
    title: 'Journey to Bordeaux',
    startTime: '2025-11-05T11:00:00Z',
    endTime: '2025-11-05T17:00:00Z',
    status: 'Scheduled',
    assignedVehicleId: null
  },
  {
    id: 5,
    title: 'Journey to Toulouse',
    startTime: '2025-11-05T13:00:00Z',
    endTime: '2025-11-05T19:00:00Z',
    status: 'Finished',
    assignedVehicleId: 3
  },
  {
    id: 6,
    title: 'Journey to Nice',
    startTime: '2025-11-06T08:00:00Z',
    endTime: '2025-11-06T13:00:00Z',
    status: 'Scheduled',
    assignedVehicleId: null
  },
  {
    id: 7,
    title: 'Journey to Strasbourg',
    startTime: '2025-11-06T09:30:00Z',
    endTime: '2025-11-06T15:30:00Z',
    status: 'Scheduled',
    assignedVehicleId: null
  },
  {
    id: 8,
    title: 'Journey to Lille',
    startTime: '2025-11-06T10:00:00Z',
    endTime: '2025-11-06T14:00:00Z',
    status: 'InProgress',
    assignedVehicleId: 1
  }
];

const vehicles = [
  {
    id: 1,
    number: 'VEH-001',
    capacity: 50
  },
  {
    id: 2,
    number: 'VEH-002',
    capacity: 40
  },
  {
    id: 3,
    number: 'VEH-003',
    capacity: 60
  },
  {
    id: 4,
    number: 'VEH-004',
    capacity: 35
  },
  {
    id: 5,
    number: 'VEH-005',
    capacity: 55
  }
];

const tasks = [
  {
    id: 1,
    title: 'Prepare vehicle VEH-001',
    journeyId: 2,
    completed: false
  },
  {
    id: 2,
    title: 'Check route to Lyon',
    journeyId: 2,
    completed: true
  },
  {
    id: 3,
    title: 'Load passengers',
    journeyId: 8,
    completed: false
  }
];

// Middleware to handle delay and error simulation
const simulateDelayAndError = (req, res, next) => {
  const delay = parseInt(req.query.delay) || 0;
  const shouldError = req.query.error === 'true';

  if (shouldError) {
    return res.status(500).json({
      error: 'Simulated server error',
      message: 'This error was triggered by ?error=true query parameter'
    });
  }

  if (delay > 0) {
    setTimeout(() => next(), delay);
  } else {
    next();
  }
};

// Routes
app.get('/api/journeys', simulateDelayAndError, (req, res) => {
  res.json(journeys);
});

app.get('/api/journeys/:id', simulateDelayAndError, (req, res) => {
  const id = parseInt(req.params.id);
  const journey = journeys.find(j => j.id === id);

  if (journey) {
    res.json(journey);
  } else {
    res.status(404).json({ error: 'Journey not found' });
  }
});

app.get('/api/vehicles', simulateDelayAndError, (req, res) => {
  res.json(vehicles);
});

app.get('/api/vehicles/:id', simulateDelayAndError, (req, res) => {
  const id = parseInt(req.params.id);
  const vehicle = vehicles.find(v => v.id === id);

  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).json({ error: 'Vehicle not found' });
  }
});

app.get('/api/tasks', simulateDelayAndError, (req, res) => {
  res.json(tasks);
});

// PATCH endpoint to update journey (e.g., assign vehicle)
app.patch('/api/journeys/:id', simulateDelayAndError, (req, res) => {
  const id = parseInt(req.params.id);
  const journeyIndex = journeys.findIndex(j => j.id === id);

  if (journeyIndex !== -1) {
    journeys[journeyIndex] = { ...journeys[journeyIndex], ...req.body };
    res.json(journeys[journeyIndex]);
  } else {
    res.status(404).json({ error: 'Journey not found' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Mock API Server for Dispatch Board',
    endpoints: [
      'GET /api/journeys',
      'GET /api/journeys/:id',
      'GET /api/vehicles',
      'GET /api/vehicles/:id',
      'GET /api/tasks',
      'PATCH /api/journeys/:id'
    ],
    queryParams: {
      delay: 'Add delay in milliseconds (e.g., ?delay=1500)',
      error: 'Simulate error (e.g., ?error=true)'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock API Server running at http://localhost:${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/journeys`);
  console.log(`   GET  http://localhost:${PORT}/api/vehicles`);
  console.log(`   GET  http://localhost:${PORT}/api/tasks`);
  console.log(`\n🔧 Testing options:`);
  console.log(`   Delay: http://localhost:${PORT}/api/journeys?delay=1500`);
  console.log(`   Error: http://localhost:${PORT}/api/journeys?error=true`);
});
