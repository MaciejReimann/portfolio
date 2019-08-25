const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.s?.css$/,
        //  This tells webpack to match .scss / .css files against the first rule that’s valid.
        //  If the .scss / .css file ends in .module.css, use css modules. Else, use global styles.
        oneOf: [
          {
            test: /\.module\.s?.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-modules-typescript-loader" },
              {
                loader: "css-loader",
                // TODO: see documentation for fine-tuning dev experience!
                // https://github.com/webpack-contrib/css-loader
                options: {
                  localsConvention: "camelCase",
                  onlyLocals: true,
                  modules: {
                    mode: "local",
                    localIdentName: "[name]__[local]"
                  }
                }
              },
              { loader: "sass-loader" }
            ]
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin() // ??
  ],

  devServer: {
    contentBase: "./dist"
  }
};
