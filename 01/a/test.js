var test = require('tape');

var { fuelForAModule } = require('./impl.js')

test('01a - fuelForAModule calc is ok', function(t) {
  t.plan(4);

  t.equal(fuelForAModule(12), 2);
  t.equal(fuelForAModule(14), 2);
  t.equal(fuelForAModule(1969), 654);
  t.equal(fuelForAModule(100756), 33583);
});

