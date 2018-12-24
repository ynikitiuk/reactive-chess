import React, { Component } from 'react';
import { connect } from  'react-redux';

import classes from './landingPage.module.css';
import Tab from './tab/tab';

class LandingPage extends Component {

  state = {
    selectedTab: 'new'
  };

  componentDidUpdate() {
    const idInput = document.getElementById('idInput');
    if (idInput) idInput.select();
  }

  newGame = () => {
    const name = document.getElementById('name').value;
    this.props.socket.emit('createGame', {name});
  };

  joinGame = () => {
    const name = document.getElementById('name').value;
    const gameId = document.getElementById('gameId').value;
    this.props.socket.emit('joinGame', {name, roomId: gameId});
  };

  selectTab(name) {
    this.setState({
      selectedTab: name
    });
  }

  copyId() {
    const idInput = document.getElementById('idInput');
    idInput.select();
    document.execCommand('copy');
  }

  render () {
    const tabContent = <>
      <label>Enter your name:</label>
      <input type="text" id="name" placeholder="Name"/>
      {this.state.selectedTab === 'new' ?
        <button onClick={this.newGame}>Create game</button>
      : <>
          <label>Enter game ID:</label>
          <input type="text" name="id" id="gameId" placeholder="Game ID"/>
          <button onClick={this.joinGame}>Join game</button>
        </>
      }
    </>;

    const landingPage =
      <>
        <Tab clicked={() => this.selectTab('new')} isActive={this.state.selectedTab === 'new'}>New game</Tab>
        <Tab clicked={() => this.selectTab('join')} isActive={this.state.selectedTab === 'join'}>Join game</Tab>
        <div className={classes['tab-content']}>{tabContent}</div>
      </>;

    return <div className={classes['container']}>
      {this.props.gameId ?
        <div className={classes['waiting-container']}>
          <p>Waiting for opponent...</p>

          <p>Game ID: <input id='idInput' readOnly value={this.props.gameId} /><i onClick={this.copyId} className="fas fa-copy" /></p>
          <p>Share this ID with your friend, so they can join.</p>

        </div>
        : landingPage}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    gameId: state.gameId
  }
};

export default connect(mapStateToProps)(LandingPage);
