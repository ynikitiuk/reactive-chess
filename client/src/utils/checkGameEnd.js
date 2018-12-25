import { allowedMoves } from './allowedMoves';
import { isChecked } from './isChecked';
import { getKing } from './getKing';

export const checkGameEnd = (state) => {
  const player = state.whiteMove ? 'white' : 'black';
  const king = getKing(state.board, player);

  const allAllowedMoves = state.board.map((figure, index) => ({figure, index}))
    .filter(square => square.figure && square.figure.player === player)
    .reduce((moves, square) => {
      return [...moves, ...allowedMoves(state, square.index)]
  }, []) ;

  const endMessage = allAllowedMoves.length === 0 ?
    isChecked(state.board, king) ? `Checkmate! ${state.whiteMove ? 'Black' : 'White'} wins!` : 'Stalemate!'
    : null;
  if (endMessage) alert(endMessage);
};
