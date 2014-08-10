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

    // Verify the provided Options are Valid Imports Options
    _.forEach(options, function(files, option) {
      if ( !_.contains(validOptions, option) ) {
        grunt.fail.warn( option.red + ' is not a valid Less Import Option.'.red );
      }
    });

    var src  = this.files[0].src,
        dest = this.files[0].dest;

    var output = '';

    var imports = {};

    var template = function(path, option) {

      var defaultTemplate = '@import "' + path + '";\n',
          optionsTemplate = '@import (' + option + ') "' + path + '";\n';

      return option === 'default' ? defaultTemplate : optionsTemplate;

    };

    var createImports = function(files, options) {

      var paths = options ? files : files.src;

      if (typeof paths === 'string') {
        paths = [ paths ];
      }

      _.forEach(paths, function(path) {
        output += template(path, options);
      });

    };

    // Handle the Options
    for (var option in options) {
      imports[option] = options[option];
    }

    // Add the Defaults
    if (src) {
      imports['default'] = src;
    }

    // Create all the @imports
    _.forEach(imports, function(file, option) {
      createImports(file, option);
    });

    // Get 'er done.
    grunt.file.write( dest, output );
    grunt.log.writeln('File "' + dest.green + '" created.');

  });

};
