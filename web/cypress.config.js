const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/support/helper')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readPdf
      })
      // implement node event listeners here
    },
    //tempo implicito =  defaultCommandTimeout: 10000
    experimentalStudio: true,
    video: false ,    //gera em .mp4
    baseUrl:'http://localhost:3000'
    },
});
