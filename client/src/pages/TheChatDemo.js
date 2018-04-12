import React, { Component } from "react";
import styled from "styled-components";
import ChatDemo from "../components/ChatDemo";

const Wrapper = styled.div`
  // just a placeholder for now
  background: rgba(255, 255, 255, 0.2);
  max-width: 960px;
  margin: 0 auto;
`;

class TheChatDemo extends Component {
  render() {
    return (
      <Wrapper>
        <h3>Review Platform Demo</h3>
        <ChatDemo />
      </Wrapper>
    );
  }
}

export default TheChatDemo;
