import Queen from '../components/pieces/queen';

export const prepareNewBoard = (state, action) => {
  const player = state.whiteMove ? 'white' : 'black';
  const updatedBoard = [...state.board];

  updatedBoard[action.from] = null;

  // Check if pawn should be promoted
  updatedBoard[action.to] = state.board[action.from].name === 'Pawn' && (action.to <= 7 || action.to >= 56) ?
    new Queen(player) : state.board[action.from];

  // Check for castling
  if (state.board[action.from].name === 'King' && action.from - action.to === 2) {
    updatedBoard[action.from - 4] = null;
    updatedBoard[action.from - 1] = state.board[action.from - 4];
  } else if (state.board[action.from].name === 'King' && action.from - action.to === -2) {
    updatedBoard[action.from + 3] = null;
    updatedBoard[action.from + 1] = state.board[action.from + 3];
  }

  return updatedBoard;
};
