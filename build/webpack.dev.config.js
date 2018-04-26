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
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        contentBase: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options:{
                            sourceMap:true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name][hash].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
});