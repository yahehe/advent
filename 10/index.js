const _ = require('lodash');

const knot = arrLength =>
  (acc, length) => {
    const { arr } = acc;
    const halfLength = Math.floor(length / 2);
    const start = acc.pos;
    const end = (arrLength + acc.pos + length - 1) % arrLength;
    for (let i = 0; i < halfLength; i++) {
      const actual = (arrLength + start + i) % arrLength;
      const other = (arrLength + end - i) % arrLength;
      const curVal = arr[actual];
      arr[actual] = arr[other];
      arr[other] = curVal;
    }
    const pos = (acc.pos + length + acc.skip) % arrLength;
    return { arr, pos, skip: acc.skip + 1 };
  };


const first = (base, lengths) => {
  const result =
    _(lengths)
      .split(',')
      .map(i => parseInt(i, 10))
      .reduce(knot(base.length), { arr: [...base], pos: 0, skip: 0 });
  return result.arr[0] * result.arr[1];
};

const post = [17, 31, 73, 47, 23];

const second = (base, lengths) => {
  const parsed =
    _(lengths)
      .map(i => i)
      .map(i => i.charCodeAt(0))
      .value();
  const full = [...parsed, ...post];
  const knotFunc = knot(base.length);
  let arr = [...base];
  let pos = 0;
  let skip = 0;
  for (let i = 0; i < 64; i += 1) {
    const result = _.reduce(full, knotFunc, { arr, pos, skip });
    arr = result.arr;
    pos = result.pos;
    skip = result.skip;
  }
  let result = '';
  for (let i = 0; i < 16; i++) {
    const slice = _.slice(arr, i * 16, (i + 1) * 16);
    const temp = _.reduce(slice, (xors, j) => xors ^ j);
    result += temp > 15 ? '' : '0';
    result += temp.toString(16);
  }
  return result;
};

module.exports = {
  first,
  second,
};
