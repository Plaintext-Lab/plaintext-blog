/* global module, process, require, __dirname */
// CommonJS on purpose: the Next.js Babel loader only reads babel.config.js,
// and this file is what that config shares with vitest.config.mts.
const path = require('node:path');

// StyleX compiler options shared by the Next.js build and the Vitest
// pipeline so both compile styles identically. Astryx ships pre-built CSS, so
// these options only touch this project's own stylex.create() calls.
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  dev: isDevelopment,
  runtimeInjection: false,
  enableInlinedConditionalMerge: true,
  treeshakeCompensation: true,
  classNamePrefix: 'p',
  aliases: {
    '@/*': [path.join(__dirname, 'src', '*')],
  },
  unstable_moduleResolution: {
    type: 'commonJS',
    rootDir: __dirname,
  },
};
