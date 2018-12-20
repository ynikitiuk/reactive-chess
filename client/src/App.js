import React, { Component } from 'react';

import Game from './components/game/game';
import LandingPage from './components/landingPage/landingPage';
import openSocket from "socket.io-client";

class App extends Component {
  render() {
    return (
      <>
        <LandingPage />
        <Game />
      </>
    );
  }
}

export default App;
