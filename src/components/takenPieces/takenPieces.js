import React from 'react';
import { connect } from  'react-redux';

import classes from './takenPieces.module.css';
import Square from '../board/square/square';

const takenPieces = ({player, taken}) => {
  const classesArr = [classes['taken'], classes[`taken-${player}`]];
  const elements = taken[player].length ?
    taken[player].map((piece, index) => <Square figure={piece} key={index} style={{width: '5%'}}/>) :
    null;

  return (
    <>
      <div className={classesArr.join(' ')}>
        {elements}
      </div>
    </>
  )
};

const mapStateToProps = state => {
  return {
    taken: state.taken,
    white: state.taken.white
  }
};

export default connect(mapStateToProps)(takenPieces);
