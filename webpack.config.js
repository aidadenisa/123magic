'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// require('bootstrap-loader');

module.exports = {

    entry: './app/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.component.ts$/, loader: 'ts-loader!angular2-template-loader'
            },
            {
                test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                    'to-string-loader',
                    'style-loader',
                    'css-loader'
                    // 'postcss-loader'
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            // },
            // {
            //     test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
            // },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts','.html','.css']
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),

        // new webpack.ProvidePlugin({ // inject ES5 modules as global vars
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     Tether: 'tether'
        // }),
        // new webpack.LoaderOptionsPlugin({
        //     postcss: [autoprefixer],
        // }),


    ]


};