/**
 * Created by guosen on 2018/4/25.
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConf = require('./webpack.base.config');

module.exports = merge(baseConf, {
    mode: "development",
    devServer:{
        port: 8080,
        hot: true,
        open: true,
        contentBase: 'dist'
    },
    plugins:[
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
    },
});