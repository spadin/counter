module.exports = {
  context: __dirname + '/src',
  entry: 'mocha!../tests/test.js',
  output: {
    filename: 'test-bundle.js',
    path: './bundle',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0', 'react', 'es2015'],
        },
      }
    ],
  },
};
