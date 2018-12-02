import { possibleMoves } from './possibleMoves';
import { prepareNewBoard } from './prepareNewBoard';
import { isChecked } from './isChecked';

export const allowedMoves = (state, selected) => {
  return possibleMoves(state.board, selected)
    .filter(move => {
      const updatedBoard = prepareNewBoard(state, {from: selected, to: move});

      const king = updatedBoard.map((square, index) => ({...square, index: index}))
        .filter(square => square.figure && square.figure.player === 
          updatedBoard[move].figure.player && square.figure.name === 'King')[0];

      return !isChecked(updatedBoard, king);
    })
};
