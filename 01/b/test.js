var test = require('tape');
var r = require('ramda');

var {fuelForAModule} = require('./impl.js');

test('01b - fuelForAModule calc is ok', function(t) {
  t.plan(3);

  t.equal(fuelForAModule(12), 2);
  t.equal(fuelForAModule(1969), 966);
  t.equal(fuelForAModule(100756), 50346);
});
