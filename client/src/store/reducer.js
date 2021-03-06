import openSocket from "socket.io-client";

import { allowedMoves } from '../utils/allowedMoves';
import { initializeBoard } from '../utils/initializeBoard';
import { prepareNewBoard } from '../utils/prepareNewBoard';
import { isChecked } from '../utils/isChecked';
import { getKing } from '../utils/getKing';

const initialState = {
  gameId: null,
  player: null,
  // socket: openSocket('http://localhost:3001'),
  socket: openSocket('https://reactive-chess.herokuapp.com/'),
  board: initializeBoard(),
  taken: {
    black: [],
    white: []
  },
  whiteMove: true,
  selectedSquare: null,
  checkedSquare: null,
  allowedMoves: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GAME':
      return {
        ...state,
        gameId: action.gameId,
        player: action.player,
      };
    case 'CLEAR_GAME':
      return initialState;
    case 'SELECT':
      return {
        ...state,
        selectedSquare: action.id,
        allowedMoves: allowedMoves(state, action.id)
      };
    case 'DESELECT':
      return {
        ...state,
        selectedSquare: null,
        allowedMoves: []
      };
    case 'MOVE':
      state.board[action.from].firstMove = false;

      const player = state.whiteMove ? 'white' : 'black';
      const updatedBoard = prepareNewBoard(state, action);
      const updatedTaken = state.board[action.to] ?
        {
          ...state.taken,
          [player]: [...state.taken[player], state.board[action.to]]
        } :
        state.taken;

      const opponent = player === 'white' ? 'black' : 'white';
      const king = getKing(state.board, opponent);

      return {
        ...state,
        board: updatedBoard,
        taken: updatedTaken,
        whiteMove: !state.whiteMove,
        selectedSquare: null,
        allowedMoves: [],
        checkedSquare: isChecked(updatedBoard, king) ? king.index : null
      };
    default:
      return state;
  }
};

export default reducer;
