import React from 'react';
import { connect } from  'react-redux';

import classes from './taken.module.css';
import Square from '../board/square/square';

const takenPieces = ({black, white}) => {
  const blackBlock = black.length ?
    <div className={classes['taken-block']}>{black.map((piece, index) => <Square figure={piece} key={index} />)}</div> :
    null;
  const whiteBlock = white.length ?
    <div className={classes['taken-block']}>{white.map((piece, index) => <Square figure={piece} key={index} />)}</div> :
    null;

  return (
    <>
      <div className={classes['taken-container']}>
        {blackBlock}
        {whiteBlock}
      </div>
    </>
  )
};

const mapStateToProps = state => {
  return {
    black: state.taken.black,
    white: state.taken.white
  }
};

export default connect(mapStateToProps)(takenPieces);
