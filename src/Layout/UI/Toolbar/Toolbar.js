import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './Toolbar.scss';
import BuildControls from '../../../components/BuildControls/BuildControls';

const toolbar = (props) => (
  <nav className="Navbar">
    <div className="Container">

      <div className="NavbarHeader">
        <button className="NavbarToggler">
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* <a href="/">
          <h4>Sorting <span>Visualizer</span></h4>
        </a> */}
        <BuildControls colNumHandler={props.colNumHandler} />
      </div>
      <div className="NavbarMenu" id="open-navbar1">
        {/* HERE */}
        <NavigationItems currentAlgoHandler={props.currentAlgoHandler} />
      </div>
    </div>
  </nav>
);

export default toolbar;
