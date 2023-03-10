/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
    // '@testing-library/react/cleanup-after-each',
    // '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    // '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(css|less)$': '<rootDir>/src/__tests__/__mocks__/styleMock.js',
    '^~/(.*)$': '<rootDir>/$1',
  },
};

// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

//   modulePaths: ['<rootDir>/src'],
//   testEnvironment: 'jsdom',
// };
