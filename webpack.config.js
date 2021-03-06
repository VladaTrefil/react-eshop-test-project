const path = require('path')

// const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')

const entry = './src/index.js'
const mode = 'development'
const devtool = 'eval-cheap-module-source-map'

const output = {
  path: path.resolve(__dirname, 'public'),
  filename: 'bundle.[fullhash].js',
}

const devServer = {
  compress: true,
  host: 'localhost',
  port: 3000,
  historyApiFallback: true,
  hot: true,
}

const plugins = [
  new HtmlWebpackPlugin({ template: 'public/index.html' }),
  new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
  // new webpack.LoaderOptionsPlugin({ options: { postcss: [autoprefixer()] } }),
]

const resolve = {
  modulesDirectories: ['node_modules'],
  alias: {},
  extensions: ['', '.jsx', '.js'],
}

// Javascript
const jsModule = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
}

// Stylus
const stylModule = {
  test: /\.css/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
}

// Images
const imageModule = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [{ loader: 'file-loader' }, { loader: 'image-webpack-loader', options: { disable: true } }],
}

// Fonts
const fontModule = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
}

module.exports = {
  entry,
  mode,
  devtool,
  output,
  devServer,
  plugins,
  module: { rules: [jsModule, stylModule, imageModule, fontModule] },
}
