# grunt-less-import-options [![Build Status](https://travis-ci.org/gregvanbrug/grunt-less-import-options.svg?branch=master)](https://travis-ci.org/gregvanbrug/grunt-less-import-options)

> Import Less files using [Less Import Options](http://lesscss.org/features/#import-options).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-less-import-options --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-less-import-options');
```

## The "less_import_options" task

### Overview
In your project's Gruntfile, add a section named `less_import_options` to the data object passed into `grunt.initConfig()`.

```js
less_import_options: {
  options: {
    // Task-specific options go here.
  },
  your_target: {
    // Target-specific file lists and/or options go here.
  },
}
```

### Options

For further documentation on the options see:
[http://lesscss.org/features/#import-options](http://lesscss.org/features/#import-options).

#### options.reference

Type: `String | Array`

#### options.inline

Type: `String | Array`

#### options.less

Type: `String | Array`

#### options.css

Type: `String | Array`

#### options.once

Type: `String | Array`

#### options.multiple

Type: `String | Array`

* As of 0.1.6, options may also be globbed -- file patterns beginning with ! will be ignored.

### Usage Examples

#### Default Options

```js
less_import_options: {
  files: {
    'dest/default_options': ['src/testing', 'src/123'],
  },
},
```

#### Custom Options

```js
less_import_options: {
  options: {
    reference: ['file.less', 'otherfile.less'],
    inline: ['file.less', 'otherfile.less']
  },
  files: {
    dest: 'dest/styles.less'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
