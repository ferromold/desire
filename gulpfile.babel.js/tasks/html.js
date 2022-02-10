import gulp from "gulp";
import path from "../config/path.js";
import app from "../config/app.js";

import loadPlugins from 'gulp-load-plugins'
const pg = loadPlugins()

export default () => {
    return gulp.src(path.html.src)
        .pipe(pg.plumber({
            errorHandler: pg.notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe(pg.fileInclude())
        .pipe(pg.webpHtml())
        .pipe(pg.htmlmin(app.htmlmin))
        .pipe(gulp.dest(path.html.dest))
}





