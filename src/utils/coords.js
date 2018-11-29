import { mapCoordsToIndex } from "./utils";

export const coords = {
  row: i => [[i, 0], [i, 1], [i, 2], [i, 3], [i, 4], [i, 5], [i, 6], [i, 7]]
    .map(mapCoordsToIndex),
  column: j => [[0, j], [1, j], [2, j], [3, j], [4, j], [5, j], [6, j], [7, j]]
    .map(mapCoordsToIndex),
  diagonalX: shiftY => [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]]
    .map(el => [el[0] + shiftY, el[1]])
    .filter(onBoardRange)
    .map(mapCoordsToIndex),
  diagonalY: shiftY => [[0, 7], [1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1], [7, 0]]
    .map(el => [el[0] + shiftY, el[1]])
    .filter(onBoardRange)
    .map(mapCoordsToIndex),
  shapeL: (i, j) =>
    [[i-2, j-1], [i-2, j+1], [i-1, j-2], [i-1, j+2], [i+1, j-2], [i+1, j+2], [i+2, j-1], [i+2, j+1]]
    .filter(onBoardRange)
    .map(mapCoordsToIndex),
  around: (i, j) =>
    [[i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]]
    .filter(onBoardRange)
    .map(mapCoordsToIndex),
  forward: (i, j, direction) => [[i + direction, j], [i + 2 * direction, j]]
    .filter(onBoardRange)
    .map(mapCoordsToIndex),
  sides: (i, j, direction) => [[i + direction, j + 1], [i + direction, j - 1]]
    .filter(onBoardRange)
    .map(mapCoordsToIndex)
};

const onBoardRange = el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7);
