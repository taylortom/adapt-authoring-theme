const Logger = require('adapt-authoring-logger');
const path = require('path');
const { Module } = require('adapt-authoring-core');
/**
* Module which includes various theme assets
* @extends {Module}
*/
class Theme extends Module {
  /**
  * @param {App} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    this.rebuild().then(() => {
      this.init();
      resolve();
    }).catch(this.reject);
  }
  init() {
    const server = this.app.getModule('server');
    server.root.addMiddleware(server.static(path.resolve(__dirname, '..', 'public')));
  }
  /**
  * Builds the required assets
  */
  rebuild() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}

module.exports = Theme;
