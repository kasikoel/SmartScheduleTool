// Load polyfills first using CommonJS syntax
require('./polyfills.js');

const util = require('util');
// Override util._extend to use Object.assign
util._extend = Object.assign;

console.log("Starting Express Proxy Server...");

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Proxy API requests to your backend (adjust target as needed)
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
}));

// Fallback: serve React's index.html for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
