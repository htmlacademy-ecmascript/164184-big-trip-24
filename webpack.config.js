const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js', // точка входа
  output: {
    filename: 'bundle.js', // имя файла сборки
    path: path.resolve(__dirname, 'build'), // директория для сборки (абсолютный путь)
    clean: true, // очистка директории перед новой сборкой
  },
  devtool: 'source-map', // генерация source-maps
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'build' }, // копирование файлов из /public в /build
      ],
    }),
  ],
  mode: 'development', // Режим разработки, можно поменять на 'production' для продакшен сборки
};
