import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://staging.powerus.de/",
    specPattern: 'cypress/integration/src/specs/*.ts',
    viewportHeight: 800,
    viewportWidth: 400,
    defaultCommandTimeout: 5000,
    retries: {
      runMode: 1
    }
  }
});
