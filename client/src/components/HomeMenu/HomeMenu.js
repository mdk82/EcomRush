import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HomeMenu.css";

class HomeMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="" className="menu-item" href="/">
          Home
        </a>
        <a id="" className="menu-item" href="/demo">
          Demo
        </a>
        <a id="" className="menu-item" href="/features">
          Features
        </a>
        <a id="" className="menu-item" href="/pricing">
          Pricing
        </a>
        <a id="" className="menu-item" href="/about">
          About
        </a>
        <a id="" className="menu-item" href="/contact">
          Contact
        </a>
        <hr className="menu__break" />
        <a className="menu-item--small" href="/dashboard">
          Dashboard
        </a>
      </Menu>
    );
  }
}

export default HomeMenu;
