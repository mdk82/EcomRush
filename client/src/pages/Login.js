import React, { Component } from "react";
import HomeMenu from "../components/HomeMenu";
import API from "../utils/API";
import Auth from "../utils/Auth";
import { Link } from "react-router-dom";
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

const LoginForm = styled.div`
  margin-top: -40vh;
`;

const LoginButton = styled.button`
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

class Login extends Component {
  state = {
    email: "",
    password: "",
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleLogin = event => {
    event.preventDefault();
    if (
      this.state.email &&
      this.state.password &&
      this.state.password.length >= 6
    ) {
      this.authenticate();
    } else {
      this.setState({
        errorMessage: "Please enter valid username and password to sign in."
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
          <LoginForm>
            <form>
              <h1 className="h4 mb-3 font-weight-normal">Please login</h1>
              <label htmlFor="username" className="sr-only">
                email
              </label>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                onFocus={this.handleFocus}
                name="email"
                type="email"
                placeholder="Email (required)"
                className="form-control"
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
                className="form-control"
                required=""
              />
              {/* <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div> */}
              <div className="checkbox mb-3 text-danger">
                {this.state.errorMessage}
              </div>
              <LoginButton>
                <a
                  disabled={
                    !(
                      this.state.email &&
                      this.state.password &&
                      this.state.password.length >= 6
                    )
                  }
                  onClick={this.handleLogin}
                >
                  Login
                </a>
              </LoginButton>
              <p className="mt-5 mb-3">
                Don't have an account?&nbsp;&nbsp;
                <Link to={"/signup"}>Sign Up</Link>
              </p>
            </form>
          </LoginForm>
        </Wrapper>
      </FullPage>
    );
  }
}

export default Login;
