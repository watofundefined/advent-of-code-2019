const {program, expectedResult} = require('./input');
const {determineInputs} = require('./impl');

const {noun, verb} = determineInputs(expectedResult, program);

console.log(100 * noun + verb);
