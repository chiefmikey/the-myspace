const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/public');

const css = 'css-loader';

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/,
        use: [css],
      },
      {
        test: /\.scss$/,
        use: [css, 'sass-loader'],
      },
      {
        test: /\.sass$/,
        use: [css, 'sass-loader'],
      },
      {
        test: /\.(png|ttf|jp(e*)g|svg)$/,
        use: 'url-loader?limit=100000&name=img/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.vue', '.json', '...'],
  },
};