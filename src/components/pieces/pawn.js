import Piece from './piece';
import { mapIndexToCoords } from "../../utils/utils";
import { coords } from '../../utils/coords';

export default class Pawn extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';
    super(color, url, 'Pawn');
  }

  getMoves(board, id) {
    const [i, j] = mapIndexToCoords(id);
    const direction = this.player === 'black' ? 1 : -1;

    const capturing = coords.sides(i, j, direction)
      .filter(el => board[el].figure);

    const [firstSquare, secondSquare] = coords.forward(i, j, direction);
    const movement = board[firstSquare].figure ? [] :
      this.firstMove ? [firstSquare, secondSquare] :
      [firstSquare];

    return [...capturing, ...movement];
  }
}
