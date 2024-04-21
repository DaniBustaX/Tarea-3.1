const net = require('net');

function findFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.on('error', reject);

    server.listen(0, () => {
      const port = server.address().port;
      server.close(() => {
        resolve(port);
      });
    });
  });
}

module.exports = findFreePort;
