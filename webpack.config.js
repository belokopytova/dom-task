const path = require("path");

module.exports = {
  entry: "./src/index.js", // точка входа
  output: {
    filename: "bundle.js", // собранный JS
    path: path.resolve(__dirname, "dist"),
    clean: true, // чистит dist перед сборкой
  },
  mode: "development", // можно поменять на 'production'
  devServer: {
    static: "./dist", // откуда запускать сервер
    port: 3000,
    open: true, // открывает браузер
    hot: true, // hot reload
  },
  module: {
    rules: [
      {
        test: /\.js$/, // все JS файлы
        exclude: /node_modules/,
        use: "babel-loader", // обработка через Babel
      },
      {
        test: /\.css$/, // все CSS файлы
        use: ["style-loader", "css-loader"], // сначала css-loader, потом style-loader
      },
    ],
  },
  resolve: {
    extensions: [".js"], // расширения для импорта
  },
};
