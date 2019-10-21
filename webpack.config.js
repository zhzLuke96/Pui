const {
    resolve
} = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        core: resolve(__dirname, './src/core/core.scss'),
        util: resolve(__dirname, './src/util/util.scss'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: devMode ? '[name].css' : "[name].min.css"
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: devMode ? ["fast-css-loader", "fast-sass-loader"] : ["fast-css-loader", "postcss-loader", "fast-sass-loader"]
            }),
        }]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: devMode ? '[name].css' : "[name].min.css",
            allChunks: true,
        })
    ],
    optimization : {
        minimizer: devMode ? [] : [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}