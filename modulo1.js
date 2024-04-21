const net = require('net');

module.exports = async function findFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.on('listening', () => {
      const port = server.address().port;
      server.close();
      resolve(port);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Si el puerto está en uso, se intenta otro
        findFreePort().then(resolve);
      } else {
        reject(err);
      }
    });

    server.listen(0); // Puerto 0 para que el sistema asigne uno disponible
  });
};
