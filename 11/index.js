const _ = require('lodash');

const calculateDist = move => (Math.abs(move.x) + Math.abs(move.y) + Math.abs(move.z)) / 2;

const calculateMove = (moves) => {
  const origin = { x: 0, y: 0, z: 0 };
  return _.reduce(moves, (acc, move) => {
    let { x, y, z } = acc;
    if (move === 'n') {
      y += 1;
      z -= 1;
    } else if (move === 'ne') {
      x += 1;
      z -= 1;
    } else if (move === 'se') {
      x += 1;
      y -= 1;
    } else if (move === 's') {
      z += 1;
      y -= 1;
    } else if (move === 'sw') {
      z += 1;
      x -= 1;
    } else if (move === 'nw') {
      y += 1;
      x -= 1;
    }
    return { x, y, z };
  }, origin);
};

const first = (input) => {
  const moves = _.split(input, ',');
  const move = calculateMove(moves);
  return calculateDist(move);
};

const calculateMove2 = (moves) => {
  const origin = {
    x: 0, y: 0, z: 0, max: 0,
  };
  return _.reduce(moves, (acc, move) => {
    let {
      x, y, z, max,
    } = acc;
    if (move === 'n') {
      y += 1;
      z -= 1;
    } else if (move === 'ne') {
      x += 1;
      z -= 1;
    } else if (move === 'se') {
      x += 1;
      y -= 1;
    } else if (move === 's') {
      z += 1;
      y -= 1;
    } else if (move === 'sw') {
      z += 1;
      x -= 1;
    } else if (move === 'nw') {
      y += 1;
      x -= 1;
    }
    const dist = calculateDist({ x, y, z });
    if (dist > max) max = dist;
    return {
      x, y, z, max,
    };
  }, origin);
};
const second = (input) => {
  const moves = _.split(input, ',');
  const move = calculateMove2(moves);
  return move.max;
};

module.exports = {
  first,
  second,
};
