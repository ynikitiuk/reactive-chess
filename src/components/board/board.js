import React, { Component } from 'react';
import { connect } from  'react-redux';

import classes from './board.module.css';
import Square from './square/square';
import { mapIndexToKey } from '../../utils/utils';

class Board extends Component {
  render() {
    const {board, selected, allowed, clicked} = this.props;

    return (
      <div className={classes['board-container']}>
        {board.map((square, index) => {
          const color = (selected === index || allowed.includes(index)) ? 'selected' : square.color;

          return <Square
            key={mapIndexToKey(index)}
            url={square.figure ? `url(${square.figure.image})` : 'none'}
            color={color}
            clicked={() => clicked(selected, index)}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    selected: state.selectedSquare,
    allowed: state.allowedMoves
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clicked: (selected, square) => {
      selected !== null ?
        selected === square ?
          dispatch({type: 'DESELECT'}) :
          dispatch({type: 'MOVE', from: selected, to: square})
      : dispatch({type: 'SELECT', id: square})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
