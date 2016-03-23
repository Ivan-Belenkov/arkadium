var webpack = require("webpack");

module.exports = {
    context: __dirname + "/sources",
    entry: "./index.js",
    devtool: "source-map",
    output: {
        path: __dirname + "/build/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel", query: { presets: ['es2015'] }},
            {test: /\.html$/, loader: "raw"}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: false
        })
    ]
};