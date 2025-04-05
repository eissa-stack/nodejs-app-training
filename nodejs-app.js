// app.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Log the current directory and check if the file exists
const publicDir = path.join(__dirname, 'public');
const indexPath = path.join(publicDir, 'index.html');
console.log('Current directory:', __dirname);
console.log('Looking for index at:', indexPath);
console.log('File exists:', fs.existsSync(indexPath));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route handler with better error handling
app.get('/', (req, res) => {
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send('Index file not found. Please ensure index.html exists in the public directory.');
  }
});

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Service is healthy' });
});

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    appName: 'Simple Node.js App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Service is healthy' });
});

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    appName: 'Simple Node.js App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
