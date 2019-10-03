const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: "./dist",
        port: 3000,
        open: true,
        hot: true,
        inline: true,
        compress: true,
        historyApiFallback: {
            disableDotRule: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "SmartGallery",
            template: "./index.html"
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProvidePlugin({
            fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
        })
    ]
};
