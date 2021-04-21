const path = require('path');

module.exports = {
    mode: "development",
    entry: './assets/js/main.js',
    output: {
      path: path.join(__dirname),
      filename: 'bundle.js' 
    },
    devtool: 'source-map'
  }