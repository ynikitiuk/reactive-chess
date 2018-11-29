import { allowedMoves } from '../utils/allowedMoves';
import { initializeBoard } from '../utils/initializeBoard';
import { selectionIsAllowed } from '../utils/selectionIsAllowed';

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
      const selectedPiece = selectionIsAllowed(state, action.id) ? action.id : null;

      return {
        ...state,
        selectedSquare: selectedPiece,
        allowedMoves: allowedMoves(state.board, selectedPiece)
      };
    case 'DESELECT':
      return {
        ...state,
        selectedSquare: null,
        allowedMoves: []
      };
    case 'MOVE':
      // TODO Add promotion mechanism
      // TODO Add castling
      // TODO Add en passant rule
      if (!state.allowedMoves.includes(action.to)) return state;

      state.board[action.from].figure.firstMove = false;
      const player = state.whiteMove ? 'black' : 'white'; // TODO rename

      const updatedBoard = [...state.board];
      updatedBoard[action.from] = {
        ...state.board[action.from],
        figure: null
      };
      updatedBoard[action.to] = {
        ...state.board[action.to],
        figure: state.board[action.from].figure
      };

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
