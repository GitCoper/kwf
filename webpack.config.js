var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry    : "./src/app.js",
    output   : {
        path      : path.resolve(__dirname, "dist"),
        filename  : "bundle.js",
        publicPath: '/'
    },
    module   : {
        loaders: [
            {
                test: /\.js$/,
                use : [{
                    loader : 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
            },
            {
                test: /\.html$/,
                use : ['html-loader']
            },
            {
                test   : /\.scss$/,
                use    : [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true,
                        url      : false
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }],
                exclude: /node_modules/

            },
        ]
    },
    devtool  : 'source-map',
    plugins  : [
        new webpack.ProvidePlugin({
            $              : "jquery",
            jQuery         : "jquery",
            "window.jQuery": "jquery",
            "window.$"     : "jquery",
            "Tether"       : 'tether',
        }),
        new CopyWebpackPlugin([
            {
                from: '**/assets/*',
                to  : 'assets/[name].[ext]'
            },
            {
                from: '*/assets/*',
                to  : 'assets/[name].[ext]'
            }
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot               : true,
        contentBase       : path.resolve(__dirname, 'dist'),
        publicPath        : '/',
        historyApiFallback: true
    },

};
