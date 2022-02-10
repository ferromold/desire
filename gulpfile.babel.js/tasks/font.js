import path from "../config/path";
import gulp from "gulp";
import app from "../config/app";

import loadPlugins from 'gulp-load-plugins'
const pg = loadPlugins()

export default () => {
    return gulp.src(path.font.src)
        .pipe(pg.plumber({
            errorHandler: pg.notify.onError(error => ({
                title: 'font',
                message: error.message
            }))
        }))
        .pipe(pg.newer(path.font.dest))
        .pipe(pg.fonter(app.fonter))
        .pipe(gulp.dest(path.font.dest))
        .pipe(pg.ttf2woff2())
        .pipe(gulp.dest(path.font.dest))
}