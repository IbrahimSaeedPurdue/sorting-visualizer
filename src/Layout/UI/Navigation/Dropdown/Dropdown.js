import React, { Component } from 'react';
import '../../Toolbar/Toolbar.scss';
import Backdrop from '../../Backdrop/Backdrop';
import Auxi from '../../../../hoc/Auxi';

class Dropdown extends Component {
  state = {
    showMenu: false,
    choice: 1
  };

  toggleMenu = () => {
    this.setState((prevState) => (
      { showMenu: !prevState.showMenu }
    ));
  }

  render() {
    let menuClasses = ["Dropdown"]
    let menuLinks = [];

    if (this.state.showMenu) {
      menuClasses.push("Show");

      for (let i = 0; i < this.props.menuLinks.length; i++) {
        menuLinks.push(
          <li><span>{this.props.menuLinks[i]}</span></li>
        );
        menuLinks.push(
          <li className="Separator"></li>
        );
      }
      menuLinks.pop();
    }


    return (
      <Auxi>
        <li className="NavbarDropdown">
          <span onClick={this.toggleMenu} className="DropdownToggler" data-dropdown="my-dropdown-id">
            {this.props.children}
          </span>
          <ul className={menuClasses.join(' ')} id="my-dropdown-id">
            {menuLinks}
          </ul>
        </li>
        <Backdrop show={this.state.showMenu}/>
      </Auxi>
    );
  }
}

export default Dropdown;