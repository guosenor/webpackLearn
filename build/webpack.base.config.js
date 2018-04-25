/**
 * Created by guosen on 2018/4/25.
 */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    entry: {
        app:'./src/app.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }

                ]
            },
            {
                test:/\.(png)|(jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'css/images/[hash:8].[ext]',
                            publicPath: './'
                        }
                    },
                ],

            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'webpack4.x  angular1.x '
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/views'),
                to: path.resolve(__dirname, '../dist/views')
            }
        ])
    ],
    optimization:{
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                },
                // styles: {
                //     name: 'styles',
                //     test: /\.css$/,
                //     chunks: 'all',
                //     enforce: true
                // },
            },
        },
    }
};