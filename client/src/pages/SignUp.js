import React, { Component } from "react";
import API from "../utils/API";
import Auth from "../utils/Auth";
import HomeMenu from "../components/HomeMenu";
import { Input } from "../components/Form";
import styled from "styled-components";

const FullPage = styled.div`
  background: linear-gradient(69deg, #62affe, #b4ffcd);
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  max-width: 500px;
  display: grid;
  justify-items: center;
  img {
    width: 100%;
    margin: 0;
  }
`;

const SignUpForm = styled.div`
  margin-top: -40vh;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  letter-spacing: 1px;
  background: none;
  border: 2px solid white;
  transition: background 0.35s ease-in-out, color 0.35s ease-in-out;
  margin-top: 20px;
  :hover,
  :active {
    background: white;
    color: #62affe;
  }
`;

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    // userType: "",
    errorMessage: null
  };

  componentDidMount() {}

  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/dashboard";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  signUp = () => {
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
      //   userType: this.state.userType
    };

    // console.log("signup");
    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });

        // authenticate the user after successful sign up
        this.authenticate();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.email &&
      this.state.password
      //   this.state.userType
    ) {
      this.signUp();
    } else {
      this.setState({
        errorMessage: "Please enter all required fields to sign up."
      });
    }
  };

  render() {
    return (
      <FullPage>
        <HomeMenu />
        <Wrapper>
          <Logo>
            <img
              src="https://static1.squarespace.com/static/56cfba20b654f9decd1743aa/t/5abc244970a6ad9323327eef/1522279497506/ecomrush-white.png"
              alt="ECOMRUSH"
            />
          </Logo>
          <SignUpForm>
            <form>
              <h1>Please sign up</h1>
              <label htmlFor="name">Name</label>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                onFocus={this.handleFocus}
                name="name"
                type="name"
                placeholder="Name (required)"
                // className="form-control"
                required=""
                autoFocus={true}
              />
              <label htmlFor="username" className="sr-only">
                Email
              </label>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                onFocus={this.handleFocus}
                name="email"
                type="email"
                placeholder="Email (required)"
                // className="form-control"
                required=""
                autoFocus={true}
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (required)"
                // className="form-control"
                required=""
              />
              {/* <label htmlFor="password" className="sr-only">
              Password
            </label> */}
              {/* <select
            value={this.state.userType}
            onChange={this.handleInputChange}
            name="userType"
            placeholder="User type"
            className="form-control"
            required=""
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select> */}
              <div className="checkbox mb-3 text-danger">
                {this.state.errorMessage}
              </div>
              <div className="mb-3">
                <SubmitButton>
                  <a
                    disabled={
                      !(
                        this.state.email &&
                        this.state.password &&
                        this.state.password.length >= 6
                      )
                    }
                    onClick={this.handleFormSubmit}
                  >
                    Sign Up
                  </a>
                </SubmitButton>
              </div>
            </form>
          </SignUpForm>
        </Wrapper>
      </FullPage>
    );
  }
}

export default SignUp;
