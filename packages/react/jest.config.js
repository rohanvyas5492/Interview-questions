module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testRegex: '(/.*\\.test)\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
