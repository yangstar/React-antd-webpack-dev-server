var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Host = require('ip').address() || 'localhost';
var Port = 3003;
module.exports = {

  devtool: 'eval-source-map',



  devServer: {
    host: Host,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: Port,
    proxy: {
        '\*': {
          target: 'http://10.10.2.178:8080',
          // pathRewrite: {'^/api' : '/campaign_huggies/t3store_freeuse/admin'},
          // changeOrigin: true
        }
      },

    contentBase: './dist',
  },
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://'+Host +':'+ Port,
    'webpack/hot/dev-server',
    path.resolve(__dirname, './src/index.js'),
    
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),

  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
    }),

    new HtmlWebpackPlugin({
      title: '模板系统',
      filename: 'index.html',
      template: 'index.template.html',
      // favicon: path.join(__dirname, 'src', 'global', 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!cssnext-loader'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'url-loader?limit=20000',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
