import React, { Component } from 'react';
import { connect } from  'react-redux';
import openSocket from "socket.io-client";

import classes from './game.module.css';
import Board from '../board/board';
import TakenPieces from "../takenPieces/takenPieces";
import CurrentPlayer from '../currentPlayer/currentPlayer';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    // this.socket = openSocket('http://localhost:3001');
    // this.socket = openSocket('https://reactive-chess.herokuapp.com/');

    props.socket.on('newGame', ({roomId}) => {
      console.log('New game');
      this.setState({
        gameId: roomId,
        player: 'white'
      });
    });

    props.socket.on('joinGame', ({roomId}) => {
      console.log('Join game');
      this.setState({
        gameId: roomId,
        player: 'black'
      });
    });

    props.socket.on('startGame', () => {
      console.log('Start game');

    });

    props.socket.on('move', (action) => {
      props.moveHandler(action);
    });
  }

  render () {
    return (
      <div className={classes['game']}>
        <div className={classes['field']}>
          <TakenPieces player='black'/>
          <Board />
          <TakenPieces player='white'/>
        </div>
        <CurrentPlayer />
        {/*<History />*/}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket
  }
};

const mapDispatchToProps = dispatch => {
  return {
    moveHandler: (action) => dispatch(action)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
