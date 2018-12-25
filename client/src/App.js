import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Game from './components/game/game';
import LandingPage from './components/landingPage/landingPage';
import { connect } from  'react-redux';
import { checkGameEnd } from "./utils/checkGameEnd";

class App extends Component {
  constructor(props) {
    super(props);

    props.socket.on('gameCreated', ({roomId}) => {
      props.setGame(roomId, 'white');
    });

    props.socket.on('gameJoined', ({roomId}) => {
      props.setGame(roomId, 'black');
    });

    props.socket.on('startGame', () => {
      this.startGame();
    });

    props.socket.on('endGame', () => {
      this.endGame();
    });

    props.socket.on('moveMade', (action) => {
      this.handleMove(action);
    });
  }

  startGame = () => {
    this.props.history.push(`/${this.props.gameId}`)
  };

  endGame = () => {
    alert('Opponent has left the game');
    this.props.clearGame();
  };

  handleMove(action) {
    this.props.moveHandler(action);
    checkGameEnd(this.props.state);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {this.props.gameId ? <Route path={`/${this.props.gameId}`} component={Game} /> : null}
        <Redirect to="/" />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    socket: state.socket,
    gameId: state.gameId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    moveHandler: (action) => dispatch(action),
    setGame: (roomId, player) => dispatch({
      type: 'SET_GAME',
      gameId: roomId,
      player: player
    }),
    clearGame: () => dispatch({
      type: 'CLEAR_GAME'
    })
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
