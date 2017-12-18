const day = require('./index');

const example = require('./example');
const example2 = require('./example2');
const input = require('./input');


test.skip('first star', () => {
  expect(day.first(input)).toBe(14212);
});

test.skip('first star example', () => {
  expect(day.first(example)).toBe(42);
});

test.skip('second star', () => {
  expect(day.second(input)).toBe(6569);
});

test.skip('second star example', () => {
  expect(day.second(example2)).toBe(32);
});
