import Piece from './piece';
import { mapKeyToIndices } from "../../utils/mapIndicesToKeys";

export default class King extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';
    super(color, url, 'King');
  }

  getAllowedMoves(board, id) {
    const [i, j] = mapKeyToIndices(id);
    return [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    .map(el => [el[0] + i, el[1] + j])
    .filter(el => (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7));
  }
}
