var path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      // set up standard-loader as a preloader
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src', 'scripts'),
      loader: 'standard'
    }],
    loaders: [
      {
        include: path.join(__dirname, 'src', 'scripts'),
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src', 'styles'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  devServer: {
    contentBase: './'
  }
};
