/**
 * Created by guosen on 2018/4/23.
 */
const path = require("path");
const conf = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
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
};

module.exports=conf;