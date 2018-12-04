export const possibleMoves = (board, selected) => {
  return selected !== null ? board[selected].getMoves(board, selected)
    .filter(id => board[id] ? board[id].player !== board[selected].player : true)
    : [];
};
