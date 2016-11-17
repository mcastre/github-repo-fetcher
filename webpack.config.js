'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var autoprefixer = require('autoprefixer');
var path = require('path');
var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig () {
  var config = {};

  config.entry = {
    app: './src/app.js'
  };

  config.output = {
    path: path.resolve(__dirname, './build'),
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  config.sassLoader = {
    includePaths: [ 'src/style' ]
  };

  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  config.resolve = {
    modulesDirectories: [
      'node_modules',
      'src/templates'
    ]
  };

  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loaders: ['ng-annotate', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style-loader', // backup style loader
        'css-loader!sass-loader'
      )
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
      exclude: /index\.html/
    }]
  };

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  // config.postcss = [
  //   autoprefixer({
  //     browsers: ['last 2 version']
  //   })
  // ];

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('src/stylesheets/app.css', {allChunks: false})
  );

  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './src')
      }], { ignore: ['*.html'] })
    );
  }

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}());
