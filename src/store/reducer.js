import { allowedMoves } from '../utils/allowedMoves';
import { initializeBoard } from '../utils/initializeBoard';
import { selectionIsAllowed } from '../utils/selectionIsAllowed';
import Queen from '../components/pieces/queen';

const initialState = {
  board: initializeBoard(),
  taken: {
    black: [],
    white: []
  },
  whiteMove: true,
  selectedSquare: null,
  allowedMoves: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT':
      return selectionIsAllowed(state, action.id) ? {
        ...state,
        selectedSquare: action.id,
        allowedMoves: allowedMoves(state.board, action.id)
      } : state;
    case 'DESELECT':
      return {
        ...state,
        selectedSquare: null,
        allowedMoves: []
      };
    case 'MOVE':
      // TODO Add en passant rule
      if (!state.allowedMoves.includes(action.to)) return state;

      state.board[action.from].figure.firstMove = false;
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

      const updatedTaken = state.board[action.to].figure ?
        {
          ...state.taken,
          [player]: [...state.taken[player], state.board[action.to].figure]
        } :
        state.taken;

      return {
        ...state,
        board: updatedBoard,
        taken: updatedTaken,
        whiteMove: !state.whiteMove,
        selectedSquare: null,
        allowedMoves: []
      };
    default:
      return state;
  }
};

export default reducer;
