import React, { Component } from "react";
import styled from "styled-components";
import Demo from "../components/Demo";

const Wrapper = styled.div`
  // just a placeholder for now
  background: rgba(255, 255, 255, 0.2);
  max-width: 960px;
  margin: 0 auto;
`;

class Demo extends Component {
  render() {
    return (
      <Wrapper>
        <h3>Review Platform Demo</h3>
        <Demo />
      </Wrapper>
    );
  }
}

export default Demo;
