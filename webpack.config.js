const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./demo/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, 'demo', 'dist'),
        filename: "demo.bundle.js",
    },
    plugins: [
            new HtmlWebpackPlugin({
            template: "./demo/index.html",
            minify: {
                collapseWhitespace: true,
                quoteCharacter: "\'"
            }
        })
    ],
}