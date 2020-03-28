const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
    };

module.exports = {
    entry: [PATHS.source+'/pages/uiKit/colors/colors.js',
            PATHS.source+'/pages/uiKit/cards/cards.js'],
    output: {
        filename: '[name].js',
        path: PATHS.build,
        //publicPath: '/build'
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
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            exclude: [
                path.resolve(__dirname,'src/common/fonts')
            ],
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
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
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
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
        new CopyWebpackPlugin([
            { from: PATHS.source + '/common/img' , to: PATHS.build + '/img'},
            { from: PATHS.source + '/common/fonts' , to: PATHS.build + '/fonts'},
          ]),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/uiKit/colors/colors.pug',
            filename: 'colors.html',
            }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/uiKit/formElements/formElements.pug',
            filename: 'formElements.html',
            }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
}
 