import React from 'react';
import { connect } from  'react-redux';

import classes from './takenPieces.module.css';

const takenPieces = ({player, taken}) => {
  const classesArr = [classes['taken'], classes[`taken-${player}`]];

  const summed = taken[player].length ?
    taken[player].reduce((sum, figure) => {
      return sum.hasOwnProperty(figure.name) ?
        {...sum, [figure.name]: [figure.image, ++sum[figure.name][1]]} :
        {...sum, [figure.name]: [figure.image, 1]}
    }, {}) : {};

  const elements = Object.values(summed) ? Object.values(summed).map(([url, num], index) =>
    <div key={index}
         className={classes['figure']}
         style={{backgroundImage: `url(${url})`}}>
      {num > 1 ? <div className={classes['number']}>{num}</div> : null}
    </div>) : null;

  return (
    <div className={classesArr.join(' ')}>
      {elements}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    taken: state.taken
  }
};

export default connect(mapStateToProps)(takenPieces);
