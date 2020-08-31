const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['next/babel', ['react-app', { flow: false, typescript: true }]],
        plugins: ['react-docgen']
      }
    });

    config.module.rules = config.module.rules.map((rule) => {
      if (String(rule.test).includes('svg')) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
        };
      }

      return rule;
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      include: path.resolve(__dirname, '../src/assets/icons'),
      loader: require.resolve('@svgr/webpack'),
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    });

    config.resolve.alias = {
      '@Public': path.resolve(__dirname, '..', 'src', 'public'),
      '@Styles': path.resolve(__dirname, '..', 'src', 'styles'),
      '@Assets': path.resolve(__dirname, '..', 'src', 'assets'),
      '@Atoms': path.resolve(__dirname, '..', 'src', 'components', 'atoms'),
      '@Molecules': path.resolve(__dirname, '..', 'src', 'components', 'molecules'),
      '@Organisms': path.resolve(__dirname, '..', 'src', 'components', 'organisms'),
      '@Templates': path.resolve(__dirname, '..', 'src', 'components', 'templates')
    };

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
