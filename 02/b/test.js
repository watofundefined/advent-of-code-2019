const test = require('tape');

const {computer, init} = require('../a/impl.js');

function determineInputs(resultValue, program) {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const initState = program.slice();
      const resultState = computer(init(initState, i, j));

      if (resultState[0] == resultValue) {
        return {noun: i, verb: j};
      }
    }
  }
}

test("02b - 'determineInputs' is ok", function(t) {
  t.deepEqual(determineInputs(2, [1, 123, 234, 0, 99]), {noun: 0, verb: 0});
  t.deepEqual(determineInputs(30, [1, 321, 432, 4, 99, 5, 6, 0, 99]), {
    noun: 0,
    verb: 0,
  });
  t.deepEqual(determineInputs(6, [1, 123, 234, 3, 2, 3, 4, 0, 99]), {
    noun: 0,
    verb: 2,
  });
  t.deepEqual(determineInputs(8, [1, 123, 234, 3, 2, 3, 4, 0, 99]), {
    noun: 0,
    verb: 3,
  });
  t.deepEqual(determineInputs(16, [1, 123, 234, 3, 2, 3, 4, 0, 99]), {
    noun: 2,
    verb: 5,
  });
    t.end();
});
