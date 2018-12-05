import React, { Component } from 'react';

import classes from './App.module.css';
import Board from './components/board/board';
import TakenPieces from "./components/takenPieces/takenPieces";
import CurrentPlayer from './components/currentPlayer/currentPlayer';

class App extends Component {
  render() {
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
    );
  }
}

export default App;
