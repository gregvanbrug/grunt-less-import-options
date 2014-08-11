/*
 * grunt-less-import-options
 * https://github.com/gregvanbrug/grunt-less-import-options
 *
 * Copyright (c) 2014 Greg van Brug
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  grunt.registerMultiTask('less_import_options', 'Import Less files using Less Import Options', function() {

    var options = this.options({ });

    var validOptions = [ 'reference', 'inline', 'less', 'css', 'once', 'multiple' ];

    // Verify the provided Options are Valid Imports Options
    for (var option in options) {
      if ( validOptions.indexOf( option ) === -1 ) {
        grunt.fail.warn( option.red + ' is not a valid Less Import Option.'.red );
      }
    }

    var src  = this.files[0].src,
        dest = this.files[0].dest;

    var output = '';

    var imports = {};

    var template = function(path, importType) {

      var defaultTemplate = '@import "' + path + '";\n',
          optionsTemplate = '@import (' + importType + ') "' + path + '";\n';

      return importType === 'default' ? defaultTemplate : optionsTemplate;

    };

    var createImports = function(files, importType) {

      if (typeof files === 'string') {
        files = [ files ];
      }

      files.forEach(function(file) {
        output += template(file, importType);
      });

    };

    // Handle the Options
    for (var importType in options) {
      imports[importType] = options[importType];
    }

    // Add the Defaults
    if (src) {
      imports['default'] = src;
    }

    // Create all the @imports
    for (var lessImport in imports) {
      createImports(imports[lessImport], lessImport);
    }

    // Get 'er done.
    grunt.file.write( dest, output );
    grunt.log.writeln('File "' + dest.green + '" created.');

  });

};
