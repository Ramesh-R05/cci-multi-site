const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const production = process.env.NODE_ENV === 'production';

const config = {
    bail: true,
    devtool: 'source-map',
    entry: ['./app/client.js', './app/styles/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: `[name]${production ? '-[chunkhash]' : ''}.js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-1'],
                        plugins: ['transform-decorators-legacy', path.resolve('./babel-plugin-transform-load-alternates')]
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false,
                                minimize: process.env.NODE_ENV
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    autoprefixer({
                                        browsers: ['last 2 versions', 'ie >= 10', 'ios >= 9', 'Android >= 4']
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                outputStyle: 'compressed',
                                // eslint-disable-next-line global-require
                                importer: require('./sass-importer.js')
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`[name]${production ? '-[chunkhash]' : ''}.css`),
        new ManifestPlugin(),
        new webpack.DefinePlugin({
            'process.env.APP_KEY': JSON.stringify(process.env.APP_KEY)
        })
    ]
};

if (production) {
    config.plugins.push(new WebpackMd5Hash());
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            comments: false,
            compress: {
                warnings: false,
                comparisons: false,
                screw_ie8: true
            }
        })
    );
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    );
}

module.exports = config;
