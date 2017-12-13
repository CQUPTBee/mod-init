const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const path = require('path')
const BASEPATH = path.resolve(__dirname, '..')


module.exports = {
  entry: {
    main: BASEPATH + '/src/index.js',
    server: BASEPATH + '/src/defaultServer/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: BASEPATH + '/src/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      { 
        test: /\.less$/, 
        use: ['style-loader','css-loader','less-loader'],
      },
      { 
        test: /\.scss$/, 
        use: ['style-loader','css-loader','sass-loader'],
      },
      { 
        test: /\.css$/, 
        use: ['style-loader','css-loader'],
      },
      { 
        test: /\.hbs$/,
        use: 'handlebars-loader?helperDirs[]='+BASEPATH+'/src/helpers'
      },
      { 
        test: /\.json$/,
        use: 'json-loader'
      },
      { 
        test: /\.(jpg|gif|png|woff|svg|eot|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'img/[hash:8].[name].[ext]'
          }
        }
      },
      
    ]
  },
  devServer: {
    port: 8888,
    contentBase: "../src",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
};