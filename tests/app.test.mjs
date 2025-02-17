import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
    it('should return a JSON response', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, Node.js CI/CD');
    });
});