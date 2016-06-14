var path = require("path");

var srcPath = path.join(__dirname, 'src');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    // context: path.join(__dirname, './src'),
    entry: [
        "babel-polyfill",
        "./src/app/index.js",
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        "./src/stylesheets/styles.scss"
    ],
    output: {
        // entry: './src/app/index.js',
        path: path.resolve(__dirname, "build/assets"),
        filename: "bundle.js",
        publicPath: 'assets/'
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
