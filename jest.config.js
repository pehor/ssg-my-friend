module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/out/**',
    '!jest.config.js',
    '!next.config.js',
    '!dummyData/**',
    '!test/*'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
    // '^.+\\.module\\.(css|sass|scss)$'
  ],
  // moduleNameMapper: {
  //   '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  // }
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks.js',
    '\\.(css|less|scss|html)$': '<rootDir>/test/mocks.js'
  }
}
