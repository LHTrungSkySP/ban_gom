const { ModuleFederationPlugin } = require('webpack').container;

/** @type {require('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
    uniqueName: 'shell',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    // Allow output javascript files as module source type.
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: {
        // because Angular v14 will output ESModule
        type: 'module',
      },
      remotes: {
        mailbox: 'http://localhost:5300/remoteEntry.js',
        calendar: 'http://localhost:5400/remoteEntry.js',
      },
       shared: ['@angular/core', '@angular/common', '@angular/router'],

    }),
  ],
};