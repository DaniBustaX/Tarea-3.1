const os = require('os');

module.exports = function getDeviceInfo() {
  const info = {
    cpuCount: os.cpus().length,
    osName: os.platform(),
    ramMb: Math.round(os.totalmem() / (1024 * 1024)),
  };

  return info;
};
