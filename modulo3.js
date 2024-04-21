const fs = require('fs').promises;

module.exports = async function openTextFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return fileContent;
  } catch (err) {
    console.error('Error al abrir el archivo:', err);
    return null;
  }
};
