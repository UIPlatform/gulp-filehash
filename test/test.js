var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gulpFilelist = require('..');

var source = 'test/fixtures/*.txt';

describe('gulp-filehash', function(done) {

  it('should output a json file with a list of the files currently in the stream', function(done) {
    var out = 'filelist.json';
    var filelistPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilelist(out))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        var filelist = require(filelistPath);
        filelist['test/fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        filelist['test/fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(filelistPath);
        done();
      });

  });

  it('should output relative to base path when the base option is set', function(done) {
    var out = 'filelist-absolute.json';
    var filelistPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilelist(out, { base: 'test' }))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        var filelist = require(filelistPath);
        filelist['fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        filelist['fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(filelistPath);
        done();
      });
  });

  it('should output hash object assigned to a variable when script option is set', function(done) {
    var out = 'filelist-absolute.json';
    var filelistPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilelist(out, { script: true }))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        var filelist = require(filelistPath);
        filelist['fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        filelist['fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(filelistPath);
        done();
      });
  });

});
