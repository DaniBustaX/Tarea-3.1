const fs = require('fs');

function abrirTexto(ruta) {
  try {
    const contenido = fs.readFileSync(ruta, 'utf8');
    return contenido;
  } catch (error) {
    console.error('Error al abrir el archivo:', error); 
  }
}

module.exports = abrirTexto;

// Ejemplo de uso
//  console.log(abrirTexto('./texto.txt'))