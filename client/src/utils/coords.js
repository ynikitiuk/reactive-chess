import { mapCoordsToIndex } from "./utils";

const wrapper = (func) => (...args) => func(...args).filter(onBoardRange).map(mapCoordsToIndex);
const onBoardRange = el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7);

export const coords = {
  row: wrapper(i => [[i, 0], [i, 1], [i, 2], [i, 3], [i, 4], [i, 5], [i, 6], [i, 7]]),
  column: wrapper(j => [[0, j], [1, j], [2, j], [3, j], [4, j], [5, j], [6, j], [7, j]]),
  diagonalX: wrapper(shiftY => [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]]
    .map(el => [el[0] + shiftY, el[1]])),
  diagonalY: wrapper(shiftY => [[0, 7], [1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1], [7, 0]]
    .map(el => [el[0] + shiftY, el[1]])),
  shapeL: wrapper((i, j) =>
    [[i-2, j-1], [i-2, j+1], [i-1, j-2], [i-1, j+2], [i+1, j-2], [i+1, j+2], [i+2, j-1], [i+2, j+1]]),
  around: wrapper((i, j) =>
    [[i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]]),
  forward: wrapper((i, j, direction) => [[i + direction, j], [i + 2 * direction, j]]),
  sides: wrapper((i, j, direction) => [[i + direction, j + 1], [i + direction, j - 1]])
};

