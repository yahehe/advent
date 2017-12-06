const day = require('./index');

const example = require('./example');
const input = require('./input');


test('first star', () => {
  expect(day.first(input)).toBe(7864);
});

test('first star example', () => {
  expect(day.first(example)).toBe(5);
});

test('second star', () => {
  expect(day.second(input)).toBe(1695);
});

test('second star example', () => {
  expect(day.second(example)).toBe(4);
});
