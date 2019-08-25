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
        // If the .scss / .css file ends in .module.css, use css modules. Else, use global styles.
        oneOf: [
          {
            test: /\.module\.s?.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-modules-typescript-loader" },
              {
                loader: "css-loader",
                // Note that the exportOnlyLocals ( changed to onlyLocals) may not be needed,
                // as it should be the default; however, I’ve seen weird errors without it.
                // https://adamrackis.dev/css-modules/ = TODO -> check the docs!!!
                options: { modules: true, onlyLocals: false }
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
