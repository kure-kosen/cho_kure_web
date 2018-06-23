const path = require("path");

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(__dirname, "src/index.tsx")]
  },

  output: {
    path: path.resolve(__dirname, "../public/assets/build/"),
    publicPath: "/assets/build/",
    filename: "[name].js"
  },

  mode: "development",
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react", "react-dom"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "/",
              publicPath: "../assets/build"
            }
          }
        ]
      }
    ]
  },

  devServer: {
    port: 5000,
    noInfo: true,
    historyApiFallback: true,
    overlay: true,
    inline: true
  }
};
