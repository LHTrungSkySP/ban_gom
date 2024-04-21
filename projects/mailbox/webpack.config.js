const { ModuleFederationPlugin } = require('webpack').container;

/** @type {require('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
    uniqueName: 'mailbox',
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
      name: 'mailbox',
      filename: 'remoteEntry.js',
      library: {
        // because Angular v14 will output ESModule
        type: 'module',
      },
      exposes: {
        './MailboxModule': 'projects/mailbox/src/app/app.module.ts',
      },
      /**
       * shared can be an object of type SharedConfig
       * you can change this to select something can be shared
       */
       shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};