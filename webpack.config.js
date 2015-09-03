var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './Main.js',
    html: './index.html'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devServer: {
    port: 3000,
    colors: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /\.test\.js$/,
        loaders: ['react-hot', 'babel', 'eslint']
      },
      {
        test: /\.test\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: ['mocha', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
