import { mapIndicesToKeys } from './mapIndicesToKeys';

export const allowedMoves = (board, id) => {
  return id ? mapIndicesToKeys(board[id].figure.getAllowedMoves(board, id))
    .filter(key => board[key].player !== board[id].figure.player) : [];
};
