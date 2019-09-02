module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'build/organw-uikit.min.css': ['build/organw-uikit.css']
                }
            }
        },
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            build: {
                files: {
                    'build/organw-uikit.css': 'src/index.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.scss', 'src/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'cssmin']);
};
