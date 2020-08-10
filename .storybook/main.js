const path = require('path');

module.exports = {
  stories: ['../src/components/**/**/*.stories.tsx'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-storysource', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['next/babel', ['react-app', { flow: false, typescript: true }]],
        plugins: ['react-docgen']
      }
    });

    config.resolve.alias = {
      '@Styles': path.resolve(__dirname, '..', 'src', 'styles'),
      '@Assets': path.resolve(__dirname, '..', 'src', 'assets'),
      '@Atoms': path.resolve(__dirname, '..', 'src', 'components', 'atoms'),
      '@Molecules': path.resolve(__dirname, '..', 'src', 'components', 'molecules'),
      '@Organism': path.resolve(__dirname, '..', 'src', 'components', 'organism'),
      '@Templates': path.resolve(__dirname, '..', 'src', 'components', 'templates')
    };

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
