var r = require('ramda');

var {fuelForAModule} = require('./impl');
var input = require('./input');

console.log(r.sum(input.map(fuelForAModule)));
