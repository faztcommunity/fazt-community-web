module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['svelte3'],
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      settings: {
        'svelte3/ignore-styles': () => true,
      },
    },
  ],
}
