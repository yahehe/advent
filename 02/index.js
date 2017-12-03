const _ = require('lodash');

const first = input => _.reduce(input, (acc, row) => {
  let max = 0;
  let min = 1000000;
  _.forEach(row, (num) => {
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return acc + (max - min);
}, 0);

const second = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    const reversed = _.reverse(_.sortBy(row));
    for (let j = 0; j < reversed.length; j++) {
      for (let k = j + 1; k < reversed.length; k++) {
        if (reversed[j] % reversed[k] === 0) {
          sum += (reversed[j] / reversed[k]);
        }
      }
    }
  }
  return sum;
};

module.exports = {
  first,
  second,
};
