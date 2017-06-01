import merge from 'webpack-merge';
import webpack from 'webpack';
import base from './webpack.base.babel';

export default merge(base, {
  entry: {
    main: ['./client/index.jsx'],
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'react-hot-loader']
  },

  output: {
    filename: '[name].[hash].js'
  },

  plugins: [
    // assign modules and chunks shorter ids to lower file size
    new webpack.optimize.OccurrenceOrderPlugin(),

    // sets the parameters of other loaders
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    // minifies the code
    new webpack.optimize.UglifyJsPlugin()
  ]
});
