const day = require('./index');

const example = require('./example');
const input = require('./input');

const generateArray = (max) => {
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr[i] = i;
  }
  return arr;
};

const exampleBase = generateArray(5);
const inputBase = generateArray(256);

test.skip('first star', () => {
  expect(day.first(inputBase, input)).toBe(37230);
});

test.skip('first star example', () => {
  expect(day.first(exampleBase, example)).toBe(12);
});

test.skip('second star', () => {
  expect(day.second(inputBase, input)).toBe('70b856a24d586194331398c7fcfa0aaf');
});


describe.skip('second star examples', () => {
  test('1', () => {
    expect(day.second(inputBase, '')).toBe('a2582a3a0e66e6e86e3812dcb672a272');
  });
  test('2', () => {
    expect(day.second(inputBase, 'AoC 2017')).toBe('33efeb34ea91902bb2f59c9920caa6cd');
  });
  test('3', () => {
    expect(day.second(inputBase, '1,2,3')).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
  });
  test('4', () => {
    expect(day.second(inputBase, '1,2,4')).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
  });
});
