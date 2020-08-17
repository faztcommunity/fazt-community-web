/* eslint-disable @typescript-eslint/no-var-requires */
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/icons'),
  webpack(config) {
    return config;
  }
});
