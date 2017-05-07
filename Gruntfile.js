module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          "expand": true,
          "cwd": "public/stylesheets/scss/",
          "src": ["style.scss"],
          "dest": "public/stylesheets/css",
          "ext": ".css"
        }]
      }
    },
    watch: {
      styles: {
        files: 'public/stylesheets/scss/*.scss', // All FILES ext.scss
        tasks: ['sass:dist']
      }
  },
  concat_css: {
    options: {
      // specific options
    },
    all: {
        src: ["public/stylesheets/css/style.css"],
        dest: "public/stylesheets/css/compiled.css"
    },
  }

  })

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.registerTask('default', ['sass:dist']);
}