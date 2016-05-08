// Karma configuration
// Generated on Sun May 08 2016 20:26:26 GMT+0200 (CEST)

module.exports = function (config) {
  config.set ({

    basePath: '',
    frameworks: [ 'jasmine' ],
    files: [
      'src/*.js',
      'test/spec/data/data?.js',
      'test/spec/*.spec.js'
    ],
    exclude: [
      'bower_components/**/*'
    ],
    preprocessors: { },
    reporters: [ 'progress' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    concurrency: 1
  });
};
