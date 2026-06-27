const path = require('path');
process.argv.splice(2, 0, 'start');
const cracoDistPath = path.join(__dirname, 'node_modules', '@craco', 'craco', 'dist', 'scripts', 'start.js');
try {
  require(cracoDistPath);
} catch(e) {
  console.error('craco start.js not found at:', cracoDistPath);
  console.error(e.message);
}
