module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    noCache: true,
                    sourcemap: 'none'
                },
                files: {
                    'css/main.css': 'css/main.scss', // 'destination': 'source'
                }
            }
        },
        watch: {
            css: {
                files: ['css/*.scss'],
                tasks: ['sass:dev']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '*.html', 
                    'css/main.css',
                    'js/main.js',
                    'img/*.jpg',
                    'img/*.png',
                    'img/*.gif'
                ]
            },
            options: {
                livereload: true,
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './',
                    open: true,
                    livereload: 35729
                }
            }
        },
        wiredep: {
            task: {
                src: [
                    '*.html' // .html support...
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');


    // Default task(s).
    grunt.registerTask('default', ['wiredep', 'sass', 'connect', 'watch']);

};