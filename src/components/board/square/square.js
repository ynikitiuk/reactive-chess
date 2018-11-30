import React from 'react';
import { connect } from  'react-redux';

import classes from './square.module.css';

const square = ({url, color, clicked, selected, id, allowed}) => {
  const classesArr = [classes['square'], classes[`square-${color}`]];
  if (selected === id) classesArr.push(classes['square-selected']);

  return <div
    className={classesArr.join(' ')}
    style={{backgroundImage: url}}
    onClick={() => clicked(selected, id)}>
    {allowed.includes(id) ? '⬤' : null}
  </div>
};

const mapStateToProps = state => {
  return {
    selected: state.selectedSquare,
    allowed: state.allowedMoves
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clicked: (selected, square) => {
      selected !== null ?
        selected === square ?
          dispatch({type: 'DESELECT'}) :
          dispatch({type: 'MOVE', from: selected, to: square})
        : dispatch({type: 'SELECT', id: square})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(square);
