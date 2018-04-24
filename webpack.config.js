/**
 * Created by guosen on 2018/4/23.
 */
const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const conf = {
    entry: {
        vendor: ['angular','angular-ui-router'],
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src/app.js')
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(
            ['dist/*.*'],　
            {
                root: __dirname,
                verbose:  true,
                dry:      false
            }
        ),
        new HtmlWebpackPlugin(

        ),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/views'),
                to: path.resolve(__dirname, 'dist/views')
            }
        ])
    ],
    optimization:{
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    }
};

module.exports=conf;