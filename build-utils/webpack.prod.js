const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new Dotenv({
      path: "./.env.production"
    })
  ]
};

/*
 * Now you can introduce sensitive information – such as IP addresses,
 * account credentials, and API keys/secrets – in your environment variables
 * via your .env.development and .env.production files. Your Webpack configuration
 * will copy them over to make them accessible in your source code (see previous section).
 */
