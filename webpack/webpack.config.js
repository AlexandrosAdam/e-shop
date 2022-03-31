const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  // mode: "development",
  resolve: {
    // modules: [path.resolve(__dirname, "./src", "node_modules")],
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    alias: {
      types: path.resolve(__dirname, "..", "../src/types"),
      "@components": path.resolve(__dirname, "..", "../src/components"),
      "@styles": path.resolve(__dirname, "..", "../src/styles"),
      "@layout": path.resolve(__dirname, "..", "../src/layout"),
      "@views": path.resolve(__dirname, "..", "../src/views"),
    },
  },
  devServer: {
    // allowHosts: "all",
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
    // publicPath: "/",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      // base: "/",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      // filename: "./index.html",
    }),
  ],
  stats: "errors-only",
};
