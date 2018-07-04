/* global __dirname */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './build/'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'sass-loader',
                    ],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true,
            ignoreOrder: true,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
    },
};
