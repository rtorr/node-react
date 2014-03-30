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
      browserify: {
        options: {
          stdout: true
        },
        command: 'node ./node_modules/browserify/bin/cmd.js -t reactify src/jsx/main.js > dist/bundle.js '
      },
      server: {
        options: {
          stdout: true
        },
        command: 'node srv/server.js'
      }
    },
    watch: {
      layouts: {
        files: ['./src/layouts/**/*.jade', './src/jsx/**/*.js'],
        tasks: ['shell:browserify', 'develop']
      },
      options: { 
        nospawn: true 
      }
    }
  });

  grunt.registerTask('b', [
    'shell:browserify'
  ]);

  grunt.registerTask('s', [
    'shell:server'
  ]);

  grunt.registerTask('dev', [
    'shell:browserify',
    'develop',
    'watch'
  ]);
};