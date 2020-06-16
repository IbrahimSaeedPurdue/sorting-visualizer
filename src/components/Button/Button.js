import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
  <div className={classes.Button}>
    <div className={classes.Link}>{props.children}</div>
    <div className={classes.BotBorder} />
  </div>

);

export default button;