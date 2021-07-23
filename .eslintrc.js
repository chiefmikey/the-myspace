module.exports = {
  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 0,
  },
  plugins: ['import', '@babel', 'prettier'],
};
