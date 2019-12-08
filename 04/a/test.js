const test = require('tape');
const {isNotDecreasing, hasAtLeastTwoSameNeighbourDigits} = require('./impl');

test("04a - 'isNotDecreasing' works ok", function(t) {
  t.equal(isNotDecreasing(12345), true);
  t.equal(isNotDecreasing(12354), false);
  t.equal(isNotDecreasing(11111), true);
  t.end();
});

test("04a - 'hasAtLeastTwoSameNeighbourDigits' works ok", function(t) {
  t.equal(
    hasAtLeastTwoSameNeighbourDigits(12245),
    true,
    'returns true for 12245',
  );
  t.equal(
    hasAtLeastTwoSameNeighbourDigits(1233354),
    true,
    'returns true for 1233354',
  );
  t.equal(
    hasAtLeastTwoSameNeighbourDigits(112354),
    true,
    'returns true for 112354',
  );
  t.equal(
    hasAtLeastTwoSameNeighbourDigits(123544),
    true,
    'returns true for 123544',
  );
  t.equal(
    hasAtLeastTwoSameNeighbourDigits(123534),
    false,
    'returns false for 123534',
  );
  t.equal(
    hasAtLeastTwoSameNeighbourDigits(12351),
    false,
    'returns false for 12351',
  );
  t.equal(hasAtLeastTwoSameNeighbourDigits(1), false);
  t.end();
});
