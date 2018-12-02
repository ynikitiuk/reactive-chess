import React from 'react';
import { connect } from  'react-redux';

import classes from './board.module.css';
import Square from './square/square';
import { mapIndexToKey } from '../../utils/utils';
import { selectionIsAllowed } from '../../utils/selectionIsAllowed';

const board = ({state, board, selected, allowed, clickHandler}) => {
  return (
    <div className={classes['board-container']}>
      {board.map((square, index) => {
        const squareState = selected === index ? 'selected' :
          allowed.includes(index) ? 'allowed' :
          null;
        return <Square
          key={mapIndexToKey(index)}
          url={square.figure ? `url(${square.figure.image})` : 'none'}
          color={square.color}
          state={squareState}
          clicked={() => clickHandler(state, index)}
        />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state,
    board: state.board,
    selected: state.selectedSquare,
    allowed: state.allowedMoves
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: (state, square) => {
      const action = state.selectedSquare === null ? 
        selectionIsAllowed(state, square) ? 
          {type: 'SELECT', id: square} : null
        : state.selectedSquare === square ? 
          {type: 'DESELECT'} :
          state.allowedMoves.includes(square) ? 
            {type: 'MOVE', from: state.selectedSquare, to: square} : null

      if (action) dispatch(action);

      // if (state.selectedSquare !== null) {
      //   if (state.selectedSquare === square) {
      //     dispatch({type: 'DESELECT'})
      //   } else {
      //     if (state.allowedMoves.includes(square)) {
      //       dispatch({type: 'MOVE', from: state.selectedSquare, to: square})
      //     }
      //   }
      // } else {
      //   if (selectionIsAllowed(state, square)) {
      //     dispatch({type: 'SELECT', id: square})
      //   }
      // }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(board);
