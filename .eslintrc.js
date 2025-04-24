module.exports = {
    env: {
        node: true,
        es2021: true,
        mocha: true,
    },
    globals: {
        $: 'readonly',
        browser: 'readonly',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:mocha/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'mocha', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-pending-tests': 'warn',
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-setup-in-describe': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
};
