const {computer, init} = require('./impl.js');
const { program, firstArg, secondArg } = require('./input');

console.log(computer(init(program, firstArg, secondArg)));
