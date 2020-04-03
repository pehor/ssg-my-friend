module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/out/**',
    '!jest.config.js',
    '!next.config.js',
    '!dummyData/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
  },
  transformIgnorePatterns: [
    '/node_modules/'
    // '^.+\\.module\\.(css|sass|scss)$'
  ]
  // moduleNameMapper: {
  //   '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  // }
}
