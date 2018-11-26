import React, { Component } from 'react';
import './App.css';

import Board from './components/board/board';
import TakenPieces from './components/taken/taken';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <TakenPieces />
      </div>
    );
  }
}

export default App;
