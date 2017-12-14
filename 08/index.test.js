const day = require('./index');

const example = require('./example');
const input = require('./input');


test('first star', () => {
  expect(day.first(input)).toBe(4448);
});

test('first star example', () => {
  expect(day.first(example)).toBe(1);
});

test('second star', () => {
  expect(day.second(input)).toBe(6582);
});

test('second star example', () => {
  expect(day.second(example)).toBe(10);
});
