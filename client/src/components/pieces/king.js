import Piece from './piece';
import { coords } from '../../utils/coords';
import { mapIndexToCoords } from "../../utils/utils";

export default class King extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';
    super(color, url, 'King');
  }

  getMoves(board, id) {
    const [i, j] = mapIndexToCoords(id);
    const movement = coords.around(i, j);
    const castlingRight = this.firstMove &&
      board[id + 3] && board[id + 3].firstMove &&
      !board[id + 1] && !board[id + 2] ? [8 * i + 6] : [];
    const castlingLeft = this.firstMove &&
      board[id - 4] && board[id - 4].firstMove &&
      !board[id - 1] && !board[id - 2] &&
      !board[id - 3] ? [8 * i + 2] : [];

    return [...movement, ...castlingRight, ...castlingLeft];
  }
}
