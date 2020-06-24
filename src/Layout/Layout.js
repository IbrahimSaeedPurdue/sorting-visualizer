import React from 'react';
import Auxi from '../hoc/Auxi';
import Toolbar from '../Layout/UI/Toolbar/Toolbar';

const layout = (props) => (
  <Auxi>
    <Toolbar currentAlgoHandler={props.currentAlgoHandler}
      colNumHandler={props.colNumHandler}
      colNum={props.colNum} />
    <main>
      {props.children}
    </main>
  </Auxi>
);

export default layout;