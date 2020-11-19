const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    //filename: "main.js",
    filename: "[name].bundle.js",

    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      {
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
});
