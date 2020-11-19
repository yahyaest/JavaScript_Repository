const path = require("path");
const { Template } = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  mode: "production",
  entry: {
    index: "./static/js/index.js",
    vendor: "./static/js/vendor.js",
    //anime_data: "./static/js/anime_data.js",
  },
  output: {
    filename: "[name].[contentHash].bundle.js",

    path: path.resolve(__dirname, "dist"),
  },

  //Optimization
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
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
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
  ],

  //Loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
