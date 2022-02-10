import gulp from "gulp";
import app from "../config/app";
import path from "../config/path";

import loadPlugins from 'gulp-load-plugins'
const pg = loadPlugins()

export default () => {
    return gulp.src(path.img.src)
        .pipe(pg.plumber({
            errorHandler: pg.notify.onError(error => ({
                title: 'img',
                message: error.message
            }))
        }))
        .pipe(pg.newer(path.img.dest))
        .pipe(pg.webp())
        .pipe(gulp.dest(path.img.dest))
        .pipe(gulp.src(path.img.src))
        .pipe(pg.newer(path.img.dest))
        .pipe(pg.if(app.isProd, pg.imagemin(app.imagemin)))
        .pipe(gulp.dest(path.img.dest))
}