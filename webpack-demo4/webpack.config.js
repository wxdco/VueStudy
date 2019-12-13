const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname,'./dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader','css-loader'] },
          { test: /\.(png|svg|jpg|gif)$/ , use:['file-loader']}
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    devServer:{
        contentBase: './dist'
    }
}