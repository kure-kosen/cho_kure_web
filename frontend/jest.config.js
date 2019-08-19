module.exports = {
  verbose: true,
  transform: {
    ".*\\.(ts|tsx)$": "./node_modules/ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": '<rootDir>/src/$1',
  },
  testMatch: [
    "**/*.spec.(ts|tsx)"
  ],
  moduleFileExtensions: ["js", "ts", "tsx"]
};
