const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, "dist");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: distDir,
        filename: "./bundle.js"
    },
    module: {
        rules: [
            // Transpilage ES6
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // Compilation SASS -> CSS
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'resolve-url-loader', 'sass-loader']
            },
            // Recopie les fonts / images ...
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
      modules: [ "src", "node_modules"],
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        features: path.resolve(__dirname, 'src/features'),
        store: path.resolve(__dirname, 'src/store'),
      },
       extensions: ['.js', '.json']
    },
    plugins: [
        // Génère le fichier index.html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ]
  }
