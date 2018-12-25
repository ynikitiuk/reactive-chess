import React from 'react';
import { connect } from  'react-redux';

import classes from './board.module.css';
import Square from './square/square';
import { mapIndexToCoords, mapIndexToKey } from '../../utils/utils';
import { selectionIsAllowed } from '../../utils/selectionIsAllowed';

const board = ({state, clickHandler}) => {
  return (
    <div className={classes['board-container']}>
      {state.board.map((figure, index) => {
        const [i, j] = mapIndexToCoords(index);
        const squareState = state.selectedSquare === index ? 'selected' :
          state.allowedMoves.includes(index) ? 'allowed' :
            state.checkedSquare === index ? 'checked' : null;

        return <Square
          key={mapIndexToKey(index)}
          url={figure ? `url(${figure.image})` : 'none'}
          color={(i + j) % 2 === 0 ? 'light' : 'dark'}
          state={squareState}
          clicked={() => clickHandler(state, index)}
        />
      })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: (state, square) => {
      if (state.selectedSquare !== null) {
        if (state.selectedSquare === square) {
          dispatch({type: 'DESELECT'})
        } else {
          if (state.allowedMoves.includes(square)) {
            const action = {type: 'MOVE', from: state.selectedSquare, to: square};
            // dispatch(action);
            state.socket.emit('makeMove', {action, roomId: state.gameId});
          }
        }
      } else {
        if (selectionIsAllowed(state, square)) {
          dispatch({type: 'SELECT', id: square})
        }
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(board);
