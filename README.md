# gulp-filehash

[![NPM Version](https://img.shields.io/npm/v/gulp-filehash.svg?style=flat)](https://www.npmjs.org/package/gulp-filehash)
[![NPM Downloads](https://img.shields.io/npm/dm/gulp-filehash.svg?style=flat)](https://www.npmjs.org/package/gulp-filehash)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/cjroth/gulp-filehash.svg?style=flat)](https://travis-ci.org/cjroth/gulp-filehash)
[![Coverage Status](https://img.shields.io/coveralls/cjroth/gulp-filehash.svg?style=flat)](https://coveralls.io/r/cjroth/gulp-filehash)
[![Gittip](http://img.shields.io/gittip/cjroth.svg)](https://www.gittip.com/cjroth/)

#### Output list of files in current stream to JSON file with their checksum hashes .

Add it to your gulp file:

```js
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filehash')('filelist.json'))
  .pipe(gulp.dest('out'))
```

Outputs `out/filelist.json`:

```json
{
  "awesome.file" : "79550af37b9f41fc0fe382b8e5fc67c3e160db8b",
  "lame.file" : "6a7177d9a0fd176dbbf7165693319d1fc5acdf58"
}
```

## Installation

```bash
$ npm install gulp-filehash
```

## Options

#### Base : `{ base: 'dist' }`

```js
gulp
  .src(['dist/dir1/awesome.file', 'dist/dir2/lame.file'])
  .pipe(require('gulp-filehash')('filelist.json', { base: 'dist' }))
  .pipe(gulp.dest('out'))
```
Outputs:
```json
{
  "dir1/awesome.file" : "79550af37b9f41fc0fe382b8e5fc67c3e160db8b",
  "dir2/lame.file" : "6a7177d9a0fd176dbbf7165693319d1fc5acdf58"
}
```

#### Script: `{ script: true }`

```js
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filehash')('filelist.json', { script: true }))
  .pipe(gulp.dest('out'))
```

Outputs `out/filelist.json`:

```js
var fileHashes = {
  "awesome.file" : "79550af37b9f41fc0fe382b8e5fc67c3e160db8b",
  "lame.file" : "6a7177d9a0fd176dbbf7165693319d1fc5acdf58"
}
```

#### Script with Variable Name: `{ script: 'hashes' }`

```js
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filehash')('filelist.json', { script: 'hashes' }))
  .pipe(gulp.dest('out'))
```

Outputs `out/filelist.json`:

```js
var hashes = {
  "awesome.file" : "79550af37b9f41fc0fe382b8e5fc67c3e160db8b",
  "lame.file" : "6a7177d9a0fd176dbbf7165693319d1fc5acdf58"
}
```

## [MIT Licensed](LICENSE)
