import React, { useState } from 'react';
import '../../Toolbar/Toolbar.scss';
import Dropdown from '../Dropdown/Dropdown';

const NavigationItems = (props) => {

  const [DropdownState, setDropdownState] = useState({
    elementaryMenu: false,
    complexMenu: false,
  });
  const [algoChoiceState, setAlgoChoice] = useState({
    algoChoice: null
  });

  const toggleElementaryMenu = () => {
    if (DropdownState.elementaryMenu) {
      setDropdownState({
        elementaryMenu: false,
        complexMenu: false
      });
    } else {
      setDropdownState({
        elementaryMenu: true,
        complexMenu: false
      });
    }
  };

  const toggleComplexMenu = () => {
    if (DropdownState.complexMenu) {
      setDropdownState({
        complexMenu: false
      });
    } else {
      setDropdownState({
        elementaryMenu: false,
        complexMenu: true
      });
    }
  };

  const algoChoiceHandler = (choice) => {
    if (algoChoiceState.algoChoice) {
      algoChoiceState.algoChoice.classList.remove('Chosen');
    }
    choice.classList.add('Chosen');
    setAlgoChoice({
      algoChoice: choice
    });
  };

  return (
    <ul className="NavbarNav">
      <Dropdown toggleMenu={toggleElementaryMenu}
        currentAlgoHandler={props.currentAlgoHandler}
        showMenu={DropdownState.elementaryMenu}
        clicked={algoChoiceHandler}
        links={['Bubble Sort', 'Selection Sort', 'Insertion Sort']}>Elementary Sorts</Dropdown>
      <Dropdown toggleMenu={toggleComplexMenu}
        currentAlgoHandler={props.currentAlgoHandler}
        showMenu={DropdownState.complexMenu}
        clicked={algoChoiceHandler}
        links={['Merge Sort', 'Coming Soon', 'Coming Soon', 'Coming Soon']}>Complex Sorts</Dropdown>
    </ul>
  );

};

export default NavigationItems;