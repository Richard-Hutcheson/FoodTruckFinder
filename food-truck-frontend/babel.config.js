module.exports = {
    presets: [
        ["next/babel"]
    ],
    plugins: [
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-decorators', {
            decoratorsBeforeExport: true
        }],
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-numeric-separator'
    ]
};