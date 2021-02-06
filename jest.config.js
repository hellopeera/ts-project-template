module.exports = {
  "globals": {
    "ts-jest": {
      "compiler": "ttypescript"
    }
  },
  "roots": [
    "<rootDir>/src"
  ],
  "setupFiles": [
    "dotenv/config"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}