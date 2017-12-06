const _ = require('lodash');

const first = (input) => {
  const instructions = [...input];
  let i = 0;
  let count = 0;
  while (i < instructions.length) {
    // console.log(instructions);
    const instruction = instructions[i];
    instructions[i] = instruction + 1;
    i += instruction;
    count += 1;
  }

  return count;
};

const second = (input) => {
  const instructions = [...input];
  let i = 0;
  let count = 0;
  while (i >= 0 && i < instructions.length) {
    count += 1;
    const instruction = instructions[i];
    if (instruction >= 3) {
      instructions[i] = instruction - 1;
    } else {
      instructions[i] = instruction + 1;
    }
    i += instruction;
  }

  return count;
};

module.exports = {
  first,
  second,
};
