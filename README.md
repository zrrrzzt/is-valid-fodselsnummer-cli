[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# is-valid-fodselsnummer-cli

CLI for checking if input is a valid [national identification number of Norway](https://en.wikipedia.org/wiki/National_identification_number#Norway)

## Installation

From npm

```sh
$ npm i is-valid-fodselsnummer-cli -g
```

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/is-valid-fodselsnummer-cli.git
```

cd into directory an run the setup script

```sh
$ npm run setup
```

## Usage

Pass in fødselsnummer

```sh
$ is-valid-fodselsnummer <fodselsnummer>
```

Pass in fødselsnummer and -t or --type to identify type of number.
Returns F if regular and D if D-number
Returns false if invalid

```sh
$ is-valid-fodselsnummer <fodselsnummer> -t
```

To see version

```sh
$ is-valid-fodselsnummer -v
```

To see help
```sh
$ is-valid-fodselsnummer -h
```

## Related

- [is-valid-fodselsnummer](https://github.com/zrrrzzt/is-valid-fodselsnummer) API for this module

## License

[MIT](LICENSE)
