import React from 'react';
import { connect } from 'react-redux';

import classes from './currentPlayer.module.css';

const currentPlayer = ({player}) => {
  const classesArr = [classes['current-square'], classes[`current-${player}`]];

  return (
    <div className={classes['current-container']}>
      Move: <div className={classesArr.join(' ')} />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    player: state.whiteMove ? 'white' : 'black'
  }
};

export default connect(mapStateToProps)(currentPlayer);
