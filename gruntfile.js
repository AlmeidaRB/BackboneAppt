module.exports = function(grunt) {

  // Configure task(s)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/js/*.js', //source javascript files
        dest: 'js/script.min.js' //destination, output file
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        src: 'src/js/*.js',
        dest: 'js/script.min.js'
      }
    },
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/styles.css' : 'src/scss/styles.scss'
        }
      },
      build: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/styles.css' : 'src/scss/main.scss'
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js'], //when these files change
        tasks: ['uglify:dev'] //run this task
      },
      css: {
        files: ['src/scss/*.scss'], //again, when this changes...
        tasks: ['sass:dev']//run this task
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-serve');

  // Register task(s)
  grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
  grunt.registerTask('build', ['uglify:build', 'sass:build']);

};
