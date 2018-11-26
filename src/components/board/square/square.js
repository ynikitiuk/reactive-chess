import React from 'react';

import classes from './square.module.css';

const square = ({figure, color, id, clicked}) => {
  const url = figure ? `url(${figure.image})` : 'none';
  const classesString = [classes['square'], classes[`square-${color}`]].join(' ');

  return <div
    className={classesString}
    style={{backgroundImage: url}}
    onClick={clicked}
  >{id}</div>
};

export default square;
