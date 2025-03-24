// polyfills.js (ES module version)
import util from 'util';
// In Node 18+ util is still a CommonJS module, so you might need to do:
// Alternatively, you can use createRequire from 'module'
util._extend = Object.assign;
