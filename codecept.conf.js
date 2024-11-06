exports.config = {
  name: "codeceptjs-pnpm-js",
  tests: "./specs/*.spec.js",
  output: "./output",
  plugins: {
    allure: {
      resultsDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
