const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = {
    filename: 'index.html',
    template: './index.html',
    inject: 'body',
};

module.exports = {
    entry: './js/app.jsx',
    output: {
        path: path.resolve('./dist/'),
        // library: '[name]',
        // filename: '[name].js'
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
        rules: [
            // {
            //   enforce: "pre",
            //   test: /\.jsx?$/,
            //   exclude: /node_modules/,
            //   loader: "eslint-loader",
            //   options: {
            //     failOnError: false,
            //     failOnWarning: false,
            //   },
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        }
                    }
                }),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                })
            },
            {
                test: /(\.png|\.jpg|\.gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            publicPath: '/assets/',
                        }
                    },
                ],
            },
            {
                test: /(\.ttf|\.svg|\.woff|\.woff2|\.eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '/fonts/',
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new CopyWebpackPlugin([
            { from: 'assets/no-image.png', to: 'assets' },
            { from: 'favicon.ico' },
            { from: 'package.json' },
            { from: 'server.js' },
        ]),
        new CleanWebpackPlugin(['dist'], {}),
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
