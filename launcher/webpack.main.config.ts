import { rules } from './webpack.rules';
import type { Configuration } from 'webpack';

export const mainConfig: Configuration = {
  entry: './src/index.ts',
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
