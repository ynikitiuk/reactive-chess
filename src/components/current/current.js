import React from 'react';
import { connect } from 'react-redux';

import classes from './current.module.css';

const current = ({whiteMove}) => {
  console.log(whiteMove);
  const classesArr = [classes['current'], classes[`current-${whiteMove ? 'white' : 'black'}`]];
  return (
    <div>
      Move: <div className={classesArr.join(' ')}></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    whiteMove: state.whiteMove
  }
}

export default connect(mapStateToProps)(current);