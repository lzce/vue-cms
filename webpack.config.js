const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry : path.join(__dirname, '/src/main.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  mode:'development',

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {test: /\.vue$/, use: 'vue-loader'},
      {test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      {test: /\.(jpg|png|gif|jpeg|bmp|svg)$/, use: 'url-loader?limit=90000&name=[hash:8]-[name].[ext]'}
    ]
  },
  resolve:{
    alias: {
      // "vue$": "vue/dist/vue.js"
    }
  }
}