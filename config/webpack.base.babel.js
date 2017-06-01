import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

const assetsPluginInstance = new AssetsPlugin({ path: 'dist' });

const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV !== 'production'
});

export default {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },

  context: path.resolve(__dirname, '../src'),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    // configure options for loaders
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, '../src', 'scss')]
        }
      }
    }),

    // extract css plugin
    extractSass,

    // assets plugin
    assetsPluginInstance
  ]
};
