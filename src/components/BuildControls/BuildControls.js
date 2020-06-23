import React from 'react';
import Auxi from '../../hoc/Auxi';
import './BuildControls.scss';
import { useRef } from 'react';
const BuildControls = (props) => {
  const colNumDisplay = useRef();
  
  return (
    <Auxi>
      <div className="range-slider">
        <input className="range-slider__range"
          onChange={(event) => { 
            props.colNumHandler(event.target.value);
            colNumDisplay.current.innerText = event.target.value;
          }}
          type="range" defaultValue="0" step="5" min="0" max={Math.floor(window.innerWidth / 4.3)} />
        <span className="range-slider__value" ref={colNumDisplay}>0</span>
      </div>
    </Auxi>
  );
};

export default BuildControls; 