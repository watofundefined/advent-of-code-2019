const test = require('tape');
const {hasExactlyTwoSameNeigbourDigits} = require('./impl');

test("04b - 'hasExactlyTwoSameNeigbourDigits' works ok", function(t) {
  t.equal(
    hasExactlyTwoSameNeigbourDigits(12245),
    true,
    'returns true for 12245',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(1233354),
    false,
    'returns false for 1233354',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(112354),
    true,
    'returns true for 112354',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(123544),
    true,
    'returns true for 123544',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(123534),
    false,
    'returns false for 123534',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(1112351),
    false,
    'returns false for 1112351',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(11122351),
    true,
    'returns false for 11122351',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(1235111),
    false,
    'returns false for 1235111',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(1),
    false,
    'returns false for 1',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(11),
    true,
    'returns true for 11',
  );
  t.equal(
    hasExactlyTwoSameNeigbourDigits(111),
    false,
    'returns false for 111',
  );
  t.end();
});
