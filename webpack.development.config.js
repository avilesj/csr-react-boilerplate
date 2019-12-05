const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ template: './resources/index.html', inject: false }),
        new Dotenv()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist', 'web'),
        compress: true,
        port: 8000,
        hot: true,
        proxy: {
          '*': {
            target: {
              host: "localhost",
              protocol: "http:",
              port: 3000,
            }
          }
        }
    },
  module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
      extensions: [ '.js', '.jsx' ],
        alias: {
            'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
            'react-dom': '@hot-loader/react-dom'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'web')
    }
};
