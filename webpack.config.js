module.exports = {
  entry:"./src/index.jsx",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [ 
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader'
        }
      }
    ],
  },
};