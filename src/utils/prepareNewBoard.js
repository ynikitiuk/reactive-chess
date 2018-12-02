import Queen from '../components/pieces/queen';

export const prepareNewBoard = (state, action) => {
  const player = state.whiteMove ? 'white' : 'black';
  const updatedBoard = [...state.board];

  updatedBoard[action.from] = {
    ...state.board[action.from],
    figure: null
  };

  // Check if pawn should be promoted
  const figure = state.board[action.from].figure.name === 'Pawn' && (action.to <= 7 || action.to >= 56) ?
    new Queen(player) : state.board[action.from].figure

  updatedBoard[action.to] = {
    ...state.board[action.to],
    figure: figure
  };

  // Check for castling
  if (state.board[action.from].figure.name === 'King' && action.from - action.to === 2) {
    updatedBoard[action.from - 4] = {
      ...state.board[action.from - 4],
      figure: null
    };
    updatedBoard[action.from - 1] = {
      ...state.board[action.from - 1],
      figure: state.board[action.from - 4].figure
    };
  } else if (state.board[action.from].figure.name === 'King' && action.from - action.to === -2) {
    updatedBoard[action.from + 3] = {
      ...state.board[action.from + 3],
      figure: null
    };
    updatedBoard[action.from + 1] = {
      ...state.board[action.from + 1],
      figure: state.board[action.from + 3].figure
    };
  }

  return updatedBoard;
}
