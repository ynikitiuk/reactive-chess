import React from 'react';

import classes from './square.module.css';

const square = ({url, color, state, clicked}) => {
  const classesArr = [classes['square'], classes[`square-${color}`]];
  if (state) classesArr.push(classes[`square-${state}`]);
    
  return <div
    className={classesArr.join(' ')}
    style={{backgroundImage: url}}
    onClick={clicked} />
};

export default square;
