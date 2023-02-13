import { resolve } from 'path';
import TSPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration as WebpackConfig } from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: WebpackConfig = {
  mode: 'development',
  entry: './app/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    plugins: [new TSPathsPlugin()],
    extensions: ['.ts', '.tsx'],
  },
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'build'),
  },
};

export default config;
