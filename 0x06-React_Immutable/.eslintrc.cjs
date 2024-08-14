module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
    ],
    plugins: [
        'jest'
    ],
    settings: {},
    rules: {
        // Customize ESLint rules here
    },
};
