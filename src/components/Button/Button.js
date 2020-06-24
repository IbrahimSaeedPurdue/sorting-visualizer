import React from 'react';
import './Button.scss';

const button = (props) => (
  <div className="container">
    <div className="button" onClick={props.clicked}>
      <div className="icon">
        <p>{props.children}</p>
      </div>
    </div>
  </div>
);

export default button;