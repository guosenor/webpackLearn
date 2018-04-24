/**
 * Created by guosen on 2018/4/23.
 */
const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports=function(env, argv){
    const isDev = argv.mode==='production'?false:true;
    const conf = {
        entry: {
            vendor: ['angular','angular-ui-router'],
            app: './src/app.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash:8].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: path.resolve(__dirname, 'src/app.js')
                },
                {
                    test: /\.css$/,
                    use:[
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        plugins:[
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin(),
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
    if(isDev){
        console.log('---------development---------------')
        conf.devServer={
            port:8080,
            hot:true,
            open: true,
            contentBase: './dist'
        };
        conf.plugins.push(new webpack.HotModuleReplacementPlugin());
        conf.plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name][hash].css",
                chunkFilename: "[id][hash].css"
            })
        )
        // conf.devtool= 'eval-source-map'
    }else{
        console.log('---------production---------------')
        conf.output.filename='[name].[chunkhash:8].js';
        conf.plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name][chunkhash:8].css"
            })
        );
    }
    return conf;
};