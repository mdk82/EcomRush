import React, { Component } from "react";
import "./DemoForm.css";
import styled from "styled-components";

const FormWrapper = styled.form`
  max-width: 350px;
  height: 500px;
  background: #1f1f1f;
  margin: 30px auto;
  -moz-box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      website: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className="demoForm">
        <FormWrapper>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={this.state.website}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="phone"
              placeholder="Phone"
              value={this.state.website}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Company Website"
              value={this.state.website}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </FormWrapper>
      </div>
    );
  }
}

export default DemoForm;
