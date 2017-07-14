'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..');

module.exports = {

    entry: './app/main.ts',
    output: {
        path: path.resolve(rootDir, './build'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.resolve(rootDir,'tsconfig.json') }
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

    devServer: {
        contentBase: path.resolve(rootDir,'./build'),
        port: 9000
    },
    devtool: 'source-map'
};