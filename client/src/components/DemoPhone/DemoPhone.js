import React, { Component } from "react";
// import styled from "styled-components";
import "./DemoPhone.css";
import TheChatBot from "../ChatBot";

// const PhoneWrapper = styled.form`
//   margin: 0 auto;
// `;

class DemoPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="phonewrapper">
        <div className="iphone">
          <div className="border">
            <TheChatBot
              name={this.props.name}
              reviewResponses={this.props.reviewResponses}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DemoPhone;
