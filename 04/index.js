const _ = require('lodash');

const checkPassPhrase1 = (phrase) => {
  const words = _.split(phrase, ' ');
  const unique = _.uniq(words);
  return words.length === unique.length;
};

const first = (input) => {
  const result = _.reduce(input, (acc, passPhrase) => {
    const increment = checkPassPhrase1(passPhrase) ? 1 : 0;
    return acc + increment;
  }, 0);

  return result;
};

const checkPassPhrase2 = (phrase) => {
  const words =
    _(phrase)
      .split(' ')
      .map(word => _.sortBy(word))
      .map(word => _.join(word, ''))
      .value();
  const unique = _.uniq(words);
  return words.length === unique.length;
};

const second = (input) => {
  const result = _.reduce(input, (acc, passPhrase) => {
    const increment = checkPassPhrase2(passPhrase) ? 1 : 0;
    return acc + increment;
  }, 0);

  return result;
};

module.exports = {
  first,
  second,
};
