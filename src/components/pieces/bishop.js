import Piece from './piece';
import { coords } from '../../utils/coords';
import { selectEmptyRange } from '../../utils/selectEmptyRange';
import { mapIndexToCoords } from '../../utils/utils';

export default class Bishop extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';
    super(color, url, 'Bishop');
  }

  getMoves(board, id) {
    const [i, j] = mapIndexToCoords(id);
    const diagonalX = selectEmptyRange(coords.diagonalX(i - j), board, id);
    const diagonalY = selectEmptyRange(coords.diagonalY(i + j - 7), board, id);

    return [...diagonalX, ...diagonalY];
  }
}
