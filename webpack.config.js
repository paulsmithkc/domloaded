const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json')));
  const banner = `@version ${package.name} ${package.version}`;
  const minimize = !!(env && env.minimize);
  console.log(banner);

  const webpackConfig = {
    mode: 'production',
    target: 'web',
    entry: { domloaded: './src/domloaded.js' },
    output: {
      chunkLoading: false,
      wasmLoading: false,
      path: path.resolve(__dirname, 'dist/'),
      filename: minimize ? '[name].min.js' : '[name].js',
      library: 'domloaded',
      libraryTarget: 'window',
      libraryExport: 'default',
    },
    module: {
      rules: [
        {
          include: [path.resolve(__dirname, 'src/')],
          test: /\.m?js$/i,
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { loose: true }]],
            // plugins: ['minify-simplify', 'minify-guarded-expressions', 'minify-mangle-names'],
          },
        },
      ],
    },
    devtool: minimize ? 'source-map' : false,
    optimization: {
      minimize: minimize,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: { comments: /@version/i },
            mangle: { module: true },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: [new webpack.BannerPlugin({ banner, entryOnly: true })],
  };

  return webpackConfig;
};
