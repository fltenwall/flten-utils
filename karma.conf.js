const webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    files: [
      'src/**/*.js',
      'test/**/**/*.js'
    ],
 
    // coverage reporter generates the coverage
    reporters: ['progress'],
 
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['webpack'],
      'test/**/**/*.js': ['webpack']
    },
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chrome-launcher",
      "karma-chai"
    ],

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'babel-loader'
              },
            ]
          },
        ]
      }
    },

 
    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};