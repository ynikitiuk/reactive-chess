import Piece from './piece';
import { coords } from '../../utils/coords';
import { mapIndexToCoords } from '../../utils/utils';

export default class Knight extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';
    super(color, url, 'Knight');
  }

  getMoves(board, id) {
    return coords.shapeL(...mapIndexToCoords(id))
  }
}
