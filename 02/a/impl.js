const OpCode = {
  ADD: 1,
  MULTIPLY: 2,
  END: 99,
};

const OpCodeToDisplayName = {
  [OpCode.ADD]: 'ADD',
  [OpCode.MULTIPLY]: 'MULTIPLY',
  [OpCode.END]: 'END',
};

const Instructions = {
  [OpCode.ADD]: {
    code: OpCode.ADD,
    length: 4,
    fn: (state, pointer) =>
      state[state[pointer + 1]] + state[state[pointer + 2]],
    update: (state, pointer, value) => (state[state[pointer + 3]] = value),
    terminal: false,
  },
  [OpCode.MULTIPLY]: {
    code: OpCode.MULTIPLY,
    length: 4,
    fn: (state, pointer) =>
      state[state[pointer + 1]] * state[state[pointer + 2]],
    update: (state, pointer, value) => (state[state[pointer + 3]] = value),
    terminal: false,
  },
  [OpCode.END]: {
    code: OpCode.END,
    length: 1,
    terminal: true,
  },
};

function computer(program, debugMode = false) {
  if (debugMode) logStart(program);

  let pointer = 0;
  const state = program.slice();

  while (true) {
    let instruction = Instructions[state[pointer]];

    if (instruction.terminal) return state;

    instruction.update(state, pointer, instruction.fn(state, pointer));
    pointer += instruction.length;

    if (debugMode) logInstruction(instruction, state);
  }
}

function init(program, firstArg, secondArg) {
  const result = program.slice();
  result[1] = firstArg;
  result[2] = secondArg;

  return result;
}

function logStart(state) {
  console.log('\n');
  console.log('******booting up');
  console.log(`init state: ${state}`);
}

function logInstruction(instruction, stateAfter) {
  console.group(`instruction ${OpCodeToDisplayName[instruction.code]}`);
  console.log(`newState: ${stateAfter}`);
  console.groupEnd();
}

exports.computer = computer;
exports.init = init;
