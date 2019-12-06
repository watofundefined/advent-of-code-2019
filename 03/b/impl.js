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
    (shortestDistanceSoFar, extendedPoint) => {
      const distance = extendedPoint.totalLengthFromHub;
      return Math.min(shortestDistanceSoFar, distance);
    },
    Infinity,
  );

  return shortestDistance;
}

/**
 * @returns {ExtendedPoint[]} - Points where cable crosess with other cable
 */
function markCable(board, cable, cableId) {
  let point = new Point(0, 0);
  let overlaps = [];
  let cableLengthSoFar = 0;

  cable.split(',').forEach(part => {
    const {overlappingPoints, endPoint} = markLine(
      board,
      point,
      cableId,
      part[0],
      +part.slice(1),
      cableLengthSoFar,
    );

    cableLengthSoFar += +part.slice(1);
    point = endPoint;
    overlaps = [...overlaps, ...overlappingPoints];
  });

  return overlaps;
}

/**
 * @returns {{overlappingPoints: ExtendedPoint[], endPoint: Point}}
 */
function markLine(
  board,
  startingPoint,
  id,
  direction,
  length,
  cableLengthSoFar,
) {
  const overlappingPoints = [];
  let lastPoint = startingPoint;

  for (let i = 1; i <= length; i++) {
    cableLengthSoFar++;

    lastPoint = pointFrom(lastPoint, direction);

    const overlap = markPoint(board, id, lastPoint, cableLengthSoFar);

    if (overlap) overlappingPoints.push(overlap);
  }

  return {overlappingPoints, endPoint: lastPoint};
}

/**
 * @param {object} board
 * @param {string} id
 * @param {Point} point
 * @param {number} cableLengthSoFar
 * @returns {ExtendedPoint|undefined} Returns `ExtendedPoint` if the point
 *   has already marked on the board by another `id`,
 *   returns `undefined` otherwise
 */
function markPoint(board, id, point, cableLengthSoFar) {
  let meta = board[point.toString()];
  if (meta) {
    if (meta.cables.find(c => c === id)) {
      // that cable has already been here, it won't be any shorter this time
      return undefined;
    }

    return {
      ...point,
      totalLengthFromHub: meta.totalLengthFromHub + cableLengthSoFar,
    };
  } else {
    board[point.toString()] = {
      cables: [id],
      totalLengthFromHub: cableLengthSoFar,
    };
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

function ExtendedPoint(x, y, totalLengthFromHub) {
  this.x = x;
  this.y = y;
  this.totalLengthFromHub = totalLengthFromHub;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x}-${this.y}`;
};

exports.closestIntersectionToHub = closestIntersectionToHub;
