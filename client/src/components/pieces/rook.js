import Piece from './piece';
import { coords } from '../../utils/coords';
import { selectEmptyRange } from '../../utils/selectEmptyRange';
import { mapIndexToCoords } from '../../utils/utils';

export default class Rook extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';
    super(color, url, 'Rook');
  }

  getMoves(board, id) {
    const [i, j] = mapIndexToCoords(id);
    const row = selectEmptyRange(coords.row(i), board, id);
    const col = selectEmptyRange(coords.column(j), board, id);

    return [...row, ...col];
  }
}
