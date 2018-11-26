import Piece from './piece';

export default class Bishop extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';
    super(color, url, 'bishop');
  }
}
