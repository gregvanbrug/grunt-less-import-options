/*
 * grunt-less-import-options
 * https://github.com/gregvanbrug/grunt-less-import-options
 *
 * Copyright (c) 2014 Greg van Brug
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  var _ = require('lodash');

  grunt.registerMultiTask('less_import_options', 'Import Less files using Less Import Options', function() {

    var options = this.options({ });

    var validOptions = [ 'reference', 'inline', 'less', 'css', 'once', 'multiple' ];

    var src  = this.files[0].src;
    var dest = this.files[0].dest;

    var output = '';

    var createImport = function(files, options) {

      var template = function(path, option) {
        if (option) {
          return '@import (' + option + ') "' + path + '";\n';
        } else {
          return '@import "' + path + '";\n';
        }
      };

      if (options) {
        _.forEach(files, function(file) {
          output += template(file, options);
        });
      } else {
        files.src.forEach( function(file) {
          output += template(file);
        });
      }

    };

    // Handle Options
    if (options) {
      _.forEach(options, function(files, option) {
        if ( _.contains(validOptions, option) ) {
          createImport(files, option);
        } else {
          grunt.fail.warn( option.red + ' is not a valid Less Import Option.'.red );
        }
      });
    }

    // Default
    if (src) {
      this.files.forEach( function(file) {
        createImport(file, null);
      });
    }

    // Get 'er done.
    grunt.file.write( dest, output );
    grunt.log.writeln('File "' + dest.green + '" created.');

  });

};
