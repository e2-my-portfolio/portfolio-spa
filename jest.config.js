module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    transformIgnorePatterns: ['node_modules/(?!(@angular|rxjs))'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/app/test/'],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage/',
    roots: ['<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    testFailureExitCode: 0,
    testMatch: ['**/?(*.)+(spec).(ts)'],
    resolver: './jest.resolver.js',
    moduleNameMapper: {
        "~src/(.*)": "<rootDir>/src/$1"
    },
    modulePaths: [
        "<rootDir>"
    ],
};
