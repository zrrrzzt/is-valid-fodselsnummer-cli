'use strict'

var exec = require('child_process').execFile
var tap = require('tap')
var getHelpText = require('../lib/getHelpText')
var pkgVersion = require('../package.json').version

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./index.js', ['-h'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithH (test) {
  exec('./index.js', ['--help'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./index.js', ['-v'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns version with --version flag', function versionWithV (test) {
  exec('./index.js', ['--version'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns false if fodselsnummer is invalid',
  function cliDefault (test) {
    exec('./index.js', ['11111234567'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.equal(stdout.toString().trim(), 'false')
        test.end()
      }
    })
  }
)

tap.test('It returns true if fodselsnummer is valid',
  function cliDefault (test) {
    exec('./index.js', ['01010750160'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.equal(stdout.toString().trim(), 'true')
        test.end()
      }
    })
  }
)

tap.test('It returns F if fodselsnummer is type F',
  function cliDefault (test) {
    exec('./index.js', ['01010750160', '--type'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.equal(stdout.toString().trim(), 'F')
        test.end()
      }
    })
  }
)

tap.test('It returns D if fodselsnummer is type D',
  function cliDefault (test) {
    exec('./index.js', ['41085801188', '--type'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.equal(stdout.toString().trim(), 'D')
        test.end()
      }
    })
  }
)

tap.test('It returns false if fodselsnummer is invalid',
  function cliDefault (test) {
    exec('./index.js', ['11111234567', '--type'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.equal(stdout.toString().trim(), 'false')
        test.end()
      }
    })
  }
)

tap.test('It throws error if fodselsnummer not supplied',
  function cliDefault (test) {
    exec('./index.js', function getDefault (error, stdout, stderr) {
      test.ok(error, 'Error OK')
      test.end()
    })
  }
)
