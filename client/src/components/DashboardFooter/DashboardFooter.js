import React, { Component, Fragment } from "react";
import "./DashboardFooter.css";

class DashboardFooter extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Fragment>
        <footer>
          &copy; 2018 EcomRush All Rights Reserved
        </footer>
      </Fragment>
    );
  }
}

export default DashboardFooter;
