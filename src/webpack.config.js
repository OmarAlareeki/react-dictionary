const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Your existing Webpack configuration
  target: 'node', // Set target to 'node'
  externals: [nodeExternals()], // Exclude Node.js built-in modules
  // Other configuration options
};
