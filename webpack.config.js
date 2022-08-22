const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "statics"),
    filename: "index.bundle.js",
  },
  optimization: {
    minimize: false,
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              target: "es2015",
              externalHelpers: true,
              parser: {
                jsx: "preserve",
                syntax: "typescript",
                tsx: true,
                dynamicImport: true,
              },
            },
          },
        },
      },
    ],
  },
};
