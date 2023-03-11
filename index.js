import path from './src/components/header.jsx';
import express from 'express';
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor Express iniciado en el puerto 3000.');
});
