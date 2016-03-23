/**
 * Created by Ivan on 17.03.2016.
 */

module.exports = {
    options: {
        map: false,

        processors: [
            require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
        ]
    },
    dist: {
        src: 'build/styles/styles.css'
    }
};