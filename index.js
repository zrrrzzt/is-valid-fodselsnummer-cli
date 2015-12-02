#!/usr/bin/env node
'use strict'

var isValidFodselsnummer = require('is-valid-fodselsnummer')
var pkg = require('./package.json')
var getHelpText = require('./lib/getHelpText')
var fodselsnummer = process.argv[2]
var argv = process.argv

if (!fodselsnummer) {
  throw new Error('Missing required input: fodselsnummer')
}

if (argv.indexOf('-h') !== -1 || argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (
  argv.indexOf('-v') !== -1 || argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

var isValid = isValidFodselsnummer(fodselsnummer)

console.log(isValid)

if (isValid) {
  process.exit(0)
} else {
  process.exit(1)
}
