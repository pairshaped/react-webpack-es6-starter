Webpack = require('webpack')
path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'standard'
    }],

    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  standard: {
    parser: 'babel-eslint'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    root: [
      path.join(__dirname, 'src')
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    inline: true,
    progress: true,
    publicPath: '/'
  }
};
