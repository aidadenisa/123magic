'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'build'),
        port: 9000
    },
    devtool: 'source-map',
    entry: './app/main.ts',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'app')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            }
        ]
    }
};