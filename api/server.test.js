const request = require('supertest');
const express = require('express');
const authRouter = require('./auth/auth-router'); // Adjust the path as needed
const server = require('./server'); // Adjust the path as needed

// Create a test app that uses the authRouter
const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);

describe('Auth Endpoints', () => {

  describe('POST /api/auth/register', () => {

    it('should return an error if username is missing', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          password: 'TestPassword123'
        });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "username and password required" });
    });

    it('should return an error if password is missing', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          username: 'TestUser'
        });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "username and password required" });
    });

  });

  describe('POST /api/auth/login', () => {

    it('should return an error if username is missing', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          password: 'TestPassword123'
        });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "username and password required" });
    });

    it('should return an error if password is missing', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          username: 'TestUser'
        });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "username and password required" });
    });

  });

});
