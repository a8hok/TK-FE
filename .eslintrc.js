module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    "no-use-before-define": "error",
    "no-unused-vars": "error",
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off",
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'], 
      },
    ],
   
    'jsx-a11y/click-events-have-key-events': 'off',
    "jsx-a11y/no-noninteractive-element-to-interactive-role":'off',
    "jsx-a11y/interactive-supports-focus":'off'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
