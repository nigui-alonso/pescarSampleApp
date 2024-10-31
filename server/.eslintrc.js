module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { vars: 'all' }],
    'no-var': ['error'],
    'prefer-const': ['error'],
  },
};
