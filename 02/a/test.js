const test = require('tape');
const {computer, init} = require('./impl.js');

test('02a - \'computer\' is ok', function(t) {
  t.plan(4);

  t.deepEqual(computer([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99]);
  t.deepEqual(computer([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99]);
  t.deepEqual(computer([2, 4, 4, 5, 99, 0]), [2, 4, 4, 5, 99, 9801]);
  t.deepEqual(computer([1, 1, 1, 4, 99, 5, 6, 0, 99]), [
    30,
    1,
    1,
    4,
    2,
    5,
    6,
    0,
    99,
  ]);
});

test('02a - \'init\' is ok', function(t) {
  t.plan(2);

  const program = [1, 0, 0, 0, 99];
  const arg1 = 5;
  const arg2 = 10;
  const expected = [1, 5, 10, 0, 99];

  t.deepEqual(init(program, arg1, arg2), expected);
  t.deepEqual(program, program, "Original program wasn't modified");
});
