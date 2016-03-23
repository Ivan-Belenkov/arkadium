module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                cmq: 'grunt-combine-media-queries'
            }
        }
    });
};