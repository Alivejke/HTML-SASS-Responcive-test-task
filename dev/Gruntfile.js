module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-htmlclean');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: 'localhost',
                    base: '../web/'
                }
            }
        },

        htmlclean: {
            pages: {
                expand: true,
                cwd: '',
                src: '*.html',
                dest: '../web/'
            }
        },
        
        concat: {
            options: {
                separator: '',
            },
            main: {
                src: ['js/*.js'],
                dest: '../web/js/main.min.js'
            },
            vendor: {
                src: ['js/vendor/jquery-1.11.1.js', 'js/vendor/*.js'],
                dest: '../web/js/vendor.min.js'
            },
            fontello: {
                src: ['fontello/**/*.css'],
                dest: '../web/css/fontello.css'
            }
        },

        compass: {
            compile: {
                options: {
                    sassDir: 'sass',
                    cssDir: '../web/css',
                    imagesDir: 'img',
                    fontsDir: 'fonts',
                    generatedImagesDir: '../web/img'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    '../web/index.html': 'index.html'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat:main', 'concat:vendor'],
                options: {
                    interrupt: true
                }
            },

            fontello: {
                files: ['fontello/**/*.css'],
                tasks: ['concat:fontello'],
                options: {
                    interrupt: true
                }
            },

            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    interrupt: true
                }
            },

            html: {
                files: ['*.html'],
                tasks: ['htmlclean:pages'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('build', ['uglify', 'less', 'htmlmin']);
    grunt.registerTask('default', ['connect', 'watch']);

};
