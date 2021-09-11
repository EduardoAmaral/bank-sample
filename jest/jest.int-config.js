/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require('./jest.config.js');

module.exports = {
  ...defaultConfig,
  testRegex: '.*\\.int-spec\\.ts$',
  globalSetup: '../jest/setup.ts',
  globalTeardown: '../jest/teardown.ts',
};
