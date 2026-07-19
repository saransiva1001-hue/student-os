const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const errorHandler = require('./middleware/errorHandler');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static directories serving (uploads)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/health', healthRoutes);

// Global feature flags endpoint
app.get('/api/feature-flags', (req, res) => {
  try {
    const flags = require('../../config/featureFlags');
    res.json(flags);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load feature flags' });
  }
});

// Root API welcome
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the StudentOS API Gateway' });
});

// Central Error Interceptor
app.use(errorHandler);

module.exports = app;
