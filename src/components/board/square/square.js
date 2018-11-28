import React from 'react';

import classes from './square.module.css';

const square = ({figure, color, id, clicked, selected, allowed}) => {
  const url = figure ? `url(${figure.image})` : 'none';
  const classesArr = [classes['square'], classes[`square-${selected || allowed ? 'selected' : color}`]];

  return <div
    className={classesArr.join(' ')}
    style={{backgroundImage: url}}
    onClick={clicked}
  >{id}, {(8 - id[1])* 8 + id[0].charCodeAt(0) - 97}</div>
};

export default square;
