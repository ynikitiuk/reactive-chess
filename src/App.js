import React, { Component } from 'react';
import './App.css';

import Board from './components/board/board';
import TakenPieces from './components/taken/taken';
import Current from './components/current/current';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Current />
        <TakenPieces />
      </div>
    );
  }
}

export default App;
