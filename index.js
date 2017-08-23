#!/usr/bin/env node
'use strict'

const isValidFodselsnummer = require('is-valid-fodselsnummer')
const pkg = require('./package.json')
const getHelpText = require('./lib/getHelpText')
const fodselsnummer = process.argv[2]
const argv = process.argv
let type = false

if (!fodselsnummer) {
  throw new Error('Missing required input: fodselsnummer')
}

if (argv.indexOf('-h') !== -1 || argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (argv.indexOf('-v') !== -1 || argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

if (argv.indexOf('-t') !== -1 || argv.indexOf('--type') !== -1) {
  type = true
}

console.log(isValidFodselsnummer(fodselsnummer, type))
