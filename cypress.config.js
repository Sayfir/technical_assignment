const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, ts, feature}",
    baseUrl: "http://quotes.toscrape.com",
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 15000,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/results/screenshots",
    videosFolder: "cypress/results/video",
    trashAssetsBeforeRuns: true,
  },
});
