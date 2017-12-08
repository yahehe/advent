const day = require('./index');

const example = require('./example');
const input = require('./input');


test.skip('first star', () => {
  expect(day.first(input).name).toBe('azqje');
});

test.skip('first star example', () => {
  expect(day.first(example).name).toBe('tknk');
});

test('second star', () => {
  expect(day.second(input)).toBe(60);
});

test.skip('second star example', () => {
  expect(day.second(example)).toBe(60);
});
