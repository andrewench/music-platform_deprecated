import CopyWebpackPlugin from 'copy-webpack-plugin';
import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';

const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const BUILD_ASSETS_FOLDER = '.webpack/renderer/main_window/assets';
const ASSETS_DIRECTORIES = ['fonts', 'styles', 'icons'];

const getPath = (src: string) => path.resolve(__dirname, src);

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new CopyWebpackPlugin({
    patterns: ASSETS_DIRECTORIES.map((folder) => {
      return {
        from: getPath(`src/assets/${folder}`),
        to: getPath(`${BUILD_ASSETS_FOLDER}/${folder}`),
      };
    }),
  }),
];
