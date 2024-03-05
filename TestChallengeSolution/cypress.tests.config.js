const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
  toConsole: true,
  reportDir: 'cypress/results',
  overwrite: false,
  html: false,
  json: true
  },
  retries:{ runMode: 1, openMode: 0 },
  screenshotOnRunFailure: false,
  video: false,
  defaultCommandTimeout: 40000,
  viewportWidth: 2880,
  viewportHeight: 1800,
  e2e: {
  supportFile: false,  
  baseUrl: urlofwebundertest,
  }
})
