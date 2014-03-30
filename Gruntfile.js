'use strict';

module.exports = function(grunt) {

  //load all grunt modules
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-develop');

  grunt.initConfig({

    develop: {
      server: {
        file: './src/server.js'
      }
    },
    shell: {
      jsx: {
        options: {
          stdout: true
        },
        command: 'node ./node_modules/react-tools/bin/jsx src/jsx/ dist/'
      },
      browserify: {
        options: {
          stdout: true
        },
        command: 'node ./node_modules/browserify/bin/cmd.js dist/test.js -o dist/bundle.js'
      }
    },
    watch: {
      layouts: {
        files: ['./src/layouts/**/*.jade', './src/jsx/**/*.js'],
        tasks: ['shell:jsx', 'shell:browserify', 'develop']
      },
      options: { 
        nospawn: true 
      }
    }
  });

  grunt.registerTask('jsx', [
    'shell:jsx'
  ]);

  grunt.registerTask('dev', [
    'shell:jsx',
    'develop',
    'watch'
  ]);
};