import React, { useEffect } from 'react';
import './BuildControls.scss';
import { useRef } from 'react';
import Button from '../Button/Button';

const BuildControls = (props) => {
  const colNumDisplay = useRef();

  useEffect(() => {
    colNumDisplay.current.focus();
  }, []);

  return (
    <div className="BuildControls">
      <div>
        <center>
          <Button clicked={props.resetBestCase}>
            Best Case
        </Button>
          <Button clicked={props.resetWorstCase}>
            Worst Case
        </Button>
          <Button clicked={props.resetArray}>
            Random Array
        </Button>
          <Button clicked={() => { props.runCurrentAlgo() }}>
            Start
        </Button>
        </center>
      </div>

      <div className="slider">
        <div className="range-slider">
          <span>No. of Columns: </span>
          <input className="range-slider__range"
            onChange={(event) => {
              props.colNumHandler(event.target.value);
            }}
            type="range" ref={colNumDisplay}
            value={props.colNum} step="5" min="0" max={Math.floor(window.innerWidth / 4.3)} />
          <span className="range-slider__value">{props.colNum}</span>
        </div>
      </div>
    </div>
  );
};

export default BuildControls; 