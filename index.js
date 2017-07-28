'use strict';
var pkg = require('./package');
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var File = require('vinyl');
var checksum = require('checksum');

// consts
module.exports = function(out, options) {

  options = options || {};

  if(!options.base){
    options.base = process.cwd();
  }

  var fileHashes = {};

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(pkg.name, 'Streams not supported'));
      return;
    }

    var filePath;
    filePath = path.relative(options.base,file.path);
    filePath = filePath.replace(/\\/g, '/');

    checksum.file(file.path,function(err,sum){
      fileHashes[filePath] = sum;
      cb();
    });

  }, function(cb) {
    var space = null;
    if(options.prettyPrint){
      space = '    ';
    }

    var prefix = '';
    if(options.script){
      var variableName = options.script;
      if(typeof variableName == "boolean"){
        variableName = "fileHashes";
      }
      prefix = 'var '+variableName+' = ';
    }

    var buffer = new Buffer(prefix + JSON.stringify(fileHashes, null, space));
    var fileListFile = new File({
      path: out,
      contents: buffer
    });
    this.push(fileListFile);
    cb();
  });
};
