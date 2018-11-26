import Piece from './piece';

export default class Queen extends Piece {
  constructor(color) {
    const url = color === 'white' ?
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg' :
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';
    super(color, url, 'queen');
  }
}
