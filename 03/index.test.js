const _ = require('lodash');
const day = require('./index');

const coord = (x, y) => ({ x, y });
const north = coord(0, 1);
const south = coord(0, -1);
const west = coord(-1, 0);
const east = coord(1, 0);
const changeDirection = (current) => {
  if (current === north) return west;
  if (current === west) return south;
  if (current === south) return east;
  if (current === east) return north;
};

test('first star', () => {
  const seed = 361527;
  const size = 602;
  const arr = _.map(Array(size), () => Array(size));
  let direction = north;
  let x = size / 2;
  let y = size / 2;
  let c = 1;
  let finalX;
  let finalY;

  const iterate = (dist) => {
    for (let j = 0; j < dist; j++) {
      arr[x][y] = c;
      if (c === seed) {
        finalX = x;
        finalY = y;
      }
      x += direction.x;
      y += direction.y;
      c++;
    }
    direction = changeDirection(direction);
  };
  for (let i = 1; i < 20, c <= seed; i++) {
    iterate(i);
    iterate(i);
  }
});

const sumNeighbours = (arr, x, y) => {
  let sum = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === j === 0) continue;
      sum += arr[x + i][y + j] || 0;
    }
  }
  return sum;
};

test('second star', () => {
  const seed = 361527;
  const size = 602;
  const arr = _.map(Array(size), () => Array(size));
  let direction = north;
  let x = size / 2;
  let y = size / 2;
  arr[x][y] = 1;

  const iterate = (dist) => {
    for (let j = 0; j < dist; j++) {
      const nearby = sumNeighbours(arr, x, y);
      console.log(nearby);
      if (nearby > seed) {
        console.log(nearby);
        break;
      }
      arr[x][y] = nearby;
      x += direction.x;
      y += direction.y;
    }
    direction = changeDirection(direction);
  };
  for (let i = 1; i < 20; i++) {
    iterate(i);
    iterate(i);
  }
});
