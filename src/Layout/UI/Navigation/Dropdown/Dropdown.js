import React, { Component } from 'react';
import '../../Toolbar/Toolbar.scss';
import Backdrop from '../../Backdrop/Backdrop';
import Auxi from '../../../../hoc/Auxi';

const dropdown = (props) => {
  let menuClasses = ["Dropdown"];
  let menuLinks = [];

  for (let i = 0; i < props.links.length; i++) {
    menuLinks.push(
      <li key={i}><span onClick={(event) => {}}>{props.links[i]}</span></li>
    );
    menuLinks.push(
      <li key={"seperator" + i} className="Separator"></li>
    );
  }
  menuLinks.pop();

  if (props.showMenu) {
    menuClasses.push("Show");
  }

  return (
    <Auxi>
      <li className="NavbarDropdown">
        <span onClick={props.toggleMenu} className="DropdownToggler">
          {props.children}
        </span>
        <ul className={menuClasses.join(' ')} id="my-dropdown-id">
          {menuLinks}
        </ul>
      </li>
      <Backdrop show={props.showMenu}
        clicked={props.toggleMenu} />
    </Auxi>
  );
}

export default dropdown;