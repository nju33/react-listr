import path from 'path';
import Webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config: Webpack.Configuration = {
  mode: process.env.NODE_ENV as any || 'development',
  entry: path.join(__dirname, 'demo/app.tsx'),
  resolve: {
    extensions: ['.json', '.js', '.ts', '.tsx'],
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          happyPackMode: true,
          configFile: 'tsconfig.webpack.json'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin(),
  ]
}

export default config;