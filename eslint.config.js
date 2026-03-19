import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
    { ignores: ['dist', 'node_modules', '*.config.js'] },

    // Configuração base para todos os arquivos
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
      ],
      plugins: {
        'react': reactPlugin,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        'prettier': prettierPlugin,
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: {
          ...globals.browser,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // Regras do Prettier
        'prettier/prettier': ['error', {
          printWidth: 100,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: false,
          jsxSingleQuote: false,
          trailingComma: 'all',
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: 'always',
          endOfLine: 'auto',
          quoteProps: 'as-needed',
        }],

        // Regras do seu ESLint original
        'prefer-arrow-callback': 'error',
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        'prefer-const': 'error',
        'arrow-body-style': 'off',

        // Regras de aspas
        'quotes': ['error', 'double', { avoidEscape: true }],
        'jsx-quotes': ['error', 'prefer-double'],

        // Regras React
        ...reactPlugin.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,

        'react/jsx-wrap-multilines': [
          'error',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
          },
        ],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],

        // React Refresh
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },

    // Aplicar PrettierConfig no final para sobrescrever regras conflitantes
    prettierConfig,
)