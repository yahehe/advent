const _ = require('lodash');
const day = require('./index');

const examples = require('./example');
const input = require('./input');

test('first star', () => {
  expect(day.first(input)).toBe(682);
});

test('first star example', () => {
  _.forEach(examples, (example) => {
    expect(day.first(example.input)).toBe(example.answer);
  });
});

test('second star', () => {
  expect(day.second(input)).toBe(1406);
});
