const OpCode = {
  ADD: 1,
  MULTIPLY: 2,
  END: 99,
};

function computer(program) {
  const incrementor = 4;
  let pointer = 0;
  const state = program.slice();

  while (true) {
    switch (state[pointer]) {
      case OpCode.ADD:
        state[state[pointer + 3]] =
          state[state[pointer + 1]] + state[state[pointer + 2]];
        pointer += incrementor;
        break;
      case OpCode.MULTIPLY:
        state[state[pointer + 3]] =
          state[state[pointer + 1]] * state[state[pointer + 2]];
        pointer += incrementor;
        break;
      case OpCode.END:
        return state;
      default:
        throw new Error('unknown command: ' + state[pointer]);
    }
  }
}

function restore(numbers) {
  const result = numbers.slice();
  result[1] = 12;
  result[2] = 2;

  return result;
}

exports.computer = computer;
exports.restore = restore;
