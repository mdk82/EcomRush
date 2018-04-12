import React from "react";
import { slide as Menu } from 'react-burger-menu';
import "./DashboardNav.css";

class DashboardNav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div class="mobile__menu">
        <Menu>
          <a id="home" className="menu-item" href="/">Dashboard</a>
          <a id="about" className="menu-item" href="/about">Reviews</a>
          <a id="about" className="menu-item" href="/about">Questions</a>
          <a id="contact" className="menu-item" href="/contact">Customers</a>
          <a id="contact" className="menu-item" href="/contact">Triggers</a>
          <a id="contact" className="menu-item" href="/contact">Billing</a>
          <a id="contact" className="menu-item" href="/contact">Settings</a>
          <hr className="menu__break" /> 
          <a onClick={ this.showSettings } className="menu-item--small" href="">Main Site</a>
          <a className="menu-item--small" href="">Contact</a>
          <a className="menu-item--small" href="">About</a>
          <a className="menu-item--small" href="">Privacy Policy</a>
          <a className="menu-item--small" href="">Terms &amp; Conditions</a>
        </Menu>
      </div>
    );
  }
}

export default DashboardNav;
