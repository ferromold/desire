import gulp from 'gulp'
import browserSync from 'browser-sync'

import path from "./config/path.js";
import app from "./config/app.js";

import html from './tasks/html.js'
import scss from './tasks/scss.js'
import clear from "./tasks/clear.js";
import js from "./tasks/js.js";
import font from "./tasks/font.js";
import img from "./tasks/img.js";

const server = function () {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

const watcher = function () {
    gulp.watch(path.html.watch, html).on('all', browserSync.reload)
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload)
    gulp.watch(path.js.watch, js).on('all', browserSync.reload)
    gulp.watch(path.img.watch, img).on('all', browserSync.reload)
    gulp.watch(path.font.watch, font).on('all', browserSync.reload)
}

export { watcher }

const build = gulp.series(
    clear,
    gulp.parallel(html, scss, js, img, font),
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
)

export { scss }
export { html }
export { js }
export { img }
export { font }

export default app.isProd
    ? build
    : dev
