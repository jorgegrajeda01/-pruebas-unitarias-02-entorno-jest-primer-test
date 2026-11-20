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

app.post('/tareas', (req, res) => {
  const { titulo } = req.body ?? {};

  if (typeof titulo !== 'string' || titulo.trim() === '') {
    res.status(400).json({
      error: 'El titulo es obligatorio'
    });
    return;
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: titulo.trim(),
    completada: false
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});
