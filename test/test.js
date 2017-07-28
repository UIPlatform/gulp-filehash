var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gulpFilehash = require('..');

var source = 'test/fixtures/*.txt';

describe('gulp-filehash', function(done) {

  it('should output a json file with a list of the files currently in the stream', function(done) {
    var out = 'filehash.json';
    var fileHashPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilehash(out))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        var filehash = require(fileHashPath);
        filehash['test/fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        filehash['test/fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(fileHashPath);
        done();
      });

  });

  it('should output relative to base path when the base option is set', function(done) {
    var out = 'filehash-base.json';
    var fileHashPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilehash(out, { base: 'test' }))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        var filehash = require(fileHashPath);
        filehash['fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        filehash['fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(fileHashPath);
        done();
      });
  });

  it('should output hash object assigned to a variable when script option is set', function(done) {
    var out = 'filehash-script.json';
    var fileHashPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilehash(out, { script: true }))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        eval(fs.readFileSync(fileHashPath)+'');
        fileHashes['test/fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        fileHashes['test/fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(fileHashPath);
        done();
      });
  });

  it('should output hash object assigned to a specified variable when script option is set to a variable name', function(done) {
    var out = 'filehash-script.json';
    var fileHashPath = path.join(__dirname, out);
    gulp
      .src(source)
      .pipe(gulpFilehash(out, { script: 'myHashes' }))
      .pipe(gulp.dest('test'))
      .on('end', function(file) {
        eval(fs.readFileSync(fileHashPath)+'');
        myHashes['test/fixtures/file1.txt'].should.equal('79550af37b9f41fc0fe382b8e5fc67c3e160db8b');
        myHashes['test/fixtures/file2.txt'].should.equal('6a7177d9a0fd176dbbf7165693319d1fc5acdf58');
        fs.unlinkSync(fileHashPath);
        done();
      });
  });

});
