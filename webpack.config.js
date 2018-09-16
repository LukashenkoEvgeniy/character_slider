const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: './src/index.js'
    },
    output: {
        path: __dirname + "/docs",
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        // plugins: ['react-hot-loader/babel'],
                    },
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
};