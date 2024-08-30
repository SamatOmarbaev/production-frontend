import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoaders } from './loaders/buildBabelLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true
              }
            }
          ]
        }
      }
    }],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoaders(isDev);

  const codeBabelLoader = buildBabelLoaders({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoaders({ ...options, isTsx: true });

  // Если не используем typescript, то нужен babel-loader
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  return [svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader, fileLoader];
}
