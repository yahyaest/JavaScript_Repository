const path = require("path");
const { Template } = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  //target: "node",
  entry: {
    index: "./static/js/index.js",
    vendor: "./static/js/vendor.js",
    //anime_data: "./static/js/anime_data.js",
  },
  output: {
    filename: "[name].bundle.js",

    path: path.resolve(__dirname, "dist"),
  },
  //Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "anime_data.html",
      template: "./template/anime_data.html",
    }),
  ],

  //Loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(png|jpg|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs",
            },
          },
        ],
      },
    ],
  },
};
