/* global module, require */
const babelConfig = require('./babel.config');

module.exports = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ['typescript', 'jsx'],
        },
        plugins: babelConfig.plugins,
      },
      useCSSLayers: {
        // Astryx dist layers are declared first so product styles written
        // with StyleX always win over component defaults.
        before: ['reset', 'astryx-base', 'astryx-theme'],
      },
    },
    autoprefixer: {},
  },
};
