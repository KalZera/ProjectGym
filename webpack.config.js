// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry:"./src/index.jsx",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public'
  },
  resolve:{
    extensions:['.js', '.jsx', '.css' ],
    alias: {
      modules: __dirname + '/node_modules'
    },
  },
  module: {
    rules: [ 
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader'],
      },
    ],
  },
};