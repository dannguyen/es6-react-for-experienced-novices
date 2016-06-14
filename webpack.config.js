'use strict';

const path = require("path");
const srcPath = path.join(__dirname, 'src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const defaultSettings = {port: 8080};

const config = {
    // context: path.join(__dirname, './src'),
    entry: [
        "babel-polyfill",
        "./src/app/index.js",
        "./src/stylesheets/styles.scss"
    ],
    output: {
        // entry: './src/app/index.js',
        path: path.resolve(__dirname, "build/assets"),
        filename: "bundle.js",
        publicPath: '/assets/'
    }, //...
    module: {
        loaders: [{
            include: [
                path.resolve(srcPath, "app")
            ],
            test: /\.jsx?$/,
            loader: 'babel-loader',
        }, {
            include: [
                path.resolve(srcPath, "stylesheets")
            ],
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css!sass")
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
module.exports = config;
