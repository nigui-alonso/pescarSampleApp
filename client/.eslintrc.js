module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true, // Esto agrega module, require, etc.
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
    'no-var': 'error',
  },
};
