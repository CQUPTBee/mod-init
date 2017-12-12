const _ = require('lodash');
const baseConfig = require('./webpack.config.base');

const config = _.clone(baseConfig);

module.exports = config;