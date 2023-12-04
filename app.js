const express = require('express');
var cors = require('cors');

// Routers
const { authRouter } = require('./routes/auth.routes');
const { generateHash } = require('./utils/bcrypt');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Endpoint
app.use('/api/v1/auth', authRouter);

// Ruta para el mensaje "It works!" en la ruta raíz
app.get('/api/v1', (req, res) => {
  res.send('Todo correcto');
});

// Ejecutar generateHash fuera de cualquier manejador de ruta
// generateHash('password0802')
//   .then((hash) => {
//     console.log(hash);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

module.exports = { app };
