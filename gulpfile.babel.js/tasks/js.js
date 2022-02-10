import gulp from "gulp";
import path from "../config/path";
import app from "../config/app";
import webpack from 'webpack-stream'

import loadPlugins from 'gulp-load-plugins'
const pg = loadPlugins()

export default () => {
    return gulp.src(path.js.src, {sourcemaps: true})
        .pipe(pg.plumber({
            errorHandler: pg.notify.onError(error => ({
                title: 'js',
                message: error.message
            }))
        }))
        .pipe(pg.babel())
        .pipe(webpack(app.webpack))
        .pipe(pg.uglify())
        .pipe(gulp.dest(path.js.dest, {sourcemaps: true}))
}