import Piece from './piece';
import { coords } from '../../utils/coords';
import { selectEmptyRange } from "../../utils/selectEmptyRange";
import { mapIndexToCoords } from "../../utils/utils";

export default class Queen extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';
    super(color, url, 'Queen');
  }

  getMoves(board, id) {
    const [i, j] = mapIndexToCoords(id);
    const row = selectEmptyRange(coords.row(i), board, id);
    const col = selectEmptyRange(coords.column(j), board, id);
    const diagonalX = selectEmptyRange(coords.diagonalX(i - j), board, id);
    const diagonalY = selectEmptyRange(coords.diagonalY(i + j - 7), board, id);

    return [...row, ...col, ...diagonalX, ...diagonalY];
  }
}
