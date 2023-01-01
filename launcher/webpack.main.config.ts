import { rules } from './webpack.rules';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

export const mainConfig: Configuration = {
  entry: './src/index.ts',
  module: {
    rules,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
