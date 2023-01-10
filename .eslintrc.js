module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  'overrides': [
    {
      // or whatever matches stories specified in .storybook/main.js
      'files': ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      'rules': {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      'files': ['**/mocks/*.ts'],
      'rules': {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
      },
    },
    {
      'files': ['*.@(queries|requests).ts'],
      'rules': {
        'import/prefer-default-export': 'off',
      },
    },
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
      'typescript': {},
    },
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['react', '@typescript-eslint', 'prettier'],
  'rules': {
    'prettier/prettier': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-empty-interface': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.tsx', '.stories.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
