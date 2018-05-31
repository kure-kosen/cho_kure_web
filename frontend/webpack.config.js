const path = require("path");

module.exports = {
  entry: {
    app: [path.resolve(__dirname, "src/index.js")],
  },

  output: {
    path: path.resolve(__dirname, "../public/assets/build"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
};
