import React from 'react';
import Auxi from '../../hoc/Auxi';

const buildControls = (props) => {

  return (
    <Auxi>
      <input type="range" min="1" max={props.colNum} value=""/>
    </Auxi>
  );
};

export default buildControls; 