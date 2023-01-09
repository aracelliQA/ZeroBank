const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://zero.webappsecurity.com/index.html',
    testIsolation: false,
  },
});
