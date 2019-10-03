var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var TESTS_SOURCE_DIR = path.resolve(__dirname + "/tests/");

module.exports = {
    devtool: "source-map",
    entry: {
        app: [
            `webpack-dev-server/client?/`,
            "webpack/hot/only-dev-server",
            "regenerator-runtime/runtime",
            "./tests/components/index.jsx"
        ]
    },
    output: {
        path: (__dirname + '/dist'),
        publicPath: "/",
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        /* new HtmlWebpackPlugin({
            filename: TESTS_SOURCE_DIR + "/assets/index.html",
            template: TESTS_SOURCE_DIR + "/assets/index.html"
        }) */
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx'
        ],
        modules: [
            path.join(path.resolve(__dirname), 'node_modules'),
            path.resolve(TESTS_SOURCE_DIR),
            path.join(__dirname, '..', '..', 'node_modules')
        ]
    },
    devServer: {
        contentBase: "./dist",
        publicPath: "./dist",
        port: 3000,
        open: true,
        hot: false,
        compress: true,
        inline: false,
        lazy: false,
        quiet: true,
        watchContentBase: true,
        historyApiFallback: {
            disableDotRule: true
        }
    }
};
