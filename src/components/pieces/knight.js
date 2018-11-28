import Piece from './piece';
import { mapKeyToIndices } from '../../utils/mapIndicesToKeys';

export default class Knight extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';
    super(color, url, 'Knight');
  }

  getAllowedMoves(board, id) {
    const [i, j] = mapKeyToIndices(id);
    return [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
      .map(el => [el[0] + i, el[1] + j])
      .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
  }
}
