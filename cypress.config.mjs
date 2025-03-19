import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    async setupNodeEvents(on, config) {
      const coverageTask = await import("@cypress/code-coverage/task");
      coverageTask.default(on, config);
      return config;
    },
    experimentalStudio: true,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  env: {
    codeCoverage: {
      url: process.env.CYPRESS_BASE_URL
        ? `${process.env.CYPRESS_BASE_URL}/__coverage__`
        : "http://localhost:5173/__coverage__",
    },
  },
});
