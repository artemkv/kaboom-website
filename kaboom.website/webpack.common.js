const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        // Main page
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name].[contenthash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/env"]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        // Extract boilerplate code into runtime chunk
        runtimeChunk: 'single',
        // Put all third-party dependencies into the vendors chunk
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        // Keeps modules id consistent between builds
        new webpack.HashedModuleIdsPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            chunks: ['runtime', 'vendors', 'app']
        }),
        new copyWebpackPlugin([
            { from: './public/favicon.ico' }
        ])
    ],
    devtool: 'source-map'
};