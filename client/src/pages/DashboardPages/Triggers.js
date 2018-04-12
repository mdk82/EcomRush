import React, { Component } from "react";
import DashboardNav from "../../components/DashboardNav";
import DashboardFooter from "../../components/DashboardFooter";
import "../../Dashboard.css";


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard__layout">
        <DashboardNav />
        <header>
          <h2 class="page__title">Triggers</h2>
        </header>
        <article>
          <h4>Coming Soon... Phase II</h4>
        </article>
        <DashboardFooter />
      </div>
    );
  }
}

export default Dashboard;
