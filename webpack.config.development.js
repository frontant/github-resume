var path = require("path");

module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js"
    },
    output: {
        path: path.resolve(__dirname, "./build/assets/scripts"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "initial",
            name : "commons"
        }
    },
    mode: "development"
}