const test = require('tape');

const {computer, init} = require('../a/impl.js');
const {program} = require('./input');

const expectedFinalNumber = 19690720;

function determineInputs(resultValue, program) {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const initState = program.slice();
      const resultState = computer(init(initState, noun, verb));

      if (resultState[0] == resultValue) {
        return {noun, verb};
      }
    }
  }
}

exports.determineInputs = determineInputs;
