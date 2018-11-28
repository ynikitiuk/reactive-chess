import { mapIndicesToKeys } from './mapIndicesToKeys';

export const allowedMoves = (board, id) => {
  return id ? mapIndicesToKeys(board[id].figure.getAllowedMoves(board, id)) : [];
};
