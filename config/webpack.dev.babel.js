import merge from 'webpack-merge';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import base from './webpack.base.babel';

const config = merge(base, {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?overlay=false',
    './client'
  ],

  output: {
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});

export default function (app) {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: 'minimal'
  }));

  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 2000
  }));
}
