const _ = require('lodash');

const baseConfig = require('./webpack.config.base');
const config = _.clone(baseConfig);

config.devtool = 'inline-source-map';

module.exports = config;