import fetch from './tasks/fetch.js';
import gulp from 'gulp';

gulp.task('default', gulp.series('fetch'));
gulp.task(fetch);
