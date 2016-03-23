/**
 * Created by Ivan on 16.03.2016.
 */

module.exports = {
    options: {
        limit: 10
    },
    devgroup: [
        'cssDev',
        'imagemin',
        'copy:html',
        'copy:fonts',
        'copy:vendor',
        'copy:data',
        'webpack'
    ],
    prodgroup: [
        'cssProd',
        'imagemin',
        'copy:html',
        'copy:fonts',
        'copy:vendor',
        'copy:data',
        'webpack'
    ]
};