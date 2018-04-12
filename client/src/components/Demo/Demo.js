import React, { Component } from "react";
import styled from "styled-components";
import DemoForm from "../DemoForm";
import DemoPhone from "../DemoPhone";
// import DemoReview from "../DemoReview";
import "./Demo.css";

const Wrapper = styled.div`
  // just a placeholder for now
  background: rgba(255, 255, 255, 0.2);
  max-width: 960px;
  margin: 0 auto;
`;

class Demo extends Component {
  state = {
    name: "James",
    email: "",
    phone: "",
    website: "",
    reviewResponses: []
  };

  render() {
    return (
      <Wrapper>
        <h3>Review Platform Demo</h3>
        <DemoForm
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          website={this.state.website}
        />
        <DemoPhone
          name={this.state.name}
          reviewResponses={this.state.reviewResponses}
        />
        {/* <DemoReview
          name={this.state.name}
          reviewRating={this.state.reviewRating}
          reviewResponse={this.state.reviewResponse}
        /> */}
      </Wrapper>
    );
  }
}

export default Demo;
