const { parallel, series } = require('gulp');

const { views, clean, server, styles, images, fonts, scripts} = require('./gulp/tasks');

const build = series(clean, parallel(views, styles, scripts, fonts, images));
const start = series(build, server);

module.exports = {
  start,
  build,
}
