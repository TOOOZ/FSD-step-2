const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
    };

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        filename: '[name].js',
        path: PATHS.build,
        publicPath: '/build'
    },
    module: {
        rules: [{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
                    }, 
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true}
                },{
                    loader: 'sass-loader',
                    options: { sourceMap: true}
                }
            ]
        }]
    },
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname, 'build'),
        liveReload: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
            }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
}
 