const os = require('os');

const Datos = () => {
  console.log('Información del SO:', os.platform());
  console.log('Memoria RAM disponible:', (os.freemem() / (1024 * 1024)).toFixed(2), 'MB');
  console.log('Espacio de RAM:', (os.totalmem() / (1024 * 1024)).toFixed(2), 'MB');
  console.log('host:', os.hostname());
  console.log('Tiempo de uso del sistema:', os.uptime(), 'segundos');
};

module.exports = Datos;

// Ejemplo de uso
//  console.log(Datos())
