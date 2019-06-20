/* eslint-disable no-console */
const defaultAwesomeFunction = require('../src').default;
const { awesomeFunction } = require('../src');

const defaultVal = defaultAwesomeFunction('Dinesh');
const val = awesomeFunction();

// defaultVal === 'I am the Default Awesome Function, fellow comrade! - Dinesh'
console.log(defaultVal);
// val === 'I am just an Awesome Function'
console.log(val);
