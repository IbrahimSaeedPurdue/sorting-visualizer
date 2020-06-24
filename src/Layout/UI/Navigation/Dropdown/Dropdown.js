import React from 'react';
import '../../Toolbar/Toolbar.scss';
import Backdrop from '../../Backdrop/Backdrop';
import Auxi from '../../../../hoc/Auxi';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dropdown = (props) => {
  let menuClasses = ["Dropdown"];
  let menuLinks = [];

  for (let i = 0; i < props.links.length; i++) {
    menuLinks.push(
      <li key={i}>
        <span onClick={(event) => {
          props.currentAlgoHandler(props.links[i]);
          props.clicked(event.target);
        }}>{props.links[i]}</span>
      </li>
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
          {props.children} <FontAwesomeIcon icon={faAngleDown} />
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