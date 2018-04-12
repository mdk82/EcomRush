import React, { Component } from "react";
import Auth from "./utils/Auth";
// Pages
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import DemoReview from "./components/DemoReview";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import ChatBot from "./components/ChatBot";
// import TheChatDemo from "./pages/TheChatDemo";
import DemoReviewField from "./pages/DemoReviewField";
import StyleGuide from "./pages/StyleGuide";

// Dashboard Pages
import Dashboard from "./pages/DashboardPages/Dashboard";
import Billing from "./pages/DashboardPages/Billing";
import Customers from "./pages/DashboardPages/Customers";
import Questions from "./pages/DashboardPages/Questions";
import Reviews from "./pages/DashboardPages/Reviews";
import Settings from "./pages/DashboardPages/Settings";
import Triggers from "./pages/DashboardPages/Triggers";

// Styling
import "./App.css";
// import styled from 'styled-components';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/demo/store" component={DemoReview} />
            <Route exact path="/chatbot" component={ChatBot} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/demoreview" component={DemoReviewField} />
            <Route exact path="/styleguide" component={StyleGuide} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard/reviews" component={Reviews} />
            <PrivateRoute
              exact
              path="/dashboard/questions"
              component={Questions}
            />
            <PrivateRoute
              exact
              path="/dashboard/customers"
              component={Customers}
            />
            <PrivateRoute
              exact
              path="/dashboard/triggers"
              component={Triggers}
            />
            <PrivateRoute
              exact
              path="/dashboard/settings"
              component={Settings}
            />
            <PrivateRoute exact path="/dashboard/billing" component={Billing} />

            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
