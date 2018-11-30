import React, { Component } from 'react';
import { connect } from  'react-redux';

import classes from './board.module.css';
import Square from './square/square';
import { mapIndexToKey } from '../../utils/utils';

class Board extends Component {
  render() {
    return (
      <div className={classes['board-container']}>
        {this.props.board.map((square, index) => {
          return <Square
            key={mapIndexToKey(index)}
            id={index}
            url={square.figure ? `url(${square.figure.image})` : 'none'}
            color={square.color}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
  }
};

export default connect(mapStateToProps)(Board);
