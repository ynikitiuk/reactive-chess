import Piece from './piece';

export default class Rook extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';
    super(color, url, 'rook');
  }
}
