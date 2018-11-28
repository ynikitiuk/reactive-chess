export default class Piece {
  constructor(color, url, name) {
    this.player = color;
    this.image = url;
    this.name = name;
    this.firstMove = true;
  }
}
