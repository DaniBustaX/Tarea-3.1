const fs = require('fs').promises;

function readFilePromise(filePath) {
  return fs.readFile(filePath, 'utf8');
}

module.exports = readFilePromise;
