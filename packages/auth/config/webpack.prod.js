const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');
const webpackCommon = require("./webpack.common");

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './bootstrap': './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(webpackCommon, prodConfig);