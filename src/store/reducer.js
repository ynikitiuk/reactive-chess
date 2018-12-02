import { allowedMoves } from '../utils/allowedMoves';
import { initializeBoard } from '../utils/initializeBoard';
import { prepareNewBoard } from '../utils/prepareNewBoard';

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
      return {
        ...state,
        selectedSquare: action.id,
        allowedMoves: allowedMoves(state.board, action.id)
      };
    case 'DESELECT':
      return {
        ...state,
        selectedSquare: null,
        allowedMoves: []
      };
    case 'MOVE':
      state.board[action.from].figure.firstMove = false;

      const player = state.whiteMove ? 'white' : 'black';
      const updatedBoard = prepareNewBoard(state, action);
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
