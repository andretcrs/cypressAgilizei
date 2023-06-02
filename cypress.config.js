const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://devfinance-agilizei.netlify.app/#",
    viewportWidth: 1024,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
