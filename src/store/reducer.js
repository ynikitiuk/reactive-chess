import { initializeBoard } from '../utils/initializeBoard'

const initialState = initializeBoard();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK':
      const selectedPiece = state.board[action.id].figure ? action.id : null;
      return {
        ...state,
        selectedSquare: selectedPiece
      };
    case 'MOVE':
      const updatedSquareFrom = {
        ...state.board[action.from],
        figure: null,
        player: null
      };
      const updatedSquareTo = {
        ...state.board[action.to],
        figure: state.board[action.from].figure,
        player: state.board[action.from].player
      };
      const updatedBoard = {
        ...state.board,
        [action.from]: updatedSquareFrom,
        [action.to]: updatedSquareTo
      };
      const updatedTaken = state.board[action.to].figure ?
        {
          ...state.taken,
          [state.board[action.to].player]: [...state.taken[state.board[action.to].player], state.board[action.to].figure]
        } :
        state.taken;
      return {
        ...state,
        board: updatedBoard,
        selectedSquare: null,
        taken: updatedTaken
      };
    default:
      return state;
  }
};

export default reducer;
