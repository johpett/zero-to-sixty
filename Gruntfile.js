module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            jshintrc: true,
            all: ['src/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};