const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval-source-map",
  plugins: [
    new Dotenv({
      path: "./.env.development"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
