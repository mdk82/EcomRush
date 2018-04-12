import React, { Component, Fragment } from "react";
// import { slide as Menu } from 'react-burger-menu';
import "./DashboardNav.css";

class DashboardNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <nav className="mobile__nav">
          <div className="mobile__nav__icon">
            <span />
            <span />
            <span />
          </div>
          <div className="nav__items">
            <a id="dashboard" className="nav__item" href="/dashboard">
              Dashboard
            </a>
            <a id="reviews" className="nav__item" href="/dashboard/reviews">
              Reviews
            </a>
            <a id="questions" className="nav__item" href="/dashboard/questions">
              Questions
            </a>
            <a id="customers" className="nav__item" href="/dashboard/customers">
              Customers
            </a>
            <a id="triggers" className="nav__item" href="/dashboard/triggers">
              Triggers
            </a>
            <a id="settings" className="nav__item" href="/dashboard/settings">
              Settings
            </a>
            <a id="billing" className="nav__item" href="/dashboard/billing">
              Billing
            </a>
            <a className="nav__item" href="">
              Main Site
            </a>
            <a className="nav__item" href="">
              Contact
            </a>
            <a className="nav__item" href="">
              About
            </a>
            <a className="nav__item" href="">
              Privacy Policy
            </a>
            <a className="nav__item" href="">
              Terms &amp; Conditions
            </a>
          </div>
        </nav>
        <nav className="desktop__nav">
          <div className="logo">
            <a id="" className="" href="/dashboard">
              {/* <img src={"/images/ecomrush-white.png"} alt="ECOMRUSH" /> */}
              <img
                src="https://static1.squarespace.com/static/56cfba20b654f9decd1743aa/t/5abc244970a6ad9323327eef/1522279497506/ecomrush-white.png"
                alt="ECOMRUSH"
              />
            </a>
          </div>
          <hr className="item__break" />
          <div className="nav__items">
            <a id="dashboard" className="nav__item" href="/dashboard">
              Dashboard
            </a>
            <a id="reviews" className="nav__item" href="/dashboard/reviews">
              Reviews
            </a>
            <a id="questions" className="nav__item" href="/dashboard/questions">
              Questions
            </a>
            <a id="customers" className="nav__item" href="/dashboard/customers">
              Customers
            </a>
            <a id="triggers" className="nav__item" href="/dashboard/triggers">
              Triggers
            </a>
            <a id="settings" className="nav__item" href="/dashboard/settings">
              Settings
            </a>
            <a id="billing" className="nav__item" href="/dashboard/billing">
              Billing
            </a>
            <hr className="item__break" />
            <a className="nav__item nav__small" href="/">
              Main Site
            </a>
            <a className="nav__item nav__small" href="/contact">
              Contact
            </a>
            <a className="nav__item nav__small" href="/about">
              About
            </a>
            <a className="nav__item nav__small" href="/privacy">
              Privacy Policy
            </a>
            <a className="nav__item nav__small" href="/terms">
              Terms &amp; Conditions
            </a>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default DashboardNav;
