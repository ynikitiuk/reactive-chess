import Piece from './piece';
import { cropSequence, mapKeyToIndices } from '../../utils/mapIndicesToKeys';

export default class Bishop extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';
    super(color, url, 'Bishop');
  }

  getAllowedMoves(board, id) {
    const [i, j] = mapKeyToIndices(id);
    const diagonalX = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]]
      .map(el => [el[0] + i - j, el[1]])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
    const diagonalY = [[0, 7], [1, 6], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1], [7, 0]]
      .map(el => [el[0] + (i + j - 7), el[1]])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
    return [...cropSequence(diagonalX, board, id), ...cropSequence(diagonalY, board, id)];
  }
}
