import React from 'react';
import classes from './board.module.css';
import { connect } from  'react-redux';

import Square from './square/square';

const board = ({board, selected, clicked}) => {
  console.log(board);
  const squares = [];
  for (let key in board) {
    squares.push({
      id: key,
      figure: board[key].figure,
      color: board[key].color
    })
  }

  return (
    <div className={classes['board-container']}>
      {squares.map(square =>
        <Square
          key={square.id}
          id={square.id}
          figure={square.figure}
          color={square.color}
          selected={selected === square.id}
          clicked={() => clicked(square.id, selected)}
        />)}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    board: state.board,
    selected: state.selectedSquare
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clicked: (square, selected) => {
      if (selected) {
        dispatch({type: 'MOVE', from: selected, to: square})
      } else {
        dispatch({type: 'SELECT', id: square})
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(board);
