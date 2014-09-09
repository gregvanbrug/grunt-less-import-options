'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.less_import_options = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.less');
    var expected = grunt.file.read('test/expected/default');
    test.equal(actual, expected, 'Should create the default @import');

    test.done();
  },
  default_glob: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_glob.less');
    var expected = grunt.file.read('test/expected/default_glob');
    test.equal(actual, expected, 'Should create the default @import with a glob');

    test.done();
  },
  reference_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/reference_option.less');
    var expected = grunt.file.read('test/expected/reference_option');
    test.equal(actual, expected, 'Should create a reference @import');

    test.done();
  },
  inline_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/inline_option.less');
    var expected = grunt.file.read('test/expected/inline_option');
    test.equal(actual, expected, 'Should create a inline @import');

    test.done();
  },
  less_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/less_option.less');
    var expected = grunt.file.read('test/expected/less_option');
    test.equal(actual, expected, 'Should create a less @import');

    test.done();
  },
  css_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/css_option.less');
    var expected = grunt.file.read('test/expected/css_option');
    test.equal(actual, expected, 'Should create a css @import');

    test.done();
  },
  once_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/once_option.less');
    var expected = grunt.file.read('test/expected/once_option');
    test.equal(actual, expected, 'Should create a once @import');

    test.done();
  },
  multiple_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiple_option.less');
    var expected = grunt.file.read('test/expected/multiple_option');
    test.equal(actual, expected, 'Should create a multiple @import');

    test.done();
  },
  all_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/all_options.less');
    var expected = grunt.file.read('test/expected/all_options');
    test.equal(actual, expected, 'Should create multiple @imports based on options');

    test.done();
  },
  option_as_string: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/option_as_string.less');
    var expected = grunt.file.read('test/expected/option_as_string');
    test.equal(actual, expected, 'Should create an @import based on a string');

    test.done();
  },
  option_glob: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/option_glob.less');
    var expected = grunt.file.read('test/expected/option_glob');
    test.equal(actual, expected, 'Should create an @imports for globbed options');

    test.done();
  },
  option_glob_ignore: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/option_glob_ignore.less');
    var expected = grunt.file.read('test/expected/option_glob_ignore');
    test.equal(actual, expected, 'Should create an @imports for globbed options and ignore ! prefix');

    test.done();
  }
};
