import request from 'supertest';
import { app } from './app';
import { describe, test, expect } from '@jest/globals';

describe('GET /tareas', () => {
  test('debe responder 200 y devolver una lista de tareas', async () => {
    const respuesta = await request(app).get('/tareas');

    expect(respuesta.status).toBe(200);
    expect(Array.isArray(respuesta.body)).toBe(true);
    expect(respuesta.body).toHaveLength(2);
  });
});
