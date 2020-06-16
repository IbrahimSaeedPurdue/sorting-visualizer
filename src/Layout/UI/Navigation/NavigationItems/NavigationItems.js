import React from 'react';
import '../../Toolbar/Toolbar.scss';
import Dropdown from '../Dropdown/Dropdown';

const navigationItems = () => {
  return (
    <ul className="NavbarNav">
      <li className="Active"><a href="#">Home</a></li>
      <Dropdown
        menuLinks={["Bubble Sort", "Selection Sort", "Insertion Sort"]}>Elementary Sorts</Dropdown>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Signin</a></li>
    </ul>
  );

};

export default navigationItems;