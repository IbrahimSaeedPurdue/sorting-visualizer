import React from 'react';
import classes from './ColsList.module.css';
import Col from './Col/Col';

const colsList = (props) => {
  let cols = [];
  for (let i = 0; i < props.cols.length; i++) {
    cols.push(
      <Col
        height={props.cols[i]}
        key={i} />
    );
  }
  
  return (
    <div className={classes.ColsList} >
      {cols}
    </div>
  );
}


export default colsList;


