import React from 'react';
import { connect } from  'react-redux';

import classes from './takenPieces.module.css';

const takenPieces = ({player, taken}) => {
  const classesArr = [classes['taken'], classes[`taken-${player}`]];
  const elements = taken[player].length ?
    taken[player].map((figure, index) =>
      <div key={index}
           className={classes['figure']}
           style={{backgroundImage: `url(${figure.image})`}}/>) :
    null;

  return (
    <div className={classesArr.join(' ')}>
      {elements}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    taken: state.taken,
    white: state.taken.white
  }
};

export default connect(mapStateToProps)(takenPieces);
