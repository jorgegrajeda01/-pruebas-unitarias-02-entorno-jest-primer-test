import request from 'supertest';
import { app } from './app';
import { describe, test, expect } from '@jest/globals';

describe('GET /tareas', () => {
  test('debe responder 200 y devolver una lista de tareas', async () => {
    const respuesta = await request(app).get('/tareas');

    expect(respuesta.status).toBe(200);
    expect(Array.isArray(respuesta.body)).toBe(true);
    expect(respuesta.body.length).toBeGreaterThanOrEqual(2);
  });
});

describe('POST /tareas', () => {
  test('caso feliz: crea una tarea correctamente', async () => {
    const respuesta = await request(app)
      .post('/tareas')
      .send({ titulo: 'Aprender pruebas unitarias' });

    expect(respuesta.status).toBe(201);
    expect(respuesta.body).toHaveProperty('id');
    expect(respuesta.body.titulo).toBe('Aprender pruebas unitarias');
    expect(respuesta.body.completada).toBe(false);
  });

  test('caso de error: rechaza una tarea sin titulo', async () => {
    const respuesta = await request(app)
      .post('/tareas')
      .send({});

    expect(respuesta.status).toBe(400);
    expect(respuesta.body).toHaveProperty('error');
  });
});
