import Piece from './piece';

export default class Pawn extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';
    super(color, url);
  }

  isMoveAllowed() {
    return true;
  }
}
