import React, { Component } from 'react';
import { connect } from  'react-redux';
import openSocket from "socket.io-client";

import classes from './board.module.css';
import Square from './square/square';
import {mapIndexToCoords, mapIndexToKey} from '../../utils/utils';
import { selectionIsAllowed } from '../../utils/selectionIsAllowed';
import { allowedMoves } from '../../utils/allowedMoves';
import { isChecked } from '../../utils/isChecked';

class Board extends Component {
  componentDidUpdate() {
    // Check if game ended
    // TODO:  move into separate component
    const player = this.props.state.whiteMove ? 'white' : 'black'
    const king = this.props.board.map((figure, index) => ({figure, index}))
        .filter(square => square.figure && square.figure.player === player
          && square.figure.name === 'King')[0];

    const allAllowedMoves = this.props.board.map((figure, index) => ({figure, index}))
      .filter(square => square.figure && square.figure.player === player)
      .reduce((moves, square) => {
        return [...moves, ...allowedMoves(this.props.state, square.index)]
      }, []) ;

    const endMessage = allAllowedMoves.length === 0 ?
      isChecked(this.props.board, king) ? `Checkmate! ${this.props.state.whiteMove ? 'Black' : 'White'} wins!` : 'Stalemate!'
      : null;
    if (endMessage) alert(endMessage);
  }

  render() {
    const {state, board, selected, checked, allowed, clickHandler} = this.props;

    return (
      <div className={classes['board-container']}>
        {board.map((figure, index) => {
          const [i, j] = mapIndexToCoords(index);

          const squareState = selected === index ? 'selected' :
            allowed.includes(index) ? 'allowed' :
            checked === index ? 'checked' : null;
          return <Square
            key={mapIndexToKey(index)}
            url={figure ? `url(${figure.image})` : 'none'}
            color={(i + j) % 2 === 0 ? 'light' : 'dark'}
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
      // const action = state.selectedSquare === null ?
      //   selectionIsAllowed(state, square) ?
      //     {type: 'SELECT', id: square} : null
      //   : state.selectedSquare === square ?
      //     {type: 'DESELECT'} :
      //     state.allowedMoves.includes(square) ?
      //       {type: 'MOVE', from: state.selectedSquare, to: square} : null;
      //
      // if (action) dispatch(action);

      if (state.selectedSquare !== null) {
        if (state.selectedSquare === square) {
          dispatch({type: 'DESELECT'})
        } else {
          if (state.allowedMoves.includes(square)) {
            const socket = openSocket('http://localhost:3001');
            socket.emit('MOVE', {type: 'MOVE', from: state.selectedSquare, to: square});
            // dispatch({type: 'MOVE', from: state.selectedSquare, to: square})
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);
