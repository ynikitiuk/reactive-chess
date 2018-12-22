import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Game from './components/game/game';
import LandingPage from './components/landingPage/landingPage';
import { connect } from  'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    props.socket.on('gameCreated', ({roomId}) => {
      console.log('New game');
      props.playerHandler({
        type: 'SET_PLAYER',
        gameId: roomId,
        player: 'white'
      });
    });

    props.socket.on('gameJoined', ({roomId}) => {
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

    props.socket.on('endGame', () => {
      console.log('End game', props);
      this.endGame();
    });

    props.socket.on('moveMade', (action) => {
      props.moveHandler(action);
    });
  }

  startGame = () => {
    this.props.history.push(`/${this.props.gameId}`)
  };

  endGame = () => {
    this.props.history.push('/')
  };

  render() {
    console.log(this.props);
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
