var path = require("path");

var srcPath = path.join(__dirname, 'src');

var config = {
    // context: path.join(__dirname, './src'),
    entry: [
        "babel-polyfill",
        "./src/app/index.js",
        'webpack-dev-server/client?http://127.0.0.1:8080/'
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
            // A regexp to test the require path. accepts either js or jsx
            test: /\.jsx?$/,
            // The module to load. "babel" is short for "babel-loader"
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    },

    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

module.exports = config;
