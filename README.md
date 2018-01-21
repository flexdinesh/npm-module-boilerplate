# NPM Module Boilerplate
[![Build Status](https://travis-ci.org/flexdinesh/npm-module-boilerplate.svg?branch=master)](https://travis-ci.org/flexdinesh/npm-module-boilerplate)
[![dependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate)
[![devDependencies Status](https://david-dm.org/flexdinesh/npm-module-boilerplate/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Boilerplate for npm/node module. Write with ES6 - have compatibility with all node versions.

This boilerplate is for people who want write code using all ES6 features ( and stage-2 ) but also want/need backwards compatibility with old node versions.


## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

You have readymade boilerplate code to kick start your module development without having to worry about setting up CICD or publishing to npm registry.

Includes code examples for default and named exports/imports. You also have the badges here in the Readme.md for reference.

Happy hacking =)

# Features
* Build with [Babel](https://babeljs.io). (ES6 -> ES5)
* Test with [mocha](https://mochajs.org).
* Cover with [istanbul](https://github.com/gotwarlost/istanbul).
* Check with [eslint](eslint.org).
* Deploy with [Travis](travis-ci.org).

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with coverage results. Tests can be written with ES6 (WOW!)
- `npm test:only` - Run tests without coverage results. Tests can be written with ES6 (WOW!)
- `npm test:watch` - You can even re-run tests on file changes!
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `npm run test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `npm run build` - Do some magic with ES6 to create ES5 code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing you module.

# Installation
Just clone this repo and remove `.git` folder.
