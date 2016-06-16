/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  server: {
    baseDir: [
      '.'
    ],
    // directory: true,
    routes: {
      '/templates': 'src/templates',
      '/dist': 'dist'
    }
  },
  port: 3000,
  ghostMode: {
    clicks: true,
    location: false,
    forms: true,
    scroll: true
  },
  files: [
    './dist/**/*.js',
    './src/templates/**/*.html',
    'index.html'
  ],
  injectChanges: true,
  notify: false,
  reloadDelay: 1000,
  open: false,
  watchOptions: {
    usePolling: false
  }
};