# gulp-filehash

[![NPM Version](https://img.shields.io/npm/v/gulp-filehash.svg?style=flat)](https://www.npmjs.org/package/gulp-filehash)
[![NPM Downloads](https://img.shields.io/npm/dm/gulp-filehash.svg?style=flat)](https://www.npmjs.org/package/gulp-filehash)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/UIPlatform/gulp-filehash.svg?style=flat)](https://travis-ci.org/UIPlatform/gulp-filehash.svg)
[![codecov](https://codecov.io/gh/UIPlatform/gulp-filehash/branch/master/graph/badge.svg?token=DOoLvegcPi)](https://codecov.io/gh/UIPlatform/gulp-filehash)

#### Output list of files in current stream to JSON file with their checksum hashes .

Add it to your gulp file:

```js
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filehash')('filehash.json'))
  .pipe(gulp.dest('out'))
```

Outputs `out/filehash.json`:

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
  .pipe(require('gulp-filehash')('filehash.json', { base: 'dist' }))
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
  .pipe(require('gulp-filehash')('filehash.json', { script: true }))
  .pipe(gulp.dest('out'))
```

Outputs `out/filehash.json`:

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
  .pipe(require('gulp-filehash')('filehash.json', { script: 'hashes' }))
  .pipe(gulp.dest('out'))
```

Outputs `out/filehash.json`:

```js
var hashes = {
  "awesome.file" : "79550af37b9f41fc0fe382b8e5fc67c3e160db8b",
  "lame.file" : "6a7177d9a0fd176dbbf7165693319d1fc5acdf58"
}
```

## [MIT Licensed](LICENSE)
