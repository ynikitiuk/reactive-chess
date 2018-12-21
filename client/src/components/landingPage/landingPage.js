import React, { Component } from 'react';
import { connect } from  'react-redux';

class LandingPage extends Component {

  newGame = () => {
    const name = document.getElementById('name-p1').value;
    // const player = document.getElementById('player').value;
    this.props.socket.emit('createGame', {name});
  };

  joinGame = () => {
    const name = document.getElementById('name-p2').value;
    const gameId = document.getElementById('gameId').value;
    this.props.socket.emit('joinGame', {name, roomId: gameId});
  };

  render () {
    return (
      <div>
        <div>
          <input type="text" id="name-p1" placeholder="Name"/>
          {/*<select id="player">*/}
          {/*<option>White</option>*/}
          {/*<option>Black</option>*/}
          {/*</select>*/}
          <button onClick={this.newGame}>New game</button>
        </div>

        <div>
          <input type="text" name="name" id="name-p2" placeholder="Name"/>
          <input type="text" name="id" id="gameId" placeholder="Game ID"/>
          <button onClick={this.joinGame}>Join game</button>
        </div>

        <p>Game ID: {this.props.gameId}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    gameId: state.gameId
  }
};

export default connect(mapStateToProps)(LandingPage);
