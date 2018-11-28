import { initializeBoard } from '../utils/initializeBoard'
import { selectionIsAllowed } from '../utils/selectionIsAllowed'
import { moveIsAllowed } from '../utils/moveIsAllowed'
import { allowedMoves } from '../utils/allowedMoves'

const initialState = initializeBoard();
console.log(initialState);

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
      if (!moveIsAllowed(state, action.from, action.to)) return state;
      state.board[action.from].figure.firstMove = false;

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
      console.log(updatedBoard);
      return {
        ...state,
        board: updatedBoard,
        selectedSquare: null,
        allowedMoves: [],
        taken: updatedTaken,
        whiteMove: !state.whiteMove
      };
    default:
      return state;
  }
};

export default reducer;
