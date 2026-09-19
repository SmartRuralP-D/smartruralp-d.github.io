import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

const lintFiles = ['src/**/*.{js,jsx,ts,tsx}', 'scripts/**/*.{js,mjs,ts,tsx}', 'vite.config.ts']

export default [
    ...fixupConfigRules(compat.extends('prettier')),

    {
        ignores: ['node_modules/**', 'dist/**', '.output/**', '.vinxi/**', 'src/routeTree.gen.ts']
    },
    {
        files: lintFiles,

        plugins: {
            prettier,
            react,
            'react-hooks': fixupPluginRules(reactHooks),
            'jsx-a11y': jsxA11y,
            'simple-import-sort': simpleImportSort
        },

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        settings: {
            react: {
                version: 'detect'
            }
        },

        rules: {
            'react/jsx-filename-extension': 'off',
            'no-param-reassign': 'off',
            'react/prop-types': 'off',
            'react/require-default-props': 'off',
            'react/no-array-index-key': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'off',
            'no-console': 'off',
            'no-shadow': 'off',
            'jsx-a11y/label-has-associated-control': 'off',
            'jsx-a11y/no-autofocus': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'simple-import-sort/imports': [
                'error',
                {
                    groups: [['^react$', '^@?\\w'], ['^node:'], ['^@/'], ['^\\.']]
                }
            ],
            'simple-import-sort/exports': 'error',

            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            regex: '^\\.{1,2}/',
                            message: 'Relative imports are not allowed. Use the @/* alias or node: imports instead.'
                        }
                    ]
                }
            ],

            'no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'none',
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_'
                }
            ],

            'prettier/prettier': 'warn'
        }
    },
    {
        files: ['src/**/*.{ts,tsx,d.ts}', 'scripts/**/*.{ts,tsx,d.ts}', 'vite.config.ts'],

        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
]
