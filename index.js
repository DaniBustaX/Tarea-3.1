const express = require('express');
const findFreePort = require('./modulo1');
const getDeviceInfo = require('./modulo2');
const openTextFile = require('./modulo3');

const app = express();
const port = await findFreePort();

app.get('/', async (req, res) => {
  const deviceInfo = getDeviceInfo();
  const fileContent = await openTextFile('path/to/texto.txt'); // Cambiar la ruta

  const jsonData = {
    port: port,
    deviceInfo,
    fileContent,
  };

  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
