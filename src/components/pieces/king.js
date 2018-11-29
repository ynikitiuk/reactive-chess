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
    return coords.around(...mapIndexToCoords(id))
  }
}
