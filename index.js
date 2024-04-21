const http = require('http');
const puertoDisponible = require('./modulo1.js');
const Datos = require('./modulo2.js');
const abrirTexto = require('./modulo3.js');

//1: Crear un módulo que permita buscar un puerto libre y retorne el puerto seleccionado
const port = puertoDisponible(1000, 3000);
console.log(`Servidor ejecutándose en: http://localhost:${port}`);

// 2: Crear un módulo que muestre información del equipo
console.log('Información del equipo:');
Datos();  // Nota: Modulo2 ya tiene console.log dentro de la función, por eso no se usa aquí.

// 3: Crear un módulo que abra un archivo de texto usando promesas con el módulo de fs
async function manejarArchivo() {
    try {
        const contenido = await abrirTexto('./texto.txt');
        console.log('El contenido del archivo es: ', contenido);
    } catch (error) {
        console.error('Error al abrir el archivo:', error);
    }
}

manejarArchivo();

//4: Crear un index.js que consuma los módulos anteriores e imprima la información que retorna cada uno en formato json a travez de un servidor web.
const server = http.createServer(async (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  
  const info = Datos(); 

  try {
      const contenido = await abrirTexto('./texto.txt');
      const datos = {
          puerto: port,
          informacion: info,
          archivo: contenido,
      };

      // Enviar información en formato JSON
      const jsonData = JSON.stringify(datos);
      response.end(jsonData);
  } catch (error) {
      console.error('Error al procesar la información:', error);
      response.end();
  }
});

server.listen(3001, () => {
  console.log('Servidor ejecutándose en: http://localhost:3001');
});