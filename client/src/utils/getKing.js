export const getKing = (board, player) => {
  return board.map((figure, index) => ({figure, index}))
  .filter(square => square.figure &&
    square.figure.player === player &&
    square.figure.name === 'King'
  )[0];
};
