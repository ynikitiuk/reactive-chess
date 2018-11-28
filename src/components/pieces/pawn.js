import Piece from './piece';
import { mapKeyToIndices } from "../../utils/mapIndicesToKeys";

export default class Pawn extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';
    super(color, url, 'Pawn');
  }

  getAllowedMoves(board, id) {
    const [i, j] = mapKeyToIndices(id);
    const direction = this.player === 'black' ? 1 : -1;
    return this.firstMove ?
      [[i + direction, j], [i + 2*direction, j]] :
      [[i + direction, j]];
  }
}
