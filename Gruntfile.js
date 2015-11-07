module.exports = function(grunt) {
  grunt.initConfig({
    image_resize: {
      pizzeria :{
        options: {
          width: 115,
          height: 75
        },
        src: 'views/images/pizzeria.jpg',
        dest: 'dist/pizzeria-115-75.jpg'
      }
    },
    imagemin: {
      pizzeria: {
        src: 'dist/pizzeria-115-75.jpg',
        dest: 'dist/pizzeria-115-75-min.jpg'
      },
      profile: {
        src: 'dist/profilepic.jpg',
        dest: 'dist/profilepic-min.jpg'
      }
    },
    cssmin: {
      project1: {
        src: ['css/webfonts.css', 'css/style.css'],
        dest: 'dist/project1.css'
      },
      project1Print: {
        src: ['css/print.css'],
        dest: 'dist/print.css'
      }
    }
    // compress: {
    //   project1Css: {
    //     src: 'dist/project1.css',
    //     dest: 'dist/project1.gzip.css'
    //   }
    // }
  });


  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['image_resize', 'imagemin', 'cssmin'])
}
