import React, { Component } from "react";
import styled from "styled-components";
import Review from "../Review";
import "./DemoReview.css";

const FullPage = styled.div`
  background: linear-gradient(69deg, #62AFFE, #B4FFCD);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
`;

const ReviewWrapper = styled.div`
  margin: 0 auto;
  background: white;
  max-width: 800px;
  -moz-box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 15px 2px rgba(0, 0, 0, 0.1);
  h1,h2,h3,h4,h5,h6,p {color: #1f1f1f;}
  @media only screen and (max-width: 660px) {
    margin: 20px;
  }
`;

const NavBar = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #f1f1f1;
  -webkit-box-shadow: 0 2px 10px -2px grey;
  -moz-box-shadow: 0 2px 10px -2px grey;
  box-shadow: 0 2px 10px -2px grey;
  z-index: 10;
`;
const NavMenu = styled.div`
  position: absolute;
  top: 35px;
  left: 30px;
  margin: 0 auto;
  .line {
    height: 5px;
    width: 40px;
    margin: 5px 0;
    background: grey;
    border-radius: 10px;
  }
  @media only screen and (max-width: 600px) {
    top: 35px;
    left: 20px;
  }
`;

const NavLogo = styled.img`
  max-width: 180px;
  margin: 0 auto;
`;

const ProductInfo = styled.div`
  width: 100%;
  background: none;
`;


const ImgWrapper = styled.div`
  max-width: 350px;
  padding: 0px;
  display: grid;
  justify-items: center;
  background: none;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
const ProductDetails = styled.div`
  max-width: 800px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  justify-items: center;
  background: none;
  margin: 0 auto;
  p,
  h6 {
    line-height: 200%;
  }
`;

const Message = styled.div`
  max-width: 500px;
  background: none;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  color: white;
  .top__message {
    margin: 30px 0;
  }
`;

const Buttons = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 30px 0 75px 0;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  color: white;
`;

const EnterButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 16px;
  letter-spacing: 1px;
  background: none;
  border: 2px solid white;
  transition: background 0.35s ease-in-out, color 0.35s ease-in-out;
  margin: 10px;
  :hover, :active {
    background: white;
    color: #62AFFE;
  }
  #left {
    float: left;
  }
  #right {
    float: right;
  }
`;



class DemoReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <FullPage>
        <Message>
          <h5 className="top__message">View Your Review Below</h5>
        </Message>
      <div className="wrapperreview">
        <ReviewWrapper>
          <NavBar>
            <NavMenu>
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </NavMenu>
            <NavLogo src={"/images/demostore-logo.png"} alt="" />
          </NavBar>
          <ProductInfo>
            <ImgWrapper>
              <img
                className="productImg"
                src={"/images/white-nmd2.jpg"}
                alt=""
              />
            </ImgWrapper>
            <ProductDetails>
              <h5>Adidas White NMD_R1</h5>
              <h6>$130</h6>
              <p>
                Rooted in adidas heritage but designed for the present, the
                NMD_R1 is the foundation of the product line. These fashionable,
                functional shoes for men are full of urban wanderlust. Taking
                design cues from technical outerwear, these men's shoes
                seamlessly blend adidas heritage with the latest innovations.
                They feature a sock-like knit upper riding on responsive Boost
                cushioning that keeps you feeling light and fast.
              </p>
            </ProductDetails>
          </ProductInfo>
          <Review/>
        </ReviewWrapper>
      </div>
        <Message>
            <h6>Thanks for checking out our quick demo.</h6>
            <h6>We have an awesome email version as well.</h6>
        </Message>
        <Buttons>
          <a href="/">
            <EnterButton id="right">Back To Homepage</EnterButton>
          </a>
        </Buttons>
      </FullPage>
    );
  }
}

export default DemoReview;
