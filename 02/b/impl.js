const test = require('tape');

const {computer, init} = require('../a/impl.js');
const {program} = require('./input');

const expectedFinalNumber = 19690720;

//  t.deepEqual(computer([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99]);
//  t.deepEqual(computer([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99]);

function calculateInputs(resultValue) {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const initState = input.slice();
      const resultState = computer(init(initState, i, j));

      if (resultState[0] == resultValue) {
        return {noun: i, verb: j};
      }
    }
  }
}
