import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
  let backdrop = null;
  if (props.show) {
    backdrop = <div className={classes.Backdrop} onClick={props.clicked}/>;
  }
  return backdrop;
}

export default backdrop;