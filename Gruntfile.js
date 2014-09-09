/*
 * grunt-less-import-options
 * https://github.com/gregvanbrug/grunt-less-import-options
 *
 * Copyright (c) 2014 Greg van Brug
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    less_import_options: {
      default: {
        files: {
          'tmp/default.less': ['test/fixtures/testing.less', 'test/fixtures/123.less']
        }
      },
      default_glob: {
        files: {
          'tmp/default_glob.less': ['test/fixtures/*.less']
        }
      },
      // invalid_option: {
      //   options: {
      //     slayer: ['test/fixtures/testing.less', 'test/fixtures/123.less']
      //   },
      //   dest: 'tmp/invalid_option.less'
      // },
      reference_option: {
        options: {
          reference: ['test/fixtures/testing.less', 'test/fixtures/123.less']
        },
        dest: 'tmp/reference_option.less'
      },
      inline_option: {
        options: {
          inline: ['test/fixtures/testing.less', 'test/fixtures/123.less']
        },
        dest: 'tmp/inline_option.less'
      },
      less_option: {
        options: {
          less: ['test/fixtures/testing.less', 'test/fixtures/123.less']
        },
        dest: 'tmp/less_option.less'
      },
      css_option: {
        options: {
          css: ['test/fixtures/testing.less', 'test/fixtures/123.less']
        },
        dest: 'tmp/css_option.less'
      },
      once_option: {
        options: {
          once: ['test/fixtures/testing.less', 'test/fixtures/123.less', 'test/fixtures/testing.less', 'test/fixtures/123.less']
        },
        dest: 'tmp/once_option.less'
      },
      multiple_option: {
        options: {
          multiple: ['test/fixtures/testing.less', 'test/fixtures/123.less', 'test/fixtures/testing.less', 'test/fixtures/123.less']
        },
        dest: 'tmp/multiple_option.less'
      },
      all_options: {
        options: {
          reference: ['test/fixtures/testing.less'],
          inline: ['test/fixtures/testing.less'],
          less: ['test/fixtures/testing.less'],
          css: ['test/fixtures/testing.less'],
          once: ['test/fixtures/testing.less'],
          multiple: ['test/fixtures/testing.less']
        },
        src: 'test/fixtures/testing.less',
        dest: 'tmp/all_options.less'
      },
      option_as_string: {
        options: {
          reference: 'test/fixtures/testing.less'
        },
        dest: 'tmp/option_as_string.less'
      },
      option_glob: {
        options: {
          reference: 'test/fixtures/*.less'
        },
        dest: 'tmp/option_glob.less'
      },
      option_glob_ignore: {
        options: {
          reference: [ 'test/fixtures/*.less', '!test/fixtures/123.less' ]
        },
        dest: 'tmp/option_glob_ignore.less'
      }
    },

    less: {
      default_options: {
        files: {
          'tmp/default.css': 'tmp/default.less'
        }
      },
      reference_option: {
        files: {
          'tmp/reference_option.css': 'tmp/reference_option.less'
        }
      },
      inline_option: {
        files: {
          'tmp/inline_option.css': 'tmp/inline_option.less'
        }
      },
      less_option: {
        files: {
          'tmp/less_option.css': 'tmp/less_option.less'
        }
      },
      css_option: {
        files: {
          'tmp/css_option.css': 'tmp/css_option.less'
        }
      },
      once_option: {
        files: {
          'tmp/once_option.css': 'tmp/once_option.less'
        }
      },
      multiple_option: {
        files: {
          'tmp/multiple_option.css': 'tmp/multiple_option.less'
        }
      },
      all_options: {
        files: {
          'tmp/all_options.css': 'tmp/all_options.less'
        }
      },
      option_glob: {
        files: {
          'tmp/option_glob.css': 'tmp/option_glob.less'
        }
      },
      option_glob_ignore: {
        files: {
          'tmp/option_glob_ignore.css': 'tmp/option_glob_ignore.less'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['clean', 'less_import_options', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test', 'less']);

};
