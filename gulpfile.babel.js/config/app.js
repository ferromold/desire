const isProd = process.argv.includes('--production')
const isDev = !isProd

const webpackIf = isProd ? 'production' : 'development'
const webpackDev = 'development'

export default {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    webpack: {
        mode: webpackDev
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    }
}
