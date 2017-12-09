const _ = require('lodash');

const parseInstruction = (instruction) => {
  const exprs = _.split(instruction, ' ');
  const register = exprs[0];
  const increment = exprs[1];
  const value = parseInt(exprs[2], 10);
  const condRegister = exprs[4];
  const conditional = `${exprs[5]} ${exprs[6]}`;
  return {
    register,
    increment,
    value,
    condRegister,
    conditional,
  };
};

const first = (input) => {
  const instructions =
    _(input)
      .split('\n')
      .map(parseInstruction)
      .value();
  const memory =
    _.reduce(instructions, (acc, instruction) => {
      const conditional = eval(`${acc[instruction.condRegister] || 0} ${instruction.conditional}`);
      let result = {};
      if (conditional) {
        const inc = instruction.increment === 'inc' ? 1 : -1;
        const newValue = (acc[instruction.register] || 0) + (inc * instruction.value);
        result = { [instruction.register]: newValue };
      }
      return _.assign(acc, result);
    }, {});

  const largest = _.max(_.values(memory));
  return largest;
};

const second = (input) => {
  const instructions =
    _(input)
      .split('\n')
      .map(parseInstruction)
      .value();
  let max = 0;
  const memory =
    _.reduce(instructions, (acc, instruction) => {
      const conditional = eval(`${acc[instruction.condRegister] || 0} ${instruction.conditional}`);
      let result = {};
      if (conditional) {
        const inc = instruction.increment === 'inc' ? 1 : -1;
        const newValue = (acc[instruction.register] || 0) + (inc * instruction.value);
        max = max > newValue ? max : newValue;
        result = { [instruction.register]: newValue };
      }
      return _.assign(acc, result);
    }, {});

  return max;
};

module.exports = {
  first,
  second,
};
