const test = require('tape');

const Direction = {
  Up: 'U',
  Down: 'D',
  Left: 'L',
  Right: 'R',
};

function closestIntersectionToHub(cable1, cable2) {
  const board = {};
  markCable(board, cable1, '#1');
  const overlappingPoints = markCable(board, cable2, '#2');
  const shortestDistance = overlappingPoints.reduce(
    (shortestDistanceSoFar, point) => {
      const distance = Math.abs(point.x) + Math.abs(point.y);
      return Math.min(shortestDistanceSoFar, distance);
    },
    Infinity,
  );

  return shortestDistance;
}

/**
 * @returns {Point[]} - Points where cable crosess with other cable
 */
function markCable(board, cable, cableId) {
  let point = new Point(0, 0);
  let overlaps = [];

  cable.split(',').forEach(part => {
    const {overlappingPoints, endPoint} = markLine(
      board,
      point,
      cableId,
      part[0],
      part.slice(1),
    );

    point = endPoint;
    overlaps = [...overlaps, ...overlappingPoints];
  });

  return overlaps;
}

/**
 * @returns {{overlappingPoints: Point[], endPoint: Point}}
 */
function markLine(board, startingPoint, id, direction, length) {
  const overlappingPoints = [];
  let lastPoint = startingPoint;

  for (let i = 1; i <= length; i++) {
    lastPoint = pointFrom(lastPoint, direction);

    const overlap = markPoint(board, id, lastPoint);

    if (overlap) overlappingPoints.push(overlap);
  }

  return {overlappingPoints, endPoint: lastPoint};
}

/**
 * @param {object} board
 * @param {string} id
 * @param {Point} point
 * @returns {point|undefined} Returns `point` if it's already marked
 *   on the board by another `id`, returns `undefined` otherwise
 */
function markPoint(board, id, point) {
  let val = board[point.toString()];
  if (val) {
    return val === id ? undefined : point;
  } else {
    board[point.toString()] = id;
    return undefined;
  }
}

/**
 * @param {Point} startingPoint
 * @param {string} direction
 * @returns {Point}
 */
function pointFrom(startingPoint, direction) {
  const sp = startingPoint;
  switch (direction) {
    case Direction.Up:
      return new Point(sp.x, sp.y + 1);
    case Direction.Down:
      return new Point(sp.x, sp.y - 1);
    case Direction.Left:
      return new Point(sp.x - 1, sp.y);
    case Direction.Right:
      return new Point(sp.x + 1, sp.y);
    default:
      throw new Error(`unknown direction '${direction}'`);
  }
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x}-${this.y}`;
};

test("03b - 'closestIntersectionToHub' is ok", function(t) {
  t.equal(closestIntersectionToHub('R8,U5,L5,D3', 'U7,R6,D4,L4'), 6);
  t.equal(
    closestIntersectionToHub(
      'R75,D30,R83,U83,L12,D49,R71,U7,L72',
      'U62,R66,U55,R34,D71,R55,D58,R83',
    ),
    159,
  );
  t.equal(
    closestIntersectionToHub(
      'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
    ),
    135,
  );
  t.end();
});
