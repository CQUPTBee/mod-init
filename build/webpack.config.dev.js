const _ = require('lodash');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const merge = require('webpack-merge')


const baseConfig = require('./webpack.config.base');
const config = _.clone(baseConfig);

let webpackConfig = merge(config, {
    devtool: 'inline-source-map',
    plugins: [
        // new NpmInstallPlugin(),
        new HtmlWebpackPlugin({
          title: '本地模拟服务器环境',
          template: './src/defaultServer/mods.hbs'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8888' })
    ],
})
module.exports = webpackConfig;
