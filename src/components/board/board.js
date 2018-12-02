import React, { Component } from 'react';
import { connect } from  'react-redux';

import classes from './board.module.css';
import Square from './square/square';
import { mapIndexToKey } from '../../utils/utils';
import { selectionIsAllowed } from '../../utils/selectionIsAllowed';
import { allowedMoves } from '../../utils/allowedMoves';
import { isChecked } from '../../utils/isChecked';

class Board extends Component {
  componentDidUpdate() {
    // Check if game ended
    // TODO:  move into separate component
    const player = this.props.state.whiteMove ? 'white' : 'black'
    const king = this.props.board.map((square, index) => ({...square, index: index}))
        .filter(square => square.figure && square.figure.player === player
          && square.figure.name === 'King')[0];

    const allAllowedMoves = this.props.board.map((square, index) => ({...square, index: index}))
      .filter(square => square.figure && square.figure.player === player)
      .reduce((moves, square) => {
        return [...moves, ...allowedMoves(this.props.state, square.index)]
      }, []) ;
    console.log(allAllowedMoves);

    const endMessage = allAllowedMoves.length === 0 ? 
      isChecked(this.props.board, king) ? `Checkmate! ${this.props.state.whiteMove ? 'Black' : 'White'} wins!` : 'Stalemate!'
      : null;
    if (endMessage) alert(endMessage);
  }

  render() {
    const {state, board, selected, checked, allowed, clickHandler} = this.props;

    return (
      <div className={classes['board-container']}>
        {board.map((square, index) => {
          const squareState = selected === index ? 'selected' :
            allowed.includes(index) ? 'allowed' :
            checked === index ? 'checked' : null;
          return <Square
            key={mapIndexToKey(index)}
            url={square.figure ? `url(${square.figure.image})` : 'none'}
            color={square.color}
            state={squareState}
            clicked={() => clickHandler(state, index)}
          />
        })}
      </div>)
  }
}


const mapStateToProps = state => {
  return {
    state,
    board: state.board,
    selected: state.selectedSquare,
    allowed: state.allowedMoves,
    checked: state.checkedSquare
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);
