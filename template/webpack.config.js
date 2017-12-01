/**
 * @fileOverview
 * webpack.config.js
 * ---------------------------
 * @author iNahoo
 * @since 2017/10/19.
 */
"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'F2 Lab',
            template: './config/template.html',
        })
    ],

    devServer: {
        contentBase: './dist'
    },

    devtool: 'inline-source-map',
    module: {
        rules: []
    },

    resolve: {
        extensions: [".js", ".json", '/index.js']
    }
};