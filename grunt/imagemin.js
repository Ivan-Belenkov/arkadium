module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'sources/',
            src: ['images/**/*.{png,jpg,gif}'],
            dest: 'build/'
        }]
    }
};