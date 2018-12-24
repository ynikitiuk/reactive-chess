import React from 'react';
import classes from "./tab.module.css";

const tab = ({isActive, clicked, children}) => {
  const classesArr = [classes['tab-item']];
  if (isActive) {
    classesArr.push(classes['tab-active'])
  }

  return (
    <div className={classesArr.join(' ')} onClick={clicked}>{children}</div>
  )
};

export default tab;
