import React, { Component } from "react";
import styled from "styled-components";
import HomeMenu from "../components/HomeMenu";
import API from "../utils/API";
// import Review from "../components/Review";

const FullPage = styled.div`
  background: linear-gradient(69deg, #62affe, #b4ffcd);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 50px 0;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  color: white;
`;

const Message = styled.div`
  max-width: 500px;
  background: none;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 10px;
  .quick__message {
    max-width: 400px;
    margin: 15px auto;
    line-height: 1.2;
  }
`;

const ImgWrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  display: grid;
  justify-items: center;
  background: none;
  margin: 0 auto;

  img {
    width: 100%;
    -moz-box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
  }
`;

const EnterButton = styled.button`
  width: 300px;
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

class Demo extends Component {
  state = {
    email: "",
    errorMessage: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitEmail = () => {
    const userEmail = {
      email: this.state.email
    };
    API.sendEmail(userEmail)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });

        // hard redirect to / to reload all the state and nav
        window.location.href = "/demo";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleEmail = event => {
    event.preventDefault();
    if (this.state.email) {
      this.submitEmail();
    } else {
      this.setState({
        errorMessage: "Please enter valid email address."
      });
    }
  };

  render() {
    return (
      <FullPage>
        <HomeMenu />
        <Wrapper>
          <Message>
            <h5>Text DEMO to</h5>
            <h4>(949)565-4183</h4>
            <h5>OR</h5>
            <h5>Input your email address</h5>
            <input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <a onClick={this.handleEmail}>
              <EnterButton>Submit Email</EnterButton>
            </a>
            <h6>To write a review about the product below.</h6>
            <ImgWrapper>
              <img
                className="productImg"
                src={"/images/white-nmd2.jpg"}
                alt="adidas white shoes"
              />
            </ImgWrapper>
            <br />
            <h6 className="product__title">Adidas White NMD_R1</h6>

            <div className="quick__message">
              Through your text, you will be able to write a review.
            </div>
            <div className="quick__message">
              After you finish your reivew, click below to view your review and
              what other people had to say about the product.
            </div>
            <a href="/demo/store">
              <EnterButton>View Your Review</EnterButton>
            </a>
          </Message>
        </Wrapper>
      </FullPage>
    );
  }
}

export default Demo;
