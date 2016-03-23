/**
 * Created by Ivan on 16.03.2016.
 */

module.exports = {
    dev: {
        files: {
            'build/styles/styles.css': 'sources/styles/main.styl'
        },
        options: {
            compress: false,
            "include css" : true
        }
    },
    prod: {
        files: {
            'build/styles/styles.css': 'sources/styles/main.styl'
        },
        options: {
            compress: true,
            "include css" : true
        }
    }
};