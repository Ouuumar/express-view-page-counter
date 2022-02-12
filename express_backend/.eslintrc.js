module.exports = {
    root: true,
    env: { node: true },
    extends: [
        'eslint:recommended',
    ],
    ignorePatterns: ['dist/*', 'node_modules/*'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}