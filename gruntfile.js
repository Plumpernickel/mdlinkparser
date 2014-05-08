module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
          "gruntfile.js",
          "index.js",
          "linkparser.js"
      ]
    }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-mocha-test');


  // Default task(s).
    grunt.registerTask('default', ['jshint']);

};
