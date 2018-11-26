import React from 'react';

import classes from './square.module.css';

const square = ({figure, color, id, clicked, selected}) => {
  const url = figure ? `url(${figure.image})` : 'none';
  const classesArr = [classes['square']];
  if (color) classesArr.push(classes[`square-${color}`]);
  if (selected) classesArr.push(classes[`square-selected`]);


  return <div
    className={classesArr.join(' ')}
    style={{backgroundImage: url}}
    onClick={clicked}
  >{id}</div>
};

export default square;
