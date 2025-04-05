const request = require('supertest');
const express = require('express');

// Create a basic express app for testing
const app = express();
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Service is healthy' });
});

app.get('/api/info', (req, res) => {
  res.json({
    appName: 'Simple Node.js App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

describe('API Endpoints', () => {
  test('GET /health returns status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('message', 'Service is healthy');
  });

  test('GET /api/info returns app info', async () => {
    const response = await request(app).get('/api/info');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('appName', 'Simple Node.js App');
    expect(response.body).toHaveProperty('version', '1.0.0');
    expect(response.body).toHaveProperty('environment');
    expect(response.body).toHaveProperty('timestamp');
  });
});
