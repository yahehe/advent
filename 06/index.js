const _ = require('lodash');

const areDifferent = (seen, banks) => {
  for (let j = 0; j < seen.length; j++) {
    if (seen[j] !== banks[j]) return true;
  }
  return false;
};
const isOld = (seen, banks) => _.some(seen, seenBank => !areDifferent(seenBank, banks));
const first = (input) => {
  const banks = _(input).split(' ').map(s => parseInt(s, 10)).value();
  let count = 0;
  const seen = [];
  const { length } = banks;
  while (!isOld(seen, banks)) {
    seen.push([...banks]);
    count++;
    const max = _.reduce(banks, (acc, num) => (acc > num ? acc : num));
    const i = _.indexOf(banks, max);
    let memory = banks[i];
    banks[i] = 0;
    let j = i;
    while (memory > 0) {
      memory--;
      j = (j + 1) % length;
      banks[j]++;
    }
  }
  return count;
};

const isOld2 = (seen, banks) => {
  let i = -1;
  const result = _.some(seen, (seenBank) => {
    const result = !areDifferent(seenBank, banks);
    i++;
    return result;
  });
  return i;
};

const second = (input) => {
  const banks = _(input).split(' ').map(s => parseInt(s, 10)).value();
  let count = 0;
  const seen = [];
  const { length } = banks;
  while (!isOld(seen, banks)) {
    seen.push([...banks]);
    count++;
    const max = _.reduce(banks, (acc, num) => (acc > num ? acc : num));
    const i = _.indexOf(banks, max);
    let memory = banks[i];
    banks[i] = 0;
    let j = i;
    while (memory > 0) {
      memory--;
      j = (j + 1) % length;
      banks[j]++;
    }
  }

  return count - isOld2(seen, banks);
};

module.exports = {
  first,
  second,
};
