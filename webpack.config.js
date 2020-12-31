const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/scripts/app.js', './src/styles/styles.scss'],
  devServer: {
    contentBase: path.join(__dirname, './'),
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'styles.css' },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
