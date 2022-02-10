import gulp from "gulp";
import dartSass from 'sass';
import path from "../config/path.js";
import app from "../config/app.js";

import loadPlugins from 'gulp-load-plugins'
const pg = loadPlugins()

const sass = pg.sass(dartSass)

export default () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(pg.plumber({
            errorHandler: pg.notify.onError(error => ({
                title: 'scss',
                message: error.message
            }))
        }))
        .pipe(pg.sassGlob())
        .pipe(sass())
        .pipe(pg.webpCss())
        .pipe(pg.autoprefixer())
        .pipe(pg.shorthand())
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
        .pipe(pg.rename({ suffix: '.min' }))
        .pipe(pg.csso())
        .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
}