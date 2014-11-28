module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            allFiles: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};