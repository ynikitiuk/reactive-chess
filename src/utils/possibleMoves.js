export const possibleMoves = (board, selected) => {
  return selected !== null ? board[selected].figure.getMoves(board, selected)
    .filter(id => board[id].figure ? board[id].figure.player !== board[selected].figure.player : true)
    : [];
};
