module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  extends: ['eslint:recommended', 'standard', 'plugin:astro/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/no-set-html-directive': 'error' // prevent XSS attack
      }
    }
  ]
}
