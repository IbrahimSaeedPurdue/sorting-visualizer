import React, { useEffect } from 'react';
import Auxi from '../../hoc/Auxi';
import './BuildControls.scss';
import { useRef } from 'react';
const BuildControls = (props) => {
  const colNumDisplay = useRef();
  
  useEffect(()=>{
    colNumDisplay.current.focus();
  }, []);

  return (
    <Auxi>
      <span>No. of Columns: </span>
      <div className="range-slider">
        <input className="range-slider__range"
          onChange={(event) => { 
            props.colNumHandler(event.target.value);
          }}
          type="range" ref={colNumDisplay}
          value={props.colNum} step="5" min="0" max={Math.floor(window.innerWidth / 4.3)} />
        <span className="range-slider__value">{props.colNum}</span>
      </div>
    </Auxi>
  );
};

export default BuildControls; 