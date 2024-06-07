/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@assets/(.*)$': '<rootDir>/src/assets/$1',
    '@/consts(.*)$': '<rootDir>/src/consts/$1',
    '@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svg$': '<rootDir>/svgTransform.cjs',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
};
