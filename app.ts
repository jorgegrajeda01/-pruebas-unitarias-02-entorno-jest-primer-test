import express from 'express';

export const app = express();
app.use(express.json());

const tareas = [
  { id: 1, titulo: 'Estudiar Jest', completada: false },
  { id: 2, titulo: 'Hacer pruebas', completada: false }
];

app.get('/tareas', (_req, res) => {
  res.status(200).json(tareas);
});
