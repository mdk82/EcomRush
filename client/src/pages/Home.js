import React, { Component } from 'react';
import styled from "styled-components";
import HomeMenu from "../components/HomeMenu";

const FullPage = styled.div`
  background: linear-gradient(69deg, #62AFFE, #B4FFCD);
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

const Card = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px;
  display: grid;
  justify-items: center;
  background: none;
  p {
    margin: 10px;
  }
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

const EnterButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 16px;
  letter-spacing: 1px;
  background: none;
  border: 2px solid white;
  transition: background 0.35s ease-in-out, color 0.35s ease-in-out;
  margin-top: 20px;
  :hover, :active {
    background: white;
    color: #62AFFE;
  }
`;

class Home extends Component {
  render() {
    return (
      <FullPage>
        <HomeMenu />
        <Wrapper>
          <Card>
            <Logo> 
              <img src="https://static1.squarespace.com/static/56cfba20b654f9decd1743aa/t/5abc244970a6ad9323327eef/1522279497506/ecomrush-white.png" alt="ECOMRUSH" />
            </Logo>
            <h3>We believe in honesty and accuracy.</h3>
            <p>Your customers have great things to say, let's hear about them.</p>
            <a href="/demo">
              <EnterButton>View Demo</EnterButton>
            </a>
          </Card>
        </Wrapper>
      </FullPage>
    );
  }
}

export default Home;
