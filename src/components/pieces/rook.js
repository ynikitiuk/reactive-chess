import Piece from './piece';
import { mapKeyToIndices } from '../../utils/mapIndicesToKeys';

export default class Rook extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';
    super(color, url, 'Rook');
  }

  getAllowedMoves(board, id) {
    const [i, j] = mapKeyToIndices(id);
    const row = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]]
    .map(el => [el[0] + i, el[1]]);
    const col = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]]
    .map(el => [el[0], el[1] + j]);
    return [...row, ...col];
  }
}
