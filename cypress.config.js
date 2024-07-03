import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://nika-chinchaladze.github.io/Nika-Chinchaladze-JavaScript/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
