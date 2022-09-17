const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
    },
  },
  roots: ['<rootDir>/src/app'],
  testFailureExitCode: 0,
  testMatch: ['**/?(*.)+(spec).(ts)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/app/test/'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage',
      },
    ],
  ],
  resolver: '<rootDir>/jest.resolver.js',
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  modulePaths: [
    '<rootDir>'
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/app/test/']
};
