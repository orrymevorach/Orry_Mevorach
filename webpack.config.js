const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app_bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      }, // fixes a problem with @formspree/react
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'],
    alias: {
      ['@pages']: path.resolve(__dirname, './src/pages/'),
      ['@components']: path.resolve(__dirname, './src/components/'),
      ['@utils']: path.resolve(__dirname, './src/utils/'),
      ['@constants']: path.resolve(__dirname, './src/constants.js'),
      ['@styles']: path.resolve(__dirname, './src/styles/'),
      ['@root']: path.resolve(__dirname, './src/'),
      ['@constants']: path.resolve(__dirname, './src/utils/constants.js'),
    },
  },
  devtool: 'eval-source-map',
};
