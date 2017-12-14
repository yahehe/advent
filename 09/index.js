const _ = require('lodash');

const buildGroups = (input) => {
  const groups =
    _.reduce(input, (state, char) => {
      let { inTrash, negations, result } = state;
      if (inTrash) {
        if (char === '!') negations += 1;
        else if (char === '>' && (negations % 2 === 0)) {
          negations = 0;
          inTrash = false;
        } else {
          negations = 0;
        }
      } else if (char === '<') inTrash = true;
      else if (char === '{' || char === '}') result += char;
      return _.assign(state, { inTrash, negations, result });
    }, {
      inTrash: false,
      negations: 0,
      result: '',
    }).result;
  return groups;
};

const calculate = groups => _.reduce(groups, (state, char) => {
  let { sum, depth } = state;
  if (char === '{') {
    depth += 1;
    sum += depth;
  } else if (char === '}') {
    depth -= 1;
  }
  return _.assign(state, { sum, depth });
}, { sum: 0, depth: 0 });

const first = (input) => {
  const groups = buildGroups(input);
  console.log(groups);
  const sum = calculate(groups);
  return sum.sum;
};

const second = input => _.reduce(input, (state, char) => {
  let { inTrash, negations, count } = state;
  if (inTrash) {
    if (char === '!') negations += 1;
    else if (char === '>' && (negations % 2 === 0)) {
      negations = 0;
      inTrash = false;
    } else if (negations % 2 === 0) count += 1;
    else negations = 0;
  } else if (char === '<') inTrash = true;
  return _.assign(state, { inTrash, negations, count });
}, {
  inTrash: false,
  negations: 0,
  count: 0,
}).count;

module.exports = {
  first,
  second,
};
