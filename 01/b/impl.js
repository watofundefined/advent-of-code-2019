var r = require('ramda');

function fuelForAModule(weight) {
  var result = [fuelForAWeight(weight)];

  while (true) {
    var extra = fuelForAWeight(result[result.length - 1]);
    if (extra <= 0) return r.sum(result);

    result.push(extra);
  }
}

function fuelForAWeight(weight) {
  return Math.floor(weight / 3) - 2;
}

exports.fuelForAModule = fuelForAModule;
