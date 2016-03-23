/**
 * Created by Ivan on 16.03.2016.
 */
module.exports = {
    options: {
        livereload: {
            host: 'localhost',
            port: 35729
        }
    },
    img: {
        files: "sources/images/**/*",
        tasks: ["imagemin"]
    },
    styles: {
        files: "sources/styles/**/*.{styl, css}",
        tasks: ["stylus:dev", "postcss", "cmq"]
    },
    html: {
        files: "sources/index.html",
        tasks: ["copy:html"]
    },
    fonts: {
        files: "sources/fonts/**/*",
        tasks: ["copy:fonts"]
    },
    scripts: {
        files: ["sources/scripts/**/*", "sources/index.js"],
        tasks: ["webpack"]
    },
    vendor: {
        files: "sources/vendor/**/*.js",
        tasks: ["copy:vendor"]
    },
    data: {
        files: "sources/data/**/*.json",
        tasks: ["copy:data"]
    }
};