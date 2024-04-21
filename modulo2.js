const os = require('os');

module.exports = function getDeviceInfo() {
  const info = {
    cpus: os.cpus().length,
    os: os.platform() + ' ' + os.release(),
    memory: os.totalmem() / 1024 / 1024 / 1024 + ' GB', // Convertir a GB
  };

  return info;
};
