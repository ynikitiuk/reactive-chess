import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Game from './components/game/game';
import LandingPage from './components/landingPage/landingPage';
import { connect } from  'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    props.socket.on('newGame', ({roomId}) => {
      console.log('New game');
      props.playerHandler({
        type: 'SET_PLAYER',
        gameId: roomId,
        player: 'white'
      });
    });

    props.socket.on('joinGame', ({roomId}) => {
      console.log('Join game');
      props.playerHandler({
        type: 'SET_PLAYER',
        gameId: roomId,
        player: 'black'
      });
    });

    props.socket.on('startGame', () => {
      console.log('Start game', props);
      this.startGame();
    });

    props.socket.on('move', (action) => {
      props.moveHandler(action);
    });
  }

  startGame = () => {
    this.props.history.push(`/${this.props.gameId}`)
  };

  render() {
    console.log(this.props);
    return (
      <>
        <Route path="/" exact component={LandingPage} />
        <Route path="/:id" component={Game} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    gameId: state.gameId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    moveHandler: (action) => dispatch(action),
    playerHandler: (action) => dispatch(action)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
