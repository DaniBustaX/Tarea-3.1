const http = require('http');
const modulo1 = require('./modulo1');
const modulo2 = require('./modulo2');
const modulo3 = require('./modulo3');

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === '/freeport') {
    const port = await modulo1();
    res.end(JSON.stringify({ port }));
  } else if (req.url === '/systeminfo') {
    const systemInfo = modulo2();
    res.end(JSON.stringify(systemInfo));
  } else if (req.url === '/readfile') {
    const fileContent = await modulo3('./texto.txt');
    res.end(JSON.stringify({ fileContent }));
  } else {
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
