const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");

module.exports = {
  mode: "development",
  // devtool: "none",
  entry: "./src/index.js",
  output: {
    // contentHash : use of Hash to prevent cashing : with every change in the code the value of contentHash changes which prevent browser from cashing the old version of code (Cashing is a method used by browser to load its lastest version of the file instead of download it at every reload)
    //ctrl + r : normal reload : Cashing
    //ctrl + shift + r : force reload : No Cashing
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  //Loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // test: /\.s[ac]ss$/i,
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings - Step3
          "style-loader",
          // Translates CSS into CommonJS - Step2
          "css-loader",
          // Compiles Sass to CSS - Step1
          "sass-loader",
        ],
      },
    ],
  },
  //Plugins
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
};
