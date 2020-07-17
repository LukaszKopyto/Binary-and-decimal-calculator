var path = require('path')
var entryPath = 'development'
var outputPath = 'production'
var entryFile = 'app.js'

module.exports = {
  entry: `./${entryPath}/js/${entryFile}`,
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, `${outputPath}/js`),
  },
  mode: 'production', // lub "development"
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, entryPath),
    publicPath: '/js/',
    compress: false,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
