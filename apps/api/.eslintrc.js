module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    indent: 'off',
    'quote-props': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
  },
};
