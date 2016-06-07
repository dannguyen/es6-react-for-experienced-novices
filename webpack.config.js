var path = require("path");


var config = {
    entry: [
        "babel-polyfill",
        path.resolve(__dirname, "app/index.js"),
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    }, //...
    module: {
        loaders: [{
            include: [
                path.resolve(__dirname, "app")
            ],
            // A regexp to test the require path. accepts either js or jsx
            test: /\.jsx?$/,
            // The module to load. "babel" is short for "babel-loader"
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    }

};

module.exports = config;
