const _ = require('lodash');

export function first(input) {
  let sum = 0;
  // this is abuse, I know
  _.reduce(input, (acc, c) => {
    if (acc === c) {
      sum += parseInt(acc, 10);
    }
    return c;
  });

  const bookends = input[0] === input[input.length - 1] ? parseInt(input[0], 10) : 0;

  return sum + bookends;
}

export function second(input) {
  let sum = 0;
  const inc = input.length / 2;

  for (let i = 0; i < input.length; i++) {
    const half = i + inc;
    if (input[i] === input[half % input.length]) {
      sum += parseInt(input[i], 10);
    }
  }
  return sum;
}
