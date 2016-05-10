module.exports = [{
  name: 'apiClient',
  webpack: {
    entry: {
      apiClient: './index.es6.js',
    },
    output: {
      library: '[name].js',
      libraryTarget: 'umd',
    },
    resolve: {
      generator: 'npm-and-modules',
      extensions: ['', '.js', '.jsx', '.es6.js', '.json'],
    },
    loaders: [
      'es5react',
      'json',
    ],
    plugins: [
      'production-loaders',
      'set-node-env',
      'abort-if-errors',
      'minify-and-treeshake',
    ],
    externals: {
      lodash: 'commonjs lodash',
      'lodash/object': 'commonjs lodash/object',
      'lodash/lang': 'commonjs lodash/lang',
      'lodash/array': 'commonjs lodash/array',
      'lodash/collection': 'commonjs lodash/collection',
      superagent: 'commonjs superagent',
      'superagent-retry': 'commonjs superagent-retry',
    },
  },
}];
