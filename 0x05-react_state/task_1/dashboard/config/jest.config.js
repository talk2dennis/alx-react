// jest.config.js
module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "\\.(gif|ttf|eot|svg)$": "jest-transform-stub"
    },
    transformIgnorePatterns: ["/node_modules/(?!(cheerio)/)"],
  };
  