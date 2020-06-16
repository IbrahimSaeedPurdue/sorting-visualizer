import React, { Component } from 'react';
import '../../Toolbar/Toolbar.scss';

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
      <li className="NavbarDropdown">
        <span onClick={this.toggleMenu} className="DropdownToggler" data-dropdown="my-dropdown-id">
          {this.props.children}
        </span>
        <ul className={menuClasses.join(' ')} id="my-dropdown-id">
          {menuLinks}
        </ul>
      </li>
    );
  }
}

export default Dropdown;