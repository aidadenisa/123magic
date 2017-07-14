'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..');

module.exports = {

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
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.resolve('tsconfig.json') }
                    } , 'angular2-template-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    debug: true,
    devServer: {
        contentBase: path.resolve('./build'),
        port: 9000
    },
    devtool: 'source-map'
};