module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
          "gruntfile.js",
          "fileinput.js",
          "index.js",
          "test/*.js"
      ]
    },
    mochaTest: {
        test: {
        options: {
          reporter: "spec",
          timeout: "20000"
        },
        src: [ "./test/test.js" ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');


  // Default task(s).
    grunt.registerTask('default', ['jshint', 'mochaTest']);

};
