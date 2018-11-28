import React, { Component } from 'react';
import classes from './App.module.css';

import Board from './components/board/board';
import Current from './components/currentPlayer/currentPlayer';
import TakenPieces from "./components/takenPieces/takenPieces";

class App extends Component {
  render() {
    return (
      <div className={classes['App']}>
        <div className={classes['field']}>
          <TakenPieces player='white'/>
          <Board />
          <TakenPieces player='black'/>
        </div>
        <Current />
        {/*<History />*/}
      </div>
    );
  }
}

export default App;
