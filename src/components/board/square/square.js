import React from 'react';

import classes from './square.module.css';

const square = ({url, color, clicked}) => {
  const classesArr = [classes['square'], classes[`square-${color}`]];

  return <div
    className={classesArr.join(' ')}
    style={{backgroundImage: url}}
    onClick={clicked} />
};

export default square;
