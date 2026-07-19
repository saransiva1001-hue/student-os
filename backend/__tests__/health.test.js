const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/config/db');

describe('Health Check Endpoint API Test', () => {
  afterAll(async () => {
    // Close database connectivity
    await prisma.$disconnect();
  });

  it('GET /api/health should respond with status ok', async () => {
    const res = await request(app).get('/api/health');
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body.status).toBe('ok');
  });
});
