import React, { useState, useContext } from 'react';
import '../../Toolbar/Toolbar.scss';
import Dropdown from '../Dropdown/Dropdown';
import {bubbleSort, selectionSort, insertionSort} from '../../../../containers/sortingVisualizer/SortingVisualizer';

const NavigationItems = () => {



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
      <li className="Active"><a href="#">Home</a></li>
      <Dropdown toggleMenu={toggleElementaryMenu}
        showMenu={DropdownState.elementaryMenu}
        clicked={algoChoiceHandler}
        links={['Bubble Sort', 'Selection Sort', 'Insertion Sort']}>Elementary Sorts</Dropdown>
      <Dropdown toggleMenu={toggleComplexMenu}
        showMenu={DropdownState.complexMenu}
        clicked={algoChoiceHandler}
        links={['Complex Sorts', 'Complex Sorts', 'Complex Sorts']}>Complex Sorts</Dropdown>

      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Signin</a></li>
    </ul>
  );

};

export default NavigationItems;