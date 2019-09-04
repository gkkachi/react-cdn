const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true
  }
}
