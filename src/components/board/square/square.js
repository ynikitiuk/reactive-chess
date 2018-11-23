import React from 'react';

import classes from './square.module.css';

const square = ({figure, color, id}) => {
  const bg = figure ? `url(${figure.backgroundUrl})` : 'none';
  const classesString = [classes['square'], classes[`square-${color}`]].join(' ');

  return <div className={classesString} style={{backgroundImage: bg}}>{id}</div>
};

export default square;
