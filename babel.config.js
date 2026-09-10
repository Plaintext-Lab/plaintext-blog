/* global module, require */
const stylexOptions = require('./stylex.config');

module.exports = {
  presets: ['next/babel'],
  plugins: [['@stylexjs/babel-plugin', stylexOptions]],
};
