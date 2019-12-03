var r = require('ramda');

var allModules = require('./input.js');
var { fuelForAModule } = require('./impl.js');

console.log(r.sum(allModules.map(fuelForAModule)));
