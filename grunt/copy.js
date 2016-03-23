/**
 * Created by Ivan on 16.03.2016.
 */

module.exports = {
    options: {
        forceOverwrite: true,
        force: true
    },
    html: {
        expand: true,
        cwd: 'sources/',
        src: '*.html',
        dest: 'build/'
    },
    fonts: {
        expand: true,
        cwd: 'sources/',
        src: 'fonts/*',
        dest: 'build/'
    },
    vendor: {
        expand: true,
        cwd: 'sources/vendor/',
        src: '**/*.js',
        dest: 'build/js/'
    },
    data: {
        expand: true,
        cwd: 'sources/data',
        src: '**/*.json',
        dest: 'build/data/'
    }
};