import { possibleMoves } from './possibleMoves';
import { prepareNewBoard } from './prepareNewBoard';
import { isChecked } from './isChecked';
import { getKing } from './getKing';

export const allowedMoves = (state, selected) => {
  return possibleMoves(state.board, selected)
    .filter(move => {
      const updatedBoard = prepareNewBoard(state, {from: selected, to: move});
      const king = getKing(updatedBoard, updatedBoard[move].player);

      return !isChecked(updatedBoard, king);
    })
};
