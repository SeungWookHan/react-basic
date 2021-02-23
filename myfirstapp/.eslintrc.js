module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
