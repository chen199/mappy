const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bundlePath = path.resolve(__dirname, "public")


module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: bundlePath,
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: path.join(__dirname, "public"),
      template: "./src/index_template.html"
    })
  ]
}