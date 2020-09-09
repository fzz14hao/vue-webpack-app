const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': [
                            'vue-style-loader',
                            'style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    }
                }
            },
            // babel-loader
            {
                test: /\.(js)$/,
                loader: ['babel-loader?cacheDirectory'],// 开启缓存
                include: srcPath,
                // exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}
