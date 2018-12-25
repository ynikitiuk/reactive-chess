import React from 'react';

import classes from './game.module.css';
import Board from '../board/board';
import TakenPieces from "../takenPieces/takenPieces";
import CurrentPlayer from '../currentPlayer/currentPlayer';

const game = () => {
  window.onbeforeunload = () => {
    return window.confirm('Do you really want to leave? Game will be lost');
  };
  return (
    <div className={classes['game']}>
      <div className={classes['field']}>
        <TakenPieces player='black'/>
        <Board />
        <TakenPieces player='white'/>
      </div>
      <CurrentPlayer />
    </div>
  )
};

export default game;
