import React, { Component } from 'react';

import classes from './game.module.css';
import Board from '../board/board';
import TakenPieces from "../takenPieces/takenPieces";
import CurrentPlayer from '../currentPlayer/currentPlayer';

class Game extends Component {
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

export default Game;
