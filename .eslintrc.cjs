const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    "browser": true,
    "node": true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53"
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      {
        property: "freeze",
        object: "Object"
      },
      {
        property: "myFavoriteWrapper"
      },
      {
        property: "forbidExtraProps",
        exact: true
      }
    ],
    componentWrapperFunctions: [
      "observer",
      {
        property: "styled"
      },
      {
        property: "observer",
        object: "Mobx"
      },
      {
        property: "observer",
        object: "<pragma>"
      }
    ],
    formComponents: [
      "CustomForm",
      {
        name: "Form",
        formAttribute: "endpoint"
      }
    ],
    linkComponents: [
      "Hyperlink",
      {
        name: "Link",
        linkAttribute: "to"
      }
    ]
  },

  rules: {
    eqeqeq: ['warn', 'always', { null: 'never' }],
    'no-debugger': ['error'],
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-process-exit': 'off',
    'no-useless-escape': 'off',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all'
      }
    ],
  }
})
