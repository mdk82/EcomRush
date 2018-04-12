import React, { Component } from "react";
import DashboardNav from "../../components/DashboardNav";
import DashboardFooter from "../../components/DashboardFooter";
import "../../Dashboard.css";


class Customers extends Component {
  render() {
    return (
      <div className="dashboard__layout">
        <DashboardNav />
        <header>
          <h2 class="page__title">Customer</h2>
        </header>
        <article>
          <p>Article</p>
        </article>
        <DashboardFooter />
      </div>
    );
  }
}

export default Customers;
