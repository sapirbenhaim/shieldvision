// Load environment variables from a .env file
require('dotenv').config();

// Import required modules
const cors = require('cors');
const express = require('express');
const expressApp = express();

// Increase the maximum number of event listeners to avoid warnings
process.setMaxListeners(0);

// Middleware setup
expressApp.use(express.json()); // Parse JSON requests
expressApp.use(cors()); // Enable CORS for the Express app

// Set up WebSocket support using express-ws
const expressWs = require('express-ws')(expressApp);
const app = expressWs.app; // Get the Express app instance with WebSocket support

// Export the configured Express app
module.exports = app;
