module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src/**"],
  testMatch: [
    "**/ShoppingCart/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules"],
};
