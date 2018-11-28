import Piece from './piece';
import { cropSequence, mapKeyToIndices } from "../../utils/mapIndicesToKeys";

export default class Queen extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';
    super(color, url, 'Queen');
  }

  getAllowedMoves(board, id) {
    const [i, j] = mapKeyToIndices(id);
    const row = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]]
      .map(el => [el[0] + i, el[1]])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
    const col = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]]
      .map(el => [el[0], el[1] + j])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
    const diagonalX = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]]
      .map(el => [el[0] + i - j, el[1]])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
    const diagonalY = [[0, 7], [1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1], [7, 0]]
      .map(el => [el[0] + (i + j - 7), el[1]])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
    return [...cropSequence(row, board, id),
            ...cropSequence(col, board, id),
            ...cropSequence(diagonalX, board, id),
            ...cropSequence(diagonalY, board, id)];
  }
}
