import type { JestConfigWithTsJest as JestConfig } from 'ts-jest';

const BASE_URL = '<rootDir>/app';

const setDir = (dir: string) => `${BASE_URL}/${dir}`;

const config: JestConfig = {
  preset: 'ts-jest',
  roots: [BASE_URL],
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: [BASE_URL],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@/components/global': setDir('components/global'),
    '@/components/layout': setDir('components/layout'),
    '@/components/ui': setDir('components/ui'),
    '@/pages': setDir('pages'),
    '@/routes': setDir('types'),
    '@/types': setDir('types'),
    '@/views': setDir('views'),
    '@/data': setDir('data'),
    '@/utils': setDir('utils'),
    '@/services': setDir('services'),
    '@/languages': setDir('languages'),
    '@/store': setDir('store'),
    '@/slices': setDir('slices'),
    '@/hooks': setDir('hooks'),
    '@/reducers': setDir('reducers'),
    '@/api': setDir('api'),
  },
};

export default config;
